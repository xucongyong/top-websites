//NextJs App Router - Multiple Sitemaps & Sitemap Index. https://www.youtube.com/watch?v=BtaqYRrDeK4
import { NextResponse } from 'next/server';
import {DOMAINURL} from '@/env'
export const runtime = "edge";


import { GithubListContents } from '@/lib/github'

async function buildPagesSitemap(pages) {
  const baseUrl = DOMAINURL;

  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  for (const { url, lastModified, changeFrequency, priority } of pages) {
    xml += "<url>";
    xml += `<loc>${baseUrl}${url}</loc>`;
    if (lastModified) {
      xml += `<lastmod>${lastModified}</lastmod>`;
    }
    if (changeFrequency) {
      xml += `<changefreq>${changeFrequency}</changefreq>`;
    }
    if (priority) {
      xml += `<priority>${priority}</priority>`;
    }
    xml += "</url>";
  }

  xml += "</urlset>";
  return xml;
}

async function buildSitemapIndex(sitemaps) {
  const baseUrl = config.URL_PREFIX;

  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  for (const url of sitemaps) {
    xml += "<sitemap>";
    xml += `<loc>${baseUrl}${url}</loc>`;
    xml += "</sitemap>";
  }

  xml += "</sitemapindex>";
  return xml;
}
export async function GET(request) {
  var locales = ['en', 'de', 'zh']
  var pages=[]
  for (var i = 0; i < locales.length; i++) {
    const allArticlesData = await GithubListContents(`app/_articles/articles_${locales[i]}.json`);
    var allArticlesDatajson = JSON.parse(allArticlesData)
    for (var j = 0; j < allArticlesDatajson.length; j++) {
      allArticlesDatajson[j].lastModified = new Date().toISOString()
      allArticlesDatajson[j].changeFrequency = 'monthly'
      allArticlesDatajson[j].priority = 0.8
      allArticlesDatajson[j].url = `/${locales[i]}/articles/${allArticlesDatajson[j].fileName}`
      pages.push(allArticlesDatajson[j])
    }
  }
  const data = await buildPagesSitemap(pages)

  return new NextResponse(data,{
    headers:{
      'Content-Type': 'application/xml',
      'Content-Length': Buffer.byteLength(data).toString()
    }
  });

}
