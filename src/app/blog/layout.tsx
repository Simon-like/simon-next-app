export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
    <section>
        <div className="w-full h-40 bg-blue-300"></div>
        {children}
    </section>)
  }