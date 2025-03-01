import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 // go to middleware change config mathcher file
export const routing = defineRouting({
  locales: ['en', 'de', 'zh', 'ja', 'es'],
  defaultLocale: 'en',
});
export type Locale = (typeof routing.locales)[number];
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter} =
  createNavigation(routing);