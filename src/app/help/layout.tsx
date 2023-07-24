'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, PropsWithChildren } from 'react';

const Layout: FC<PropsWithChildren> = ({ children }) => {
  const pathname = usePathname();
  return (
    <section className="mx-2 sm:mx-4">
      <nav className="flex gap-12 mb-4">
        <Link href="/help/faq" className={`${pathname === '/help/faq' ? 'text-pink-500 font-semibold' : 'text-gray-600 font-normal'} hover:text-pink-500 active:text-pink-700 text-lg transition duration-100`}>FAQ</Link>
        <Link href="/help/tos" className={`${pathname === '/help/tos' ? 'text-pink-500 font-semibold' : 'text-gray-600 font-normal'} hover:text-pink-500 active:text-pink-700 text-lg transition duration-100`}>Terms</Link>
      </nav>
      {children}
    </section>
  );
}

export default Layout;
