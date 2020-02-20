import React, { lazy, Suspense, useState, useEffect } from 'react';

export default function ContactUs() {
  const [comp, setComp] = useState(null);

  useEffect(() => {
    const Component = lazy(() => import('./contactUs'));
    setComp(
      <Suspense fallback={null}>
        <Component />
      </Suspense>
    );

  }, [])

  return (
    <div>
      {comp}
    </div>
  )
}