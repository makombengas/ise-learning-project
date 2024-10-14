import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing, Pathnames, Locale, Link, getPathname, redirect, usePathname, useRouter } from './routing';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!routing.locales.includes(locale)) notFound();

  return {
    messages: (
      await (locale === 'en'
        ? import('../../messages/en.json')	
        : import(`../../messages/${locale}.json`))
    ).default
  };
});