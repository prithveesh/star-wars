import React, { lazy, Suspense, useState, useEffect } from 'react';
import Loadable from '../../hoc/loaderHoc';

// export default function ContactUs() {
//   const [comp, setComp] = useState(null);

//   useEffect(() => {
//     const Component = lazy(() => import('./contactUs'));
//     setComp(
//       <Suspense fallback={null}>
//         <Component />
//       </Suspense>
//     );

//   }, [])

//   return (
//     <div>
//       {comp}
//     </div>
//   )
// }

export default Loadable({
  component: () => import('./contactUs'),
  Loader: () => <div>Loading Contact Us Page</div>
});