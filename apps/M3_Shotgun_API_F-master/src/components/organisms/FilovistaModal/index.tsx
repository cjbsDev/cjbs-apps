import React, {useRef} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {Download} from '@mui/icons-material';
import IframeResizer from 'iframe-resizer-react';
import useWindowSize from '@components/fnc/useWindowSize';
import {styled} from '@mui/material/styles';
import {themeJeju} from '@components/variables/themeJeju';
import {IconBtn} from '@components/atoms/button/IconBtn';
import {sampleNwkData} from '@data/newick/sampleNwkData';
import {fileDownloadFnc} from '@components/fnc/fileDownloadFnc';
import FileSaver from 'file-saver';

const iframeUrl = 'https://bdp-s3.s3.ap-northeast-2.amazonaws.com/resources/filovista/index.html';

const FilovistaModal = (props) => {
  const {open, onClose} = props;
  const iframeRef = useRef();
  const size = useWindowSize();
  const sampleFileDownload = () => {
    console.log(sampleNwkData);
    const blob = new Blob([sampleNwkData], {type: 'text/plain;charset=utf-8'});
    // fileDownloadFnc(sampleNwkData, 'sampleFile.nwk');
    FileSaver.saveAs(blob, 'sampleFile.nwk');
  };
  return (
    <Dialog fullWidth maxWidth='lg' open={open} onClose={onClose}>
      <CustomDialogTitle>
        Filovista
        <Button size='small' variant='contained' sx={{mr: 3}} startIcon={<Download />} onClick={sampleFileDownload}>
          SampleFile
        </Button>
        <CloseDialog icon='x' iconSize={24} color='secondary' onClick={onClose} />
      </CustomDialogTitle>
      <DialogContent>
        <IframeResizer
          log
          forwardRef={iframeRef}
          scrolling={'omit'}
          src={iframeUrl}
          sizeWidth={true}
          style={{
            width: '1px',
            height: size.height - 200,
            minWidth: '100%',
            // minHeight: '80vh',
            border: 'none',
            // paddingTop: 24,
            // paddingBottom: 24,
          }}
        />
      </DialogContent>
      {/*<DialogActions>*/}
      {/*  <Button onClick={onClose}>Cancel</Button>*/}
      {/*  <Button onClick={onClose}>Subscribe</Button>*/}
      {/*</DialogActions>*/}
    </Dialog>
  );
};

export default FilovistaModal;

const CustomDialogTitle = styled(DialogTitle)({
  padding: '40px 40px 16px',
  fontFamily: themeJeju.typography.subtitle1.fontFamily,
  fontWeight: themeJeju.typography.subtitle1.fontWeight,
  lineHeight: themeJeju.typography.subtitle1.lineHeight,
  fontSize: themeJeju.typography.subtitle1.fontSize,
  letterSpacing: themeJeju.typography.subtitle1.letterSpacing,
  paragraphSpacing: themeJeju.typography.subtitle1.paragraphSpacing,
  textCase: themeJeju.typography.subtitle1.textCase,
  textDecoration: themeJeju.typography.subtitle1.textDecoration,
  display: 'flex',
  justifyContent: 'space-between',
});
const CloseDialog = styled(IconBtn)({
  position: 'absolute',
  right: 10,
  top: 10,
});
