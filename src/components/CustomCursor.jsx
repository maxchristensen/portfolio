import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: 'none',
        transform: `translate(${position.x}px, ${position.y}px)`,
        background: 'none',
      }}
    >
      {/* Customize your cursor appearance */}
      <div
        className="custom-cursor-inner"
        style={{
          width: '40px',
          height: '40px',
          transition: 'transform 0.15s ease-in-out',
          transform: 'translate(-50%, -50%)',
          background: 'none',
        }}
      >
        <svg id="b" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 150 150"><defs></defs><g id="c"><path className="d" d="m150,75c0-20.4-14.99-37.37-34.53-40.47C112.37,14.98,95.4,0,75,0s-37.37,14.98-40.47,34.53C14.99,37.63,0,54.6,0,75s14.99,37.37,34.53,40.47c3.11,19.54,20.07,34.53,40.47,34.53s37.37-14.98,40.47-34.53c19.54-3.11,34.53-20.07,34.53-40.47ZM75,13.95c12.76,0,23.48,8.88,26.31,20.78-16.43,3.14-29.41,16.12-32.55,32.55-11.91-2.83-20.79-13.54-20.79-26.3,0-14.91,12.13-27.03,27.03-27.03Zm-34.01,88.08c-14.91,0-27.03-12.13-27.03-27.03,0-12.76,8.88-23.48,20.78-26.31,3.14,16.43,16.12,29.41,32.55,32.55-2.83,11.91-13.54,20.79-26.3,20.79Zm34.01,34.01c-12.76,0-23.48-8.88-26.31-20.78,16.43-3.14,29.41-16.12,32.55-32.55,11.91,2.83,20.79,13.54,20.79,26.3,0,14.91-12.13,27.03-27.03,27.03Zm40.26-34.74c-3.14-16.43-16.12-29.41-32.55-32.55,2.83-11.91,13.54-20.79,26.3-20.79,14.91,0,27.03,12.13,27.03,27.03,0,12.76-8.88,23.48-20.78,26.31Z"/></g></svg>      </div>
    </div>
  );
};

export default CustomCursor;
