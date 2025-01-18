import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// Directory containing markdown files
const articlesDir = path.join(process.cwd(), 'app/_articles');

// Function to read markdown files and convert to JSON
function convertMarkdownToJson() {
  const floders = fs.readdirSync(articlesDir);
  for (const floder of floders) {
    if (floder != '.DS_Store' && !floder.includes('articles_')) {
        const floderFiles = fs.readdirSync(articlesDir+`/${floder}`);
        const articles = floderFiles
            .filter(file => file.endsWith('.md'))
            .map(file => {  
            const filePath = path.join(articlesDir,floder, file);
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            const { data } = matter(fileContent);
            data['fileName']=file.replace('.md','');
        return {
            ...data, // Extracted front matter
        };
        });
        fs.writeFileSync(`${articlesDir}/articles_${floder}.json`, JSON.stringify(articles, null, 2));
    }
  }


//   // Write the JSON to a file
//   
}

// Run the function
convertMarkdownToJson();