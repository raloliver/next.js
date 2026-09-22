/*
 * File: [...params].tsx
 * Project: app-pages
 * Created: Tuesday, September 22nd 2026, 5:54:16 pm
 * Last Modified: Tuesday, September 22nd 2026, 6:13:42 pm
 * Copyright © 2026 AMDE Agência
 * http://localhost:3000/routes/dynamic/products/info/monitor
 */

import { useRouter } from 'next/router';
import Page from '@/components/Page';

export default function PageProduct() {
  const router = useRouter();
  const [category, product] = (router.query.params ?? []) as string[];

  return (
    <Page>
      <div>
        <p>Category: {category}</p>
        <p>Product: {product}</p>
      </div>
    </Page>
  );
}
