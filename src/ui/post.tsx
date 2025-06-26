'use client';
import React from 'react';

interface PostProps {
  title: string;
  content: string;
}

const Post: React.FC<PostProps> = props => {
  const { title, content } = props;
  return (
    <article>
      <h1>{title}</h1>
      <p>{content}</p>
    </article>
  );
};

export default Post;
