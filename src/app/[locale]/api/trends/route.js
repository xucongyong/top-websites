// pages/api/keywords_search.js
import pg_query from '@/lib/pg';
import { NextResponse } from 'next/server';

export async function GET(request) {
  var { searchParams } = new URL(request.url);
  //var keywords = searchParams.get('keywords');
  var cpcMin = searchParams.get('cpcMin');
  //var cpcMax = searchParams.get('cpcMax');
  var searchVolumeMin = searchParams.get('searchVolumeMin');
  //var searchVolumeMax = searchParams.get('searchVolumeMax');
  var keywordIntents = searchParams.get('keywordIntents');
  //var pageSize = searchParams.get('pageSize');
  //var page = searchParams.get('page');
  var is_profit = searchParams.get('is_profit');
      // var { keywords, cpcMin, cpcMax, searchVolumeMin, searchVolumeMax, keywordIntents, pageSize,page,is_profit } = request.query;

      // Sanitize user input to prevent SQL injection attacks
      //const safeKeywords = keywords ? `%${keywords.replace(/[-[\]{}()*+?.,\\^$|:]/g, '')}%` : '%%';
      const safeKeywordIntents = keywordIntents ? keywordIntents.split(',').map(intent => `%${intent.replace(/[-[\]{}()*+?.,\\^$|:]/g, '')}%`) : [];
      const safe_is_profit = is_profit ? is_profit.split(',').map(intent => `${intent.replace(/[-[\]{}()*+?.,\\^$|:]/g, '')}`) : [];
  
      // Construct the WHERE clause dynamically
      const whereConditions = [];
      if (searchVolumeMin) whereConditions.push(`"Search Volume" >= ${searchVolumeMin}`);
      if (cpcMin) whereConditions.push(`"CPC" >= ${cpcMin}`);
      if (safeKeywordIntents.length > 0) {
          whereConditions.push(`"Keyword Intents" LIKE ANY(ARRAY[${safeKeywordIntents.map(intent => `'${intent}'`).join(', ')}])`);
      }
      if (safe_is_profit.length > 0) {
        whereConditions.push(`"is_profit" in (${safe_is_profit.map(x => `${x}`).join(',')})`);
    }
      //const whereClause = whereConditions.length > 0 ? 'WHERE ' + whereConditions.join(' AND ') : '';

      // try{
      //   pageSize=parseInt(pageSize)
      // }catch{
      //   pageSize=20
      // }
      const query = `WITH parsed_data AS (
  SELECT 
    keyword,
    trends_semrush::text as trends_semrush_text,  -- Convert to text
    jsonb_array_elements(trends_google::jsonb) as trend_element
  FROM keywords_google 
  WHERE classification is not null 
    AND trends_google IS NOT NULL limit 1000000
),
time_series AS (
  SELECT 
    keyword,
    trends_semrush_text,
    to_timestamp((trend_element->'timelineData'->>'time')::bigint) as actual_time,  -- Convert to timestamp
    date_trunc('day', to_timestamp((trend_element->'timelineData'->>'time')::bigint)) as date,  -- Convert to date
    (trend_element->'timelineData'->>'value')::int as y
  FROM parsed_data
),
keywords_with_non_zero_value AS (
  SELECT DISTINCT keyword
  FROM time_series
  WHERE date < NOW() - INTERVAL '12 months' AND y > 0
),
slope_calculation AS (
  SELECT
    keyword,
    COUNT(*) as n,
    SUM(extract(epoch from date)) as sum_x,  -- Use date for calculations
    SUM(y) as sum_y,
    SUM(extract(epoch from date) * y) as sum_xy,
    SUM(extract(epoch from date) * extract(epoch from date)) as sum_x2
  FROM time_series
  WHERE keyword NOT IN (SELECT keyword FROM keywords_with_non_zero_value)
  GROUP BY keyword
),
keyword_details AS (
  SELECT 
    keyword,
    trends_semrush_text,
    jsonb_agg(jsonb_build_object('time', to_char(date, 'YYYY-MM-DD'), 'value', y)) as time_value_data  -- Format date
  FROM time_series
  GROUP BY keyword, trends_semrush_text
)
SELECT
  sc.keyword,
  kd.trends_semrush_text,
  (sc.n * sc.sum_xy - sc.sum_x * sc.sum_y) / NULLIF(sc.n * sc.sum_x2 - sc.sum_x * sc.sum_x, 0) as slope,
  kd.time_value_data
FROM slope_calculation sc
JOIN keyword_details kd ON sc.keyword = kd.keyword
ORDER BY slope DESC;
`;
     
      
      try {
          const data = await pg_query(query);
          return NextResponse.json(data.rows);
      } catch (error) {
          console.error(error);
          return NextResponse.json({ message: 'Internal Server Error' });
      }
  
    }
    export async function POST(request) {
      const postData = request.body;
      const updateQuery = `
      UPDATE domain_keywords_meger
      SET
       search_intention_content = $2,
        is_profit = $3
      WHERE
        "Keyword" = $1;
    `;
    const values = [
      postData.Keyword,
      postData.search_intention_content,
      postData.is_profit
    ];
    const data = await pg_query(updateQuery, values);

      // 处理 POST 请求
      return NextResponse.json(data.rows);
    };
