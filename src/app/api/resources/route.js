
import { NextResponse } from 'next/server';


export async function GET() {
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
  return NextResponse.json(resources);

}
