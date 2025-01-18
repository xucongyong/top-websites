import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {setRequestLocale} from 'next-intl/server';
import './globals.css'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import { Header } from '@/components/Header'
import { Metadata } from 'next'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});
 
export const metadata: Metadata = {
  title: {
    default: 'nextjs ',
    template: '%s | template'
  },
  description: 'Open',
}

export default async function RootLayout({children, params: {locale}}: {
    children: React.ReactNode;
    params: {locale: string};
  }) {

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
      notFound();
    }
     // Enable static rendering
     setRequestLocale(locale);
    
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
   
    return (
      <html lang={locale} className={inter.className}>
          <Header />
          <body>
          <NextIntlClientProvider messages={messages}>
           <Layout locale={locale}>{children}</Layout>
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }