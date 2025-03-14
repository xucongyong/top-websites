'use client';

import React, { useState } from 'react';
import LocaleSwitcher from "@/components/LocaleSwitcher"
import Link from 'next/link';

import { navItems } from './navItems';

export const Navbar = (params) => {
  const items = navItems(params.locale);
  const renderNavItems = () => (
    items.map((item, index) => (
      <li key={item.label}>
        <Link
          id={index}
          href={item.path}
          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
        >
          {item.label}
        </Link>
      </li>
    ))
  );
  // 控制移动端菜单是否打开
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 切换移动端菜单
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">XuCongYong</span>
        </Link>
        <div className="flex items-center md:order-2 space-x-1 md:space-x-0 rtl:space-x-reverse">
        <LocaleSwitcher />
        </div>

        {/* 移动端菜单按钮 */}
        <button
          onClick={toggleMobileMenu} // 点击时切换菜单状态
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMobileMenuOpen ? 'true' : 'false'} // 根据状态动态更新 aria-expanded
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* 菜单部分，根据 isMobileMenuOpen 控制显示 */}
        <div
          className={`${
            isMobileMenuOpen ? 'block' : 'hidden'
          } w-full md:block md:w-auto`} // 根据 isMobileMenuOpen 显示或隐藏菜单
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          {renderNavItems()}
          </ul>
        </div>
        

      </div>
    </nav>
  );
};
