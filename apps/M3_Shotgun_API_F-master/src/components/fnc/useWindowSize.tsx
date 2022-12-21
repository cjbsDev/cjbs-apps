import React, {useState, useEffect} from 'react';

interface WindowSizeProps {
  width: number | undefined;
  height: number | undefined;
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeProps>({
    width: undefined,
    height: undefined,
  });

  const handleResize = () => {
    // console.log('brower size change ->', [window.innerWidth, window.innerHeight]);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowSize;
};

export default useWindowSize;
