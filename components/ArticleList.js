import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import ArticleListNav from '@/components/ArticleListNav'
import {useLocale} from 'next-intl';

function ArticleCards({ articles, locale }) {
  return (
    <div className="space-y-6">
      {articles.map(({ title, description, fileName }) => (
        <Card key={fileName}>
          <CardHeader>
            <Link
              href={`/${locale}/articles/${fileName}`}
              className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
            >
              <CardTitle>{title}</CardTitle>
              →
            </Link>
            <CardDescription>{description}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  );
}

export default function ArticleList({ 
  articles, // 过滤后的文章，用于显示
  category = '', 
  showMoreLink = false 
}) {
  const locale = useLocale();
  // 如果有分类，过滤文章
  const filteredArticles = category
    ? articles.filter(article => {
        if (!article.category) return false;
        const articleCategories = article.category.split('/').map(c => c.trim()).join('/');
        // 检查文章分类是否以当前选中的分类开头
        return articleCategories.startsWith(category);
      })
    : articles;

  // 按日期排序
  const sortedArticles = filteredArticles.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    return dateB - dateA;
  });

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold tracking-tighter">Articles</h2>
        {showMoreLink && (
          <Link href={`/${locale}/articles`} className="text-blue-600 hover:text-blue-800 transition-colors">
            More articles →
          </Link>
        )}
      </div>
      
      <div className="flex gap-8">
        <ArticleListNav locale={locale} articles={articles} />
        <div className="flex-1">
          { (
            <div className="mb-4 text-sm text-muted-foreground">
              Showing articles in: {category}
            </div>
          )}
          <ArticleCards articles={filteredArticles} locale={locale} />
        </div>
      </div>
    </section>
  );
}
