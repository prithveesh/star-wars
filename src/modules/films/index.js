import React, { lazy, Suspense, useState, useEffect } from 'react';
import Loadable from '../../hoc/loaderHoc';

// export default function Films() {
//   const [comp, setComp] = useState(null);

//   useEffect(() => {
//     const Component = lazy(() => import('./FilmsPage'));
//     setComp(
//       <Suspense fallback={<div>Loading Films Page</div>}>
//         <Component></Component>
//       </Suspense>
//     )
//   }, []);

//   return (
//     <div>
//       {comp}
//     </div>
//   )
// }


export default Loadable({
  component: () => import('./FilmsPage'),
  Loader: () => <div>Loading Films Page</div>
});