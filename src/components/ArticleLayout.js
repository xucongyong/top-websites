import ArticleListNav from './ArticleListNav'

export default function ArticleLayout({ articles, locale, children }) {
  return (
    <div className="container mx-auto py-12">
      <div className="flex gap-8">
        <ArticleListNav articles={articles} locale={locale} />
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}
