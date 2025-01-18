import ResourceList from '@/components/ResourceList'
export const runtime = 'edge';
export const metadata = {
  title: 'Resources',
  description: 'Explore our curated list of resources for web development, GitHub, and more.',
}


export default function Resources() {
  const resources=[
    {
      "name": "Next.js",
      "description": "The React Framework for the Web",
      "url": "https://nextjs.org/"
    },
    {
      "name": "Tailwind CSS",
      "description": "A utility-first CSS framework",
      "url": "https://tailwindcss.com/"
    },
    {
      "name": "Shadcn/ui",
      "description": "Re-usable components built with Radix UI and Tailwind CSS",
      "url": "https://ui.shadcn.com/"
    },
    {
      "name": "Vercel",
      "description": "Cloud platform for static sites and Serverless Functions",
      "url": "https://vercel.com/"
    },
    {
      "name": "Github.com",
      "description": "The world's leading platform for version control and collaborative software development.",
      "url": "https://github.com/"
    },
    {
      "name": "Woy.ai",
      "description": "AI Tools Directory",
      "url": "https://woy.ai"
    }
  ]
  return (
    <div className="container mx-auto py-12">
      <ResourceList resources={resources} showMoreLink={false} />
    </div>
  )
}