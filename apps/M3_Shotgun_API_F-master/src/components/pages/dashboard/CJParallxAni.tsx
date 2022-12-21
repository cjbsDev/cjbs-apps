import React from 'react';
import {useParallax} from 'react-scroll-parallax';
import cjBlueLineBg from '@public/img/dashboardBgBlue.png';
import cjRedLineBg from '@public/img/dashboardBgRed.png';
import cjYellowLineBg from '@public/img/dashboardBgYellow.png';
import Box from '@mui/material/Box';
import Image from 'next/image';

const CJParallaxAni = () => {
  const blueBg = useParallax({
    speed: 20,
  });
  const redBg = useParallax({
    speed: 50,
  });
  const yellowBg = useParallax({
    speed: 35,
  });
  return (
    <>
      <Box ref={blueBg.ref} sx={{position: 'absolute', left: 0, bottom: 20, zIndex: -100}}>
        <Image src={cjBlueLineBg} width={205} height={135} />
      </Box>

      <Box ref={redBg.ref} sx={{position: 'absolute', top: 420, right: 0, zIndex: -100}}>
        <Image src={cjRedLineBg} width={140} height={125} />
      </Box>

      <Box ref={yellowBg.ref}
           sx={{position: 'absolute', top: 480, right: 0, zIndex: -100}}>
        <Image src={cjYellowLineBg} width={220} height={178} />
      </Box>
    </>
  );
};

export default CJParallaxAni;
