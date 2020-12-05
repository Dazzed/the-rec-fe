import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.push('/admin/users');
  }, []);

  return <p>Redirecting...</p>;
}
