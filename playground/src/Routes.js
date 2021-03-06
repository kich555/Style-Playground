import React, { Suspense, useEffect, lazy } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';

import Loading from 'components/Loading';

const Main = lazy(() => import('pages/Main'));
const About = lazy(() => import('pages/About'));
const Animation = lazy(() => import('pages/Animation'));
const Contract = lazy(() => import('pages/Contract'));
const Portfolio = lazy(() => import('pages/Portfolio'));
const AnimationDetail = lazy(() => import('pages/AnimationDetail'));

function Routers() {
  const loading = () => <Loading />;
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/list') document.body.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location]);

  return (
    <Suspense fallback={loading()}>
      <Routes>
        {['/', '/home'].map(path => (
          <Route path={path} element={<Main />} />
        ))}
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/animation/detail/:name" element={<AnimationDetail />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Suspense>
  );
}

export default Routers;
