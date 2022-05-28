import React, { Suspense, useEffect, lazy } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';

import Loading from 'components/Loading';

const Main = lazy(() => import('pages/Main'));

function Routers() {
  const loading = () => <Loading />;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/list') document.body.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  return (
    <Suspense fallback={loading()}>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Suspense>
  );
}

export default Routers;
