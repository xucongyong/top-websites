import Link from 'next/link'
import { GithubListContents } from "@/lib/github";

// 创建嵌套的分类结构
function createCategoryTree(articles) {
  const tree = {
    categories: {},
    articles: []
  };


  articles.forEach(article => {
    let currentLevel = tree;
    const categories = article.category ? article.category.split('/').map(c => c.trim()) : ['Uncategorized'];
    
    // 记录完整的分类路径
    let currentPath = '';
    
    categories.forEach((category, index) => {
      currentPath = currentPath ? `${currentPath}/${category}` : category;
      
      if (!currentLevel.categories[category]) {
        currentLevel.categories[category] = {
          categories: {},
          articles: [],
          path: currentPath // 存储完整路径
        };
      }
      
      // 将文章添加到每一级分类中
      currentLevel.categories[category].articles.push(article);
      currentLevel = currentLevel.categories[category];
    });
  });

  return tree;
}

export default async function ArticleListNav({locale }) {
  var articles = await GithubListContents(`app/_articles/articles_${locale}.json`);
  if (typeof articles === 'string') {
    articles = JSON.parse(articles);
  } else {
    articles = [];
  }
  const categoryTree = await createCategoryTree(articles);

  return (
    <div className="w-32 pr-6 border-r">
      <div className="space-y-2">
        {/* 添加根目录链接 */}
        <Link
          href={`/${locale}/articles`}
          className="text-sm hover:text-blue-600 transition-colors block mb-4 font-medium"
        >
          All Articles ({articles.length})
        </Link>

        {/* 分类列表 */}
        {Object.entries(categoryTree.categories).map(([category, node]) => (
          <div key={category} className="flex flex-col space-y-2">
            <Link
              href={`/${locale}/articles?category=${encodeURIComponent(node.path)}`}
              className="text-sm hover:text-blue-600 transition-colors"
            >
              {category} ({node.articles.length})
            </Link>
            {Object.entries(node.categories).map(([subCategory, subNode]) => (
              <div key={`${category}/${subCategory}`} className="ml-4">
                <Link
                  href={`/${locale}/articles?category=${encodeURIComponent(subNode.path)}`}
                  className="text-sm hover:text-blue-600 transition-colors"
                >
                  {subCategory} ({subNode.articles.length})
                </Link>
                {/* 添加第三级分类 */}
                {Object.entries(subNode.categories).map(([thirdCategory, thirdNode]) => (
                  <Link
                    key={`${category}/${subCategory}/${thirdCategory}`}
                    href={`/${locale}/articles?category=${encodeURIComponent(thirdNode.path)}`}
                    className="text-sm hover:text-blue-600 transition-colors block ml-4 mt-1"
                  >
                    {thirdCategory} ({thirdNode.articles.length})
                  </Link>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
