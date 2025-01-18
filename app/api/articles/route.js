import { NextResponse } from 'next/server';
import pg_query from '@/lib/pg';
import {GithubListContents} from '@/lib/github';
import matter from 'gray-matter';
export const runtime = "edge";
import { getRequestContext } from "@cloudflare/next-on-pages";


export async function GET(request) {

  var fileDataxx = await GithubListContents(process.env.GITHUB_OWNER, process.env.GITHUB_REPO, `src/app/_articles/en`)
  return NextResponse.json(fileDataxx);
}

export async function POST(request) {
  const { article } = await request.json();

  try {
    // Update the MD file
    await updateMdFile(article);

    // Sync articles
    await syncArticles();

    return NextResponse.json({ message: 'Article updated successfully' });
  } catch (error) {
    console.error('Error updating article:', error);
    return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
  }
}

async function updateMdFile(article) {
  try {
    const { data: currentFile } = await octokit.repos.getContent({
      owner:process.env.GITHUB_OWNER,
      repo:process.env.GITHUB_REPO,
      path: article.path,
    });

    const currentContent = Buffer.from(currentFile.content, 'base64').toString('utf8');
    const { data: frontMatter, content: articleContent } = matter(currentContent);

    const updatedFrontMatter = {
      ...frontMatter,
      title: article.title,
      description: article.description,
      lastModified: new Date().toISOString(),
    };

    const updatedContent = matter.stringify(article.content, updatedFrontMatter);


  } catch (error) {
    console.error('Error updating MD file:', error);
    throw error;
  }
}