import { useState, useEffect } from 'react';

function useWidth() {
  const isClient = typeof window === 'object';
  const [screenWidth, setScreenWidth] = useState(isClient ? window.innerWidth : 0);

  useEffect(() => {
    const handleWindowResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return screenWidth;
}

export default useWidth;