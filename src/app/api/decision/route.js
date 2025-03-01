// pages/api/decision.js
import pg_query from '@/lib/pg';
import { NextResponse } from 'next/server';

export async function GET(request) {
  var { searchParams } = new URL(request.url);
  var pageSize = searchParams.get('pageSize');
  var page = searchParams.get('page');
  var label = searchParams.get('label');
  var classification = searchParams.get('classification');
  const whereConditions = [];
  if (label){
    if(label==='null'){
      whereConditions.push(`label is null`);
    }else{
      whereConditions.push(`label = '${label}'`);
    }
  }

  if (classification) {
    whereConditions.push(`classification = '${classification}'`);
  }
      try{
        pageSize=parseInt(pageSize)
      }catch{
        pageSize=20
      }
      try{
        label=parseInt(pageSize)
      }catch{
        pageSize=20
      }
      const whereClause = whereConditions.length > 0 ? 'WHERE ' + whereConditions.join(' AND ') : '';

      const query = `SELECT * FROM decision ${whereClause} LIMIT $2 OFFSET ($1 - 1) * $2;`;
      
      const values = [
        page,
        pageSize,
      ];
      try {
          const data = await pg_query(query,values);
          return NextResponse.json(data);
      } catch (error) {
          console.error(error);
          return NextResponse.json({ message: 'Internal Server Error' });
      }
    }

    export async function POST(request) {
      const postData =  await request.json();
      const values = [
        postData.id || null, // 如果 id 为空，则传递 null
        postData.name,
        postData.overview,
        postData.classification,
        postData.compound_interest,
        postData.compound_interest_detail,
        postData.first_principle,
        postData.first_principle_detail,
        postData.like,
        postData.like_detail,
        postData.tech,
        postData.tech_detail,
        postData.product_market_fit,
        postData.intuition,
        postData.label,
        postData.user_profile,
        postData.lever,
        postData.power_law,
        postData.keywords
      ];

    
      const upsertQuery = `
        INSERT INTO decision (
          id, name, overview, classification, compound_interest, 
          compound_interest_detail, first_principle, first_principle_detail,
          "like", like_detail, tech, tech_detail, product_market_fit,
          intuition, "label", user_profile, "lever", power_law, "keywords"
        )
        VALUES (COALESCE($1, uuid_generate_v4()), $2, $3, $4, $5, $6, $7, $8, 
                $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19)
        ON CONFLICT (id) 
        DO UPDATE SET 
          name = EXCLUDED.name,
          overview = EXCLUDED.overview,
          classification = EXCLUDED.classification,
          compound_interest = EXCLUDED.compound_interest,
          compound_interest_detail = EXCLUDED.compound_interest_detail,
          first_principle = EXCLUDED.first_principle,
          first_principle_detail = EXCLUDED.first_principle_detail,
          "like" = EXCLUDED."like",
          like_detail = EXCLUDED.like_detail,
          tech = EXCLUDED.tech,
          tech_detail = EXCLUDED.tech_detail,
          product_market_fit = EXCLUDED.product_market_fit,
          intuition = EXCLUDED.intuition,
          "label" = EXCLUDED."label",
          user_profile = EXCLUDED.user_profile,
          "lever" = EXCLUDED."lever",
          power_law = EXCLUDED.power_law,
          "keywords" = EXCLUDED."keywords"
      `;

      const data = await pg_query(upsertQuery, values);

      // 处理 POST 请求
      return NextResponse.json(data);
    };
