import React, { Suspense, lazy } from 'react';

function Loadable({ component, Loader }) {
  const Component = lazy(component);
  return class LoaderHOC extends React.Component {
    render() {
      return (
        <Suspense fallback={<Loader />}>
          <Component></Component>
        </Suspense>
      )
    }
  }
}

export default Loadable;