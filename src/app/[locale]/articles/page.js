import { GithubListContents } from "@/lib/github";
import ArticleList from '@/components/ArticleList'

export const metadata = {
  title: 'xucongyong space,learn mathematics, finance quant, computer science. Psychology, neuroscience',
  description: 'xucongyong space,learn mathematics, finance quant, computer science. Psychology, neuroscience',
}

export default async function IndexPage(props) {
  const { category } = await props.searchParams;
  const { locale } = await props.params;
  
  var allArticlesData = await GithubListContents(`src/app/_articles/articles_${locale}.json`);
  if (typeof allArticlesData === 'string') {
    allArticlesData = JSON.parse(allArticlesData);
  } else {
    allArticlesData = [];
  }


  return (
    <div className="container mx-auto py-12">
      <ArticleList 
        articles={allArticlesData}  // 传递过滤后的文章用于显示
        category={category}
        showMoreLink={false}
      />
    </div>
  );
}
