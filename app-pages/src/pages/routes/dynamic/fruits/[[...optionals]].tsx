/*
 * File: [[...optionals]].tsx
 * Project: app-pages
 * Created: Tuesday, September 22nd 2026, 6:02:49 pm
 * Last Modified: Tuesday, September 22nd 2026, 6:13:07 pm
 * Copyright © 2026 AMDE Agência
 * Example: http://localhost:3000/routes/dynamic/fruits/mango/laranja/ma%C3%A7a
 */

import { useRouter } from 'next/router';
import Page from '@/components/Page';

export default function PageOptional() {
  const router = useRouter();
  const optionals = (router.query.optionals ?? []) as string[];

  function renderOption(option: string) {
    return (
      <div className="bg-indigo-500 rounded-lg px-4 py-1 text-xl">{option}</div>
    );
  }

  return (
    <Page>
      <h1 className="font-black mb-7">Optionals</h1>
      <div className="flex gap-5">{optionals.map(renderOption)}</div>
    </Page>
  );
}
