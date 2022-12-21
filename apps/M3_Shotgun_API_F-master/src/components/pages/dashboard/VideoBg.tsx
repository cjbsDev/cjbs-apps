import React from 'react';
import VideoPlayer from 'react-background-video-player';
import useWindowSize from '@components/fnc/useWindowSize';
import {makeStyles} from '@mui/styles';
import {Box} from '@mui/material';

const videoBgStyled = makeStyles({
  sss: {
    height: '350px !important',
    zIndex: -101,
  },
});

const VideoBg = () => {
  const size = useWindowSize();
  const videoCss = videoBgStyled();

  return (
    <Box
      className={videoCss.sss}
      component={VideoPlayer}
      src={'https://bdp-s3.s3.ap-northeast-2.amazonaws.com/resources/ezmxVideo/EzMx.mp4'}
      autoPlay={true}
      muted={true}
      containerWidth={size.width}
    />
  );
};

export default VideoBg;
