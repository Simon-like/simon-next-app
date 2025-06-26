/**
 * 动态分段允许您创建基于数据生成的路由。例如，您无需为每篇博客文章手动创建路由，而是可以创建一个动态分段，
 * 根据博客文章数据生成路由。
 * 要创建动态段，请将段（文件夹）名称括在方括号中：[segmentName]。
 * 例如，在路线中app/blog/[slug]/page.tsx，[slug]就是动态段。
 */

// export async function generateStaticParams({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params;
//   //const posts = await fetch('https://.../posts').then((res) => res.json())
//   const posts = [
//     { id: 1, title: 'simon', content: 'test', slug: 1 },
//     { id: 2, title: 'simon', content: 'test', slug: 2 },
//     { id: 3, title: 'simon', content: 'test', slug: 3 },
//     { id: 4, title: 'simon', content: 'test', slug: 4 },
//     { id: 5, title: 'simon', content: 'test', slug: 5 },
//   ];

//   return (
//     <div className=''>
//       {posts.map(post => (
//         <div>{post.id}</div>
//       ))}
//     </div>
//   );
// }

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <div>{'id' + slug}</div>;
}
