// Dummy imports
import Link from 'next/link';
import PostBlock from '@/ui/post';

export default async function Post() {
  const posts = [
    { id: 1, title: 'simon', content: 'test', slug: 1 },
    { id: 2, title: 'simon', content: 'test', slug: 2 },
    { id: 3, title: 'simon', content: 'test', slug: 3 },
    { id: 4, title: 'simon', content: 'test', slug: 4 },
    { id: 5, title: 'simon', content: 'test', slug: 5 },
  ];

  return (
    <>
      <ul>
        {posts.map(post => (
          <li key={post.slug}>
            {/* 当组件进入用户视口时，Next.js 会自动预取与<Link>组件链接的路由。一半的a标签则无法享受此功能 */}
            <Link href={`/blog/${post.slug}`}>{post.title + post.id}</Link>
          </li>
        ))}
      </ul>
      <main>
        {posts.map(post => (
          <PostBlock key={post.id} content={post.content} title={post.title} />
        ))}
      </main>
    </>
  );
}
