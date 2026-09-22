/*
 * File: index.tsx
 * Project: app-pages
 * Created: Tuesday, September 22nd 2026, 5:44:21 pm
 * Last Modified: Tuesday, September 22nd 2026, 6:14:25 pm
 * Copyright © 2026 AMDE Agência
 * http://localhost:3000/routes/dynamic/monday
 */

import { useRouter } from 'next/router';
import Page from '@/components/Page';

export default function PageDaily() {
  const router = useRouter();
  const { weekday } = router.query;

  return (
    <Page>
      <div>{weekday}</div>
    </Page>
  );
}
