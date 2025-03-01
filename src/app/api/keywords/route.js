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
  var pageSize = searchParams.get('pageSize');
  var page = searchParams.get('page');
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
      const whereClause = whereConditions.length > 0 ? 'WHERE ' + whereConditions.join(' AND ') : '';

      try{
        pageSize=parseInt(pageSize)
      }catch{
        pageSize=20
      }
      const query = `SELECT * FROM domain_keywords_meger ${whereClause} ORDER BY "Search Volume" DESC LIMIT $2 OFFSET ($1 - 1) * $2;`;
      const values = [
        page,
        pageSize,
      ];
      try {
          const data = await pg_query(query,values);
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
