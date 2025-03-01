import { getLocale } from 'next-intl/server';
import { ArrowLeft } from 'lucide-react'; // 删除未使用的 ChevronRight
import Link from 'next/link';
import ArticleListNav from '@/components/ArticleListNav';
import dynamic from 'next/dynamic';
import {Markdown} from '@/components/Markdown';
// import Markdown from 'react-markdown'

import { GithubListContents } from "@/lib/github";
import matter from "gray-matter";

const MarkdownNav = dynamic(() => import('@/components/MarkdownNav'));
// const MarkdownNav = dynamic(() => import('@/components/MarkdownNav'), {
//   ssr: false
// });

export async function generateMetadata({ params }) {
  var locale = await getLocale();
  const { slug } = await params

  const postData = await GithubListContents(`src/app/_articles/${locale}/${slug[0]}.md`);
  const { data } = matter(postData); // 删除未使用的 content
  return {
    title: `${data.title}`,
    description: data.description || `Read about ${data.title}`,
  };
}

// using the `params` returned by `generateStaticParams`
export default async function Page({ params }) {
  var locale = await getLocale();
  const { slug } = await params

  var postData = await GithubListContents(`src/app/_articles/${locale}/${slug[0]}.md`);


  return (
    // <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left sidebar navigation */}
        <div className="w-32 pr-6">
          <ArticleListNav locale={locale}/>
          </div>
        {/* Main content */}

        <div className="prose">
        {/* <article className="w-full max-w-2xl mx-auto"> */}
          <Markdown content={postData} />
          <div className="mt-12">
          <Link href={"/"+locale+"/articles"} className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-2">
              <ArrowLeft size={20} />
              Back to articles
            </Link>
          </div>
        </div>

        {/* Right sidebar - Table of Contents */}
        <div className="hidden lg:block lg:w-1/6 xl:w-1/8 flex-shrink-0">
          <MarkdownNav content={postData} />
        </div>
      </div>
    // </div>
  );
}
