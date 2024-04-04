import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(120);

  useEffect(() => {
    if (seconds > 0) {
      const intervalId = setInterval(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [seconds]);

  return (
    <div>
      <h2 className='text-gray-800 text-center mt-4'>{`  ${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`}</h2>
    </div>
  );
}

export default Timer;