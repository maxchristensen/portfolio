import React, { useEffect, useState } from 'react';

const TimeComponent = () => {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      updateTime();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const updateTime = () => {
    const d = new Date();
    const s = d.getSeconds();
    let m = d.getMinutes();
    let h = d.getHours();
    let ampm = '';

    if (h >= 12) {
      ampm = 'PM';
    } else {
      ampm = 'AM';
    }

    if (h > 12) {
      h = h - 12;
    }

    if (h === 0) {
      h = 12;
    }

    const formattedTime = `${("0" + h).substr(-2)}:${("0" + m).substr(-2)}:${("0" + s).substr(-2)} ${ampm}`;
    setCurrentTime(formattedTime);
  };

  return (
    <div id="time">{currentTime}</div>
  );
};

export default TimeComponent;
