'use client';

import {useParams} from 'next/navigation';
import {useTransition} from 'react';
import {usePathname, useRouter} from '@/i18n/routing';
import {useLocale, useTranslations} from 'next-intl';
import {routing} from '@/i18n/routing';

export default function LocaleSwitcherSelect() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();
  const t = useTranslations('LocaleSwitcher');
 const locale = useLocale();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <label>
      <p className="sr-only">{locale}</p>
      <select
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {
          routing.locales.map((cur) => (
            <option key={cur} value={cur}>
              {t('locale', {locale: cur})}
            </option>
          ))
        }
      </select>
    </label>
  );
}