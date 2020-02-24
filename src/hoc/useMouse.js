import React, { useCallback, useState } from 'react';
import MouseTracker from './MouseTracker';

// export default function (Component) {
//   return function (props) {
//     return (
//       <MouseTracker render={cordinates => (
//         <Component cordinates={cordinates} {...props} />
//       )} />
//     )
//   }
// }

export default function (Component) {
  return function (props) {
    const [cordinates, setCordinates] = useState({});
    const handleMouseMove = useCallback((event) => {
      setCordinates({
        x: event.clientX,
        y: event.clientY
      });
    }, []);
    return (
      <div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
        <Component cordinates={cordinates} {...props} />
      </div>
    )
  }
}