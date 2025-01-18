import { Octokit } from '@octokit/rest';
import {GITHUB_OWNER, GITHUB_REPO,GITHUB_TOKEN} from '@/env'

  const octokit = new Octokit({
    auth: GITHUB_TOKEN
  });

   export async function GithubListContents(directoryPath) {
    try {
      const  data  = await octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: directoryPath,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      })
      if (data.data && data.data.content) {
        // Decode the base64 content
        const content = Buffer.from(data.data.content, 'base64').toString('utf-8');
        return content;
      }else{
        return [];
      }

    } catch (error) {
      console.error('Error fetching directory contents:', error);
    throw new Error('Failed to fetch directory contents');
    }
  }
