import React, {useCallback, useRef, useState, useEffect, memo} from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  ButtonGroup,
  Icon,
  IconButton,
  Alert, Box, Typography, Chip,
  CircularProgress,
} from '@mui/material';
import Link from 'next/link';
import {useSetRecoilState} from 'recoil';
import {analysisStatusModalAtom, refreshStateAtom} from '@src/recoil/atoms/modalAtom';
import {useHubStyles} from '@styles/hub/hubStyle';
import {grey, red, blue, green, deepOrange, cyan, amber} from '@mui/material/colors';
import {IconBtn} from '@components/atoms/button/IconBtn';
import dayjs from 'dayjs';
import {fileDownloadFnc} from '@components/fnc/fileDownloadFnc';
import {getCookie} from 'cookies-next';
import FileSaver from 'file-saver';
import Dn from '@public/svg/icon/download.svg';
import Er from '@public/svg/icon/error_circle.svg';
import Rqst from '@public/svg/icon/Request.svg';
import Wt from '@public/svg/icon/Waiting.svg';
import {FileDownload} from '@mui/icons-material';


const accessJwt = getCookie('emHYMSSW');

const AnalysisStatusDialog = (props) => {
  const {open, close, rowData} = props;
  const {hubInputName, fileUuid, createdAt, createdBy, engineRunOutputs} = rowData;
  const hubCss = useHubStyles();
  const setModalOpenIs = useSetRecoilState(analysisStatusModalAtom);
  const setAtomRefreshStateValue = useSetRecoilState(refreshStateAtom);

  const handleClose = () => {
    console.log('Close!');
    close();
    // setModalOpenIs(false);
    // setAtomRefreshStateValue(true);
  };

  const InputLabelStatus = (props) => {
    const {status} = props;

    switch (status) {
      case 'INITIAL' :
        return <Chip label={'Request'} size='small' variant={'outlined'} className={hubCss.labelInitial} />;
        break;
      case 'QUEUED' :
        return <Chip label={'Waiting'} size='small' variant={'outlined'} className={hubCss.labelQueued} />;
        break;
      case 'RUNNING' :
        return <Chip label={'Analyzing'} size='small' variant={'outlined'} className={hubCss.labelIng} />;
        break;
      case 'DONE' :
        return <Chip label={'Complete'} size='small' variant={'outlined'} className={hubCss.labelSuccess} />;
        break;
      case 'ERROR' :
        return <Chip label={'Error'} size='small' variant={'outlined'} className={hubCss.labelFail} />;
        break;
    }
  };

  const DnSVGIcon = React.forwardRef(({}, ref) => {
    return (
      <Dn width={24} height={24} fill={blue[500]} />
    );
  });

  const AnalysisStatusIcon = (props) => {
    const {status, fileUuid, outputName} = props;

    switch (status) {
      case 'INITIAL' :
        return <Rqst width={24} height={24} fill={amber[600]} />;
        break;
      case 'QUEUED' :
        return <Wt width={24} height={24} fill={cyan[600]} />;
        break;
      case 'RUNNING' :
        return <CircularProgress size={20} sx={{color: green[400]}} />;
        break;
      case 'DONE' :
        return <IconButton>
          <Link
            href={`${process.env.NEXT_PUBLIC_API_URL}/hub/input/downloadAsLink?inputName=${outputName}&fileUuid=${fileUuid}`}
            passHref
          >
            <DnSVGIcon />
          </Link>
        </IconButton>;
        break;
      case 'ERROR' :
        return <Er width={24} height={24} fill={red[600]} />;
        break;
    }
  };

  // const fileDownHandle = () => {
  //   console.log(fileUuid);
  //   // let getDownloadFile = '';
  //   let getDownloadFile = `${process.env.NEXT_PUBLIC_API_URL}/hub/input/downloadAsLink?inputName=test&fileUuid=${fileUuid}`;
  //
  //   // const config = {
  //   //   headers: {
  //   //     Authorization: `Bearer ${accessJwt}`,
  //   //   },
  //   //   responseType: 'blob',
  //   // };
  //
  //   // axios.get(`${process.env.NEXT_PUBLIC_API_URL}/hub/input/download?key=test3.PNG`, config)
  //   //   .then((res) => {
  //   //     console.log('Get fileDownload =>', res);
  //   //     getDownloadFile = res.data;
  //   //     fileDownloadFnc(getDownloadFile, 'sample87763.fastq');
  //   //   });
  //   fileDownloadFnc(getDownloadFile, 'sample87763.fastq');
  // };

  // const engineFileDownHandle = (fileUuid: any) => {
  //   const getDownloadFile =
  //     `http://13.125.12.94:9000/hub/input/downloadAsLink2?inputName=test&fileUuid=500866ba-cec2-486e-a725-eebdc3cffdbb`;
  //
  //   // http://13.125.12.94:9000/hub/input/downloadAsLink2?inputName=test&fileUuid=${item.fileUuid}
  //   const blob = new Blob([getDownloadFile], {type: 'text/plain;charset=utf-8'});
  //
  //   FileSaver.saveAs(blob, 'testOutput.zip');
  //
  //   // console.log('fileUuid', fileUuid);
  //
  //   //
  //   // const testDownUrl = 'https://cphoto.asiae.co.kr/listimglink/6/2019082314201826133_1566537618.png';
  //   //
  //   // fileDownloadFnc(getDownloadFile, 'test.zip');
  // };

  return (
    <Dialog open={open} onClose={handleClose} scroll='paper'>
      <DialogTitle sx={{p: 5, pb: 2}}>
        <Typography component={'span'} variant='subtitle1'>Analysis Status</Typography>
        <IconBtn
          icon='x'
          iconSize={24}
          color='secondary'
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
          }}
        />
      </DialogTitle>
      <DialogContent sx={{width: 500, p: 5}}>
        <dl className={hubCss.dl}>
          <dt>Input Name</dt>
          <dd>
            {hubInputName}
            <IconButton sx={{ml: 1}} color={'secondary'}>
              <Link
                href={`${process.env.NEXT_PUBLIC_API_URL}/hub/input/downloadAsLink?inputName=${hubInputName}&fileUuid=${fileUuid}`}
                passHref
              >
                <FileDownload />
                {/*<DnSVGIcon />*/}
                {/*ddd*/}
              </Link>
            </IconButton>
          </dd>
          <dt>Upload Date</dt>
          <dd>
            {dayjs(createdAt).format('YYYY.MM.DD HH:MM')}
          </dd>
          <dt>Uploader</dt>
          <dd>{createdBy !== '' ? createdBy : '-'}</dd>
          {/*<dt>Upload File</dt>*/}
          {/*<dd>Example-Download*/}
          {/*  <IconButton sx={{ml: 1}} color={'secondary'}>*/}
          {/*    <Link*/}
          {/*      href={`${process.env.NEXT_PUBLIC_API_URL}/hub/input/downloadAsLink?inputName=${hubInputName}&fileUuid=${fileUuid}`}>*/}
          {/*      <Download*/}
          {/*        sx={{color: blue[400]}} />*/}
          {/*    </Link>*/}
          {/*  </IconButton>*/}
          {/*</dd>*/}
        </dl>

        {
          engineRunOutputs.length !== 0 ? <Box sx={{mt: 3}}>
            {engineRunOutputs.map((item, index) => {
              // console.log('sssssss', item);
              return <Box key={item.engineRunUuid + index.toString()}
                          className={hubCss.analysisBox}>
                <Box sx={{mb: 1}}>
                  <InputLabelStatus status={item.engineRunStatus} />
                  {/*<Chip label={'분석요청'} size='small' variant={'outlined'} className={hubCss.labelInitial} />*/}
                  {/*<Chip label={'분석대기'} size='small' variant={'outlined'} className={hubCss.labelQueued} />*/}
                  {/*<Chip label={'분석중'} size='small' variant={'outlined'} className={hubCss.labelIng} />*/}
                  {/*<Chip label={'분석완료'} size='small' variant={'outlined'} className={hubCss.labelSuccess} />*/}
                  {/*<Chip label={'에러'} size='small' variant={'outlined'} className={hubCss.labelFail} />*/}
                </Box>
                <Typography sx={{mb: 1, ml: 1}} variant='body1'>{item.enginePresetName}</Typography>
                <Box><Chip label={item.referenceDatabaseName} size='small' /></Box>

                <ButtonGroup
                  className={hubCss.btnGrpWrap}
                >
                  <AnalysisStatusIcon status={item.engineRunStatus} fileUuid={item.fileUuid}
                                      outputName={item.enginePresetName} />
                  {/*<Rqst width={24} height={24} fill={amber[600]} />*/}
                  {/*<Wt width={24} height={24} fill={cyan[600]} />*/}
                  {/*<CircularProgress size={22} sx={{color: green[600]}} />*/}
                  {/*<Er width={24} height={24} fill={red[600]} />*/}
                </ButtonGroup>
              </Box>;
            })}
          </Box> : <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 120}}>
            <Typography variant={'body1'} sx={{color: grey[400]}}>No Data</Typography>
          </Box>
        }
      </DialogContent>
    </Dialog>
  );
};

export default AnalysisStatusDialog;
