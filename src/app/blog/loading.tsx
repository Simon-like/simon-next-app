/**
 * 预取多少路由取决于它是静态的还是动态的：
 * 静态路由：预取完整路由。
 * 动态路由loading.tsx：跳过预取，或者如果存在则部分预取路由。
 * 当导航到动态路由时，客户端必须等待服务器响应才能显示结果。这会给用户一种应用程序没有响应的印象。
 * 我们建议添加loading.tsx到动态路由以启用部分预取、触发即时导航并在路由呈现时显示加载 UI
 * @returns 
 */

export default function Loading() {
    // Add fallback UI that will be shown while the route is loading.
    return (
        <div className="">我在loading....</div>
    )
  }