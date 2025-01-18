'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkMermaidPlugin from 'remark-mermaid-plugin';
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";

export const Markdown = ({ content }) => {
  return (
    <ReactMarkdown
      className="prose lg:prose-xl mx-auto"
      remarkPlugins={[remarkGfm, remarkMermaidPlugin]}
      rehypePlugins={[rehypeRaw, rehypeStringify]}
      components={{
        h1: ({ children }) => {
          const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return <h1 id={id}>{children}</h1>;
        },
        h2: ({ children }) => {
          const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return <h2 id={id}>{children}</h2>;
        },
        h3: ({ children }) => {
          const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return <h3 id={id}>{children}</h3>;
        },
        h4: ({ children }) => {
          const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return <h4 id={id}>{children}</h4>;
        },
        h5: ({ children }) => {
          const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return <h5 id={id}>{children}</h5>;
        },
        h6: ({ children }) => {
          const id = children.toString().toLowerCase().replace(/[^a-z0-9]+/g, '-');
          return <h6 id={id}>{children}</h6>;
        },
      }}
      //eslint-disable-next-line
>{content}</ReactMarkdown>

  );
};

