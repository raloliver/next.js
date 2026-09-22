import Page from '@/components/Page';
import { useRouter } from 'next/router';

export default function DynamicRouteById() {
  const router = useRouter();

  return (
    <Page>
      <div>
        <p>Item: {router.query.id}</p>
      </div>
    </Page>
  );
}
