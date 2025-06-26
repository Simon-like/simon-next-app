'use client'; //启用客户端渲染
/**
 * 客户端和服务器环境具有不同的功能。服务器和客户端组件允许您根据用例在各个环境中运行逻辑。
 * 在需要时使用客户端组件：
 * - 状态和事件处理程序. 例如onClick，onChange。
 * - 生命周期逻辑useEffect.例如
 * - 仅限浏览器的 API。例如localStorage，，，等window。Navigator.geolocation
 * -自定义钩子。
 *
 * 在需要时使用服务器组件：
 * - 从靠近源的数据库或 API 获取数据。
 * - 使用 API 密钥、令牌和其他机密，但不将它们暴露给客户端。
 * - 减少发送到浏览器的 JavaScript 数量。
 * - 改进首次内容绘制（FCP），并将内容逐步传输到客户端。
 */

import { useLinkStatus } from 'next/link';

export default function Bloginfo() {
  const { pending } = useLinkStatus();
  return pending ? (
    <div role='status' aria-label='Loading' className='spinner'>
      loading........
    </div>
  ) : (
    <div className=''>bloginfo---simon</div>
  );
}
