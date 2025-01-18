// "use client" 需要在文件顶部添加

import React from 'react';

export const Footer = (params) => {
  const navItems = [
    { path: `/${params.locale}/`, label: 'Home' },
    { path: `/${params.locale}/resources`, label: 'Resource' },
  ];
  const renderNavItems = (isMobile = false) => (
    navItems.map((item,index) => (
      <li key={index}> <a
        key={item.label}
        href={item.path}
        className="hover:underline me-4 md:me-6"
      >
        {item.label}
      </a></li>
    ))
  );
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400"> 2025 <a href="https://www.xucongyong.com/" className="hover:underline">xucongyong</a>. All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {renderNavItems()}
      </ul>
      </div>
  </footer>
  );
};
