// components/Layout.js
'use client';

import { Navbar } from '@/components/Navigation'
import { Footer } from '@/components/Footer'


export function Layout({ children,locale }) {
  return (
    <div>
      <Navbar locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  )
}