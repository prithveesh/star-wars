import React, { useCallback, useState } from 'react';

function MouseTracker(props) {
  const [cordinates, setCordinates] = useState({});
  const handleMouseMove = useCallback((event) => {
    setCordinates({
      x: event.clientX,
      y: event.clientY
    });
  }, []);
  return (
    <div style={{ height: '100%' }} onMouseMove={handleMouseMove}>
      {props.render(cordinates)}
    </div>
  )
}

export default MouseTracker;