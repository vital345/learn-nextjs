import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export const useIsPageTransitioning = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const loadingStart = () => {
    setLoading(true);
  };

  const loadingEnd = () => {
    setLoading(false);
  };

  useEffect(() => {
    router.events.on('routeChangeStart', loadingStart);
    router.events.on('routeChangeComplete', loadingEnd);
    router.events.on('routeChangeError', loadingEnd);

    return () => {
      router.events.off('routeChangeStart', loadingStart);
      router.events.off('routeChangeComplete', loadingEnd);
      router.events.off('routeChangeError', loadingEnd);
    };
  });

  return loading;
};
