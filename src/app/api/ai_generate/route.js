import { deepseek_api} from '@/env'
import OpenAI from "openai";
import { NextResponse } from 'next/server';


const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: deepseek_api
});
export async function POST(request) {
  const postData = await request.json(); // 使用 request.json() 解析请求体
  const model = postData.model;
  const prompt = postData.prompt;
  if(model=="deepseek-r1:14b"){
    const response = await fetch('http://t.xucongyong.com:11434/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: model,
        prompt: prompt,
      }),
    });
    if (!response.ok) {
      return request.status(response.status).json({ error: 'Error from external API' });
    }
  
    const reader = response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let result = [];
    let done = false;
    while (!done) {
      const { value, done: streamDone } = await reader.read();
      done = streamDone;
      if (value) {
        result.push(JSON.parse(decoder.decode(value, { stream: !done })));
      }
    }
    return NextResponse.json(result);
  
    }else if(model=="deepseek-chat"){
      const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: model,
      });    
      return NextResponse.json(completion.choices[0].message);
    }else if(model=="deepseek-reasoner"){
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: model,
      });    
      return NextResponse.json(completion.choices[0].message);
    }

};
