"use client";
import React, {useEffect} from 'react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import rehypeHighlight from 'rehype-highlight';
import 'katex/dist/katex.min.css';
import 'highlight.js/styles/github.css';
import typography from '@tailwindcss/typography'

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    content: string;
    date: string;
  };
}

const BlogPost: React.FC<BlogPostProps> = ({ post }) => {

    useEffect(() => {
        console.log("Post content:", post.content);
      }, [post]);
      
  return (
    <article className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.date}</p>
      <Markdown 
        remarkPlugins={[remarkMath]}
        rehypePlugins={[rehypeKatex, rehypeHighlight]}
        >
        {String(post.content)}
      </Markdown>
    </article>
  );
};

export default BlogPost;