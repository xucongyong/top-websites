'use client';

import { useEffect, useState } from 'react';

function getHeadings(markdown) {
  const headingRegex = /^(#{1,6})\s+(.+)$/gm;
  const headings = [];
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    const level = match[1].length;
    const text = match[2];
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    headings.push({ level, text, id });
  }

  return headings;
}

export default function MarkdownNav({ content }) {
  const [activeId, setActiveId] = useState('');
  const headings = getHeadings(content);

  const handleClick = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -80% 0px' }
    );

    headings.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      headings.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, [headings]);

  return (
    <nav className="sticky top-4">
      <h3 className="font-semibold mb-2 text-xs">Contents</h3>
      <ul className="space-y-1">
        {headings.map(({ text, id, level }) => (
          <li key={id} style={{ paddingLeft: `${(level - 1) * 12}px` }}>
            <button
              onClick={() => handleClick(id)}
              className={`text-xs block py-1 hover:text-blue-600 transition-colors text-left w-full truncate ${
                activeId === id ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              {text}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
