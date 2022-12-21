import React, {useRef, useEffect} from 'react';
import {getLayout} from '@components/layouts/AppLayoutNew';
import FileSaver from 'file-saver';
import IframeResizer from 'iframe-resizer-react';
import useWindowSize from '@components/fnc/useWindowSize';
import {sampleNwkData} from '@data/newick/sampleNwkData';
import {Download} from '@mui/icons-material';
import {Box, Button} from '@mui/material';

const iframeUrl = 'https://bdp-s3.s3.ap-northeast-2.amazonaws.com/resources/filovista/index.html';

const Filovista = () => {
  const iframeRef = useRef();
  const size = useWindowSize();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const sampleFileDownload = () => {
    console.log(sampleNwkData);
    const blob = new Blob([sampleNwkData], {type: 'text/plain;charset=utf-8'});
    // fileDownloadFnc(sampleNwkData, 'sampleFile.nwk');
    FileSaver.saveAs(blob, 'sampleFile.nwk');
  };
  return (
    <Box>
      <IframeResizer
        log
        forwardRef={iframeRef}
        scrolling={'omit'}
        src={iframeUrl}
        sizeWidth={true}
        style={{
          width: size.width,
          // height: size.height - 200,
          // minWidth: '100%',
          // minHeight: '80vh',
          border: 'none',
          padding: '45px 0 0',
          height: size.height,
          minWidth: '100%',
          minHeight: '100vh',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: 70,
          left: 20,
        }}
      >
        <Button size='small' variant='contained' sx={{mr: 3}} startIcon={<Download />} onClick={sampleFileDownload}>
          SampleFile
        </Button>
      </Box>
    </Box>
  );
};

Filovista.getLayout = getLayout;
export default Filovista;
