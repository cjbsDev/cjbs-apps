import React, {useRef, useState, useCallback, useEffect, memo} from 'react';
import {
  Alert,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormHelperText,
  FormControl,
  LinearProgress,
  linearProgressClasses,
  Button,
  CircularProgress,
  Snackbar,
  AlertTitle,
  Divider,
  Chip,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import axios from 'axios';
import {FormContainer, TextFieldElement, SelectElement} from 'react-hook-form-mui';
import {IconBtn} from '@src/components/atoms/button/IconBtn';
import {useSetRecoilState} from 'recoil';
import {uploadModalAtom, refreshStateAtom} from '@src/recoil/atoms/modalAtom';
import {useForm, Controller, useWatch, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {green, grey, red} from '@mui/material/colors';
import {Add, Close, Done, FileUpload, PlusOne, UploadFile} from '@mui/icons-material';
import {Btn} from '@src/components/atoms/button';
import {getCookie} from 'cookies-next';
import {useDropzone} from 'react-dropzone';
import {formatBytes} from '@components/fnc/formatBytes';
import FormData from 'form-data';
import {subTextColor} from '@styles/auth/authCommonStyle';
import * as Yup from 'yup';
import CountUp from 'react-countup';
import {getToken} from '@hooks/token/useToken';
import {POST} from '@src/hooks/api/useAPI';
// import {useRecoilValue} from 'recoil';
// import {rowInfoAtom} from '@src/recoil/atoms/rowInfoAtom';

const accessJwt = getToken();

interface IFormInputs {
  firstName: string;
  age: number;
}

const schema = yup
  .object({
    // inputType: yup.string().required('InputType을 선택해주세요!').nullable(),
    // inputName: yup.string().required('InputName을 입력해주세요!').nullable(),
  })
  .required();

const BorderLinearProgress = styled(LinearProgress)(({theme}) => ({
  height: 5,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[500],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: green[500],
  },
}));

const UploadDialog = (props) => {
  // const controller = new AbortController();

  // const CancelToken = axios.CancelToken;
  // const source = CancelToken.source();

  const {open} = props;
  const setModalOpenIs = useSetRecoilState(uploadModalAtom);
  const setAtomRefreshStateValue = useSetRecoilState(refreshStateAtom);
  const {
    register,
    watch,
    handleSubmit,
    control,
    resetField,
    getValues,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });
  // const [inputNameValue, setInputNameValue] = useState<string>();
  // const [inputTypeValue, setInputTypeValue] = useState<string>();
  // const [forwardUploadUrl, setForwardUploadUrl] = useState();
  // const [reverseUploadUrl, setReverseUploadUrl] = useState();

  const [forwardFileData, setForwardFileData] = useState([]);
  const [reverseFileData, setReverseFileData] = useState([]);
  const [forwardChk, setForwardChk] = useState(false);
  const [reverseChk, setReverseChk] = useState(false);
  const inputyTypeWatch = useWatch({control, name: 'inputType'});
  const [forwardUploadPercent, setForwardUploadPercent] = useState<number>(0);
  const [reverseUploadPercent, setReverseUploadPercent] = useState<number>(0);
  const [forwardUploadPercentTotal, setForwardUploadPercentTotal] = useState<number>(0);
  const [reverseUploadPercentTotal, setReverseUploadPercentTotal] = useState<number>(0);
  const [forwardDisplay, setForwardDisplay] = useState<boolean>(false);
  const [reverseDisplay, setReverseDisplay] = useState<boolean>(false);
  const [arrFiles, setArrFiles] = useState([]);
  const [refreshChckValue, setRefreshChckValue] = useState(false);
  const [active, setActive] = useState(false);
  const [active2, setActive2] = useState(false);
  const [snackbarIs, setSnackbarIs] = useState<boolean>(false);
  const [fileAddState, setFileAddState] = useState<boolean>(false);
  const [rejectedFilesCount, setRejectedFilesCount] = useState<number>();

  const handleSnackbarClick = () => {
    setSnackbarIs(true);
  };

  const handleSnackbarClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarIs(false);
  };

  const handleClose = (e) => {
    e.preventDefault();
    console.log('UploadModal Close!');
    // setInputTypeValue('');
    resetField('inputType');
    resetField('inputName');
    setForwardFileData([]);
    setReverseFileData([]);
    setForwardUploadPercent(0);
    // setReverseUploadPercent(0);
    setModalOpenIs(false);

    // if (refreshChckValue === true) {
    //   setAtomRefreshStateValue(true);
    // } else {
    //   setAtomRefreshStateValue(false);
    // }

    // setRefreshState(true);
    setForwardDisplay(false);
    // setReverseDisplay(false);
    setForwardUploadPercentTotal(0);
    setActive(false);
    setActive2(false);
    // setRefreshChckValue(false);
    setFileAddState(false);
    // setRejectedFilesCount(0);
    // controller.abort();
  };

  const onSubmit = async (data) => {
    setActive(true);
    setActive2(true);
    let fwUrl = '';
    // let rvUrl = '';
    // const getInputType = data.inputType;
    const getInputName = data.inputName;

    // if (getInputType === '' || getInputName === '') {
    //   setActive(true);
    // }

    if (forwardFileData.length === 0) {
      setForwardChk(true);
    } else {
      setForwardChk(false);
    }

    // if (reverseFileData.length === 0) {
    //   setReverseChk(true);
    // } else {
    //   setReverseChk(false);
    // }

    // if (getInputType === 'PAIRED_FQ') {
    //   setReverseDisplay(true);
    //   setForwardDisplay(true);
    // } else {
    //   setForwardDisplay(true);
    // }

    setForwardDisplay(true);

    forwardFileData.map(async (item, index) => {
      const sendData = {
        // inputType: getInputType,
        // inputName: getInputName,
        inputType: 'FQ',
        inputName: '',
        inputMemo: '',
        fileNames: [item.name],
      };

      await POST('/hub/input/upload', sendData)
        .then(async (res) => {
          console.log('fileUpload Success(^^V.) ->>', res);
          console.log('forwardInputFileURL =>', res.data.data.url[0]);
          fwUrl = res.data.data.url[0];

          const forwardConfig = {
            onUploadProgress: (progressEvent) => {
              let percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);

              let newFile = item;
              newFile.progress = percent;
              let filesCopy = [...forwardFileData];
              let fileIndex = filesCopy.findIndex((el) => el.name === item.name);
              filesCopy[fileIndex] = newFile;
              setForwardFileData([...filesCopy]);
              item.progress = percent;

              const percentTotal = forwardFileData
                .map((item) => {
                  // console.log('progress', item.progress);
                  return item.progress;
                })
                .reduce((acc, cur) => {
                  // console.log('acc', acc);
                  // console.log('cur', cur);
                  return acc + cur;
                }, 0);

              setForwardUploadPercent(percentTotal);
            },
            // signal: controller.signal,
            // cancelToken: source.token,
          };

          await axios.put(fwUrl, item, forwardConfig).then((res) => {
            console.log('Single InputFile Upload', res);
          });
          setActive(false);
          setRefreshChckValue(true);
        })
        .catch((error) => {
          if (error.response) {
            console.log('error1', error.response.data);
            console.log('error2', error.response.status);
            console.log('error3', error.response.headers);
            handleSnackbarClick();
            setActive(false);
          } else if (error.request) {
            // 요청이 이루어 졌으나 응답을 받지 못했습니다.
            // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
            // Node.js의 http.ClientRequest 인스턴스입니다.
            console.log('error4', error.request);
          } else {
            // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
            console.log('error5', error.message);
          }
          console.log('error6', error.config);
          setRefreshChckValue(false);
        });
    });

    // if (getInputType === '') {
    //   console.log('inputType Empty!!!!');
    // } else if (getInputType !== '') {
    //
    // }
  };

  const ForwardFillAdd = () => {
    const {open, getRootProps, getInputProps} = useDropzone({
      noClick: true,
      noKeyboard: true,
      // maxFiles: 10,
      accept: {
        'application/gz': ['.fasta', '.fa', '.fna', '.faa', '.ffn', '.fastq', '.fq', '.ab1', '.gz', '.gzip', '.gunzip'],
      },
      onFileDialogOpen: () => {
        console.log('FileDialogOpen');
        setFileAddState(true);
      },
      onFileDialogCancel: () => {
        console.log('FileDialogCancel');
        setFileAddState(false);
      },
      onDragLeave: () => {
        console.log('DragLeave');
        setFileAddState(false);
      },
      onDragOver: () => {
        console.log('DragOver');
        setFileAddState(true);
      },
      onDragEnter: () => {
        console.log('DragEnter');
        setFileAddState(true);
      },
      onDrop: (acceptedFiles, fileRejections, event) => {
        console.log('Forward AcceptedFiles:::::', acceptedFiles);
        console.log('fileRejections', fileRejections);

        setFileAddState(false);

        if (acceptedFiles !== undefined) {
          acceptedFiles.map((item) => setArrFiles([...arrFiles, item.name]));
          // setArrFiles(arrFiles => [...arrFiles, acceptedFiles[0].name]);
          // setArrFiles()
        } else {
          console.log('파일 확장자를 확인해주세요!!');
        }

        setForwardFileData(forwardFileData.concat(acceptedFiles));
        setForwardUploadPercentTotal(100 * forwardFileData.concat(acceptedFiles).length);

        if (acceptedFiles.length !== 0) {
          setForwardChk(false);
          // setActive(false);
        }

        // if (inputyTypeWatch === '') {
        //   setActive(true);
        // }
      },
    });

    const removeFile = (path) => {
      setForwardFileData(forwardFileData.filter((item) => item.path !== path));
      setForwardUploadPercent(0);
      setForwardUploadPercentTotal(forwardUploadPercentTotal - 100);
      setForwardDisplay(false);
    };

    return (
      <Box {...getRootProps()} sx={{mb: 1, position: 'relative'}}>
        <input {...getInputProps()} />
        {fileAddState === true && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              m: 'auto',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              zIndex: 10,
            }}
          >
            <CircularProgress sx={{mb: 2}} />
            <Typography variant={'body1'} sx={{color: 'white'}}>
              보안정책으로 인해 파일을 추가 하는데 시간이 소요 됩니다.
            </Typography>
            <Typography variant={'body1'} sx={{color: 'white'}}>
              잠시만 기다려 주세요...
            </Typography>
          </Box>
        )}

        {forwardFileData.length !== 0 ? (
          <Grid container>
            <Grid item xs={12} sx={{}}>
              <Box component={'ul'} sx={{m: 0, p: 0, listStyle: 'none', width: '100%'}}>
                {forwardFileData.map((item, index) => {
                  return (
                    <Box
                      component={'li'}
                      key={item.path}
                      sx={{
                        mb: 1,
                        p: 0.7,
                      }}
                    >
                      <Grid container>
                        <Grid item xs={11} sx={{display: 'flex', flexDirection: 'column'}}>
                          <Box sx={{mr: 1.5}}>
                            <Typography variant={'body1'} sx={{ml: 0}}>
                              {item.path}
                              <Box component={'span'} sx={{color: grey[600], ml: 1, fontSize: 14}}>
                                {formatBytes(item.size)}
                              </Box>
                            </Typography>
                            <Box sx={{width: '100%', mb: 0, display: 'flex', alignItems: 'center'}}>
                              <Box sx={{width: '100%', mr: 1}}>
                                <BorderLinearProgress
                                  variant='determinate'
                                  value={item.progress === undefined ? 0 : item.progress}
                                />
                              </Box>
                              <Box>{item.progress === undefined ? 0 : item.progress}%</Box>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid
                          item
                          xs={1}
                          sx={{
                            display: 'flex',
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                          }}
                        >
                          {item.progress === 100 ? (
                            <Done color={'success'} sx={{fontSize: 30}} />
                          ) : (
                            <IconBtn
                              icon='trash'
                              iconSize={20}
                              disabled={active2}
                              sx={{
                                color: 'black',
                                borderRadius: 0,
                                borderWidth: 1,
                                borderColor: grey[400],
                                borderStyle: 'solid',
                                height: 34,
                                width: 34,
                              }}
                              onClick={(event) => {
                                event.stopPropagation();
                                console.log('Delete Click!');
                                removeFile(item.path);
                              }}
                            />
                          )}
                        </Grid>
                      </Grid>
                    </Box>
                  );
                })}
              </Box>

              <Box sx={{mt: 3}}>
                <Button
                  fullWidth={true}
                  variant={'outlined'}
                  color={'secondary'}
                  size={'xlarge'}
                  onClick={open}
                  disabled={active2}
                >
                  <Add sx={{fontSize: 30, color: !active2 ? 'black' : grey[400]}} />
                </Button>
              </Box>
            </Grid>
          </Grid>
        ) : (
          <Grid container sx={{borderStyle: 'dashed', borderColor: grey[400], borderWidth: 1}}>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 5}}>
              <FileUpload sx={{fontSize: 44, color: grey[700]}} />
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Typography variant={'body1'} sx={{ml: 1}}>
                Drag files to upload or Choose Files.
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{display: 'flex', justifyContent: 'center', mt: 1.5, mb: 5}}>
              <Button variant={'outlined'} color={'secondary'} sx={{width: 250, color: 'black'}} onClick={open}>
                <Add />
              </Button>
            </Grid>
          </Grid>
        )}

        {forwardChk === true && <Alert severity='error'>Forward 파일을 선택해 주세요!</Alert>}
      </Box>
    );
  };

  return (
    <>
      <Dialog open={open} fullWidth={true} maxWidth={'sm'} scroll={'paper'}>
        <DialogTitle sx={{p: 6, pt: 5.5, pb: 1.5, display: 'flex', justifyContent: 'space-between'}}>
          {/*<Button onClick={() => controller.abort()}>Abort</Button>*/}
          <Typography variant='subtitle1'>
            Single Upload
            <Chip
              label={forwardFileData.length}
              size={'small'}
              color={
                forwardFileData.length === 0
                  ? 'secondary'
                  : forwardUploadPercent === forwardUploadPercentTotal
                  ? 'success'
                  : 'secondary'
              }
              sx={{mx: 1, color: 'white'}}
            />
          </Typography>
          <Typography variant={'body1'}>
            업로드는 <strong>최대 10개까지만 권장</strong>합니다.
          </Typography>
          <IconBtn
            icon='x'
            iconSize={24}
            onClick={handleClose}
            disabled={active}
            sx={{
              position: 'absolute',
              right: 5,
              top: 5,
              color: 'black',
            }}
          />
        </DialogTitle>

        <Divider sx={{mx: 5}} />

        <DialogContent sx={{p: 5, pt: 3, pb: 3}}>
          <Box component='form' id={'singleUploadForm'} noValidate onSubmit={handleSubmit(onSubmit)}>
            <Grid container>
              <Grid item xs={12}>
                <ForwardFillAdd />
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions sx={{p: 0, display: 'flex', alignItems: 'center'}}>
          {forwardUploadPercent === 0 && forwardFileData.length === 0 ? (
            <Button
              type={'submit'}
              fullWidth
              size={'xlarge'}
              variant={'contained'}
              disabled={!active}
              form={'singleUploadForm'}
            >
              Upload
            </Button>
          ) : forwardUploadPercent === 0 && forwardFileData.length !== 0 ? (
            <Button
              type={'submit'}
              fullWidth
              size={'xlarge'}
              variant={'contained'}
              disabled={active}
              form={'singleUploadForm'}
            >
              Upload
            </Button>
          ) : forwardUploadPercent === forwardUploadPercentTotal ? (
            <Button
              type={'button'}
              onClick={handleClose}
              fullWidth
              size={'xlarge'}
              variant={'contained'}
              // startIcon={<Done />}
              color={'success'}
              sx={{color: 'white'}}
            >
              Done
            </Button>
          ) : (
            <Button type={'submit'} fullWidth size={'xlarge'} variant={'contained'} disabled={true}>
              <CircularProgress color={'secondary'} size={25} />
            </Button>
          )}
        </DialogActions>
      </Dialog>

      <Snackbar
        anchorOrigin={{vertical: 'top', horizontal: 'center'}}
        open={snackbarIs}
        autoHideDuration={5000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity='error' sx={{width: '100%'}}>
          SERVER_ERROR 500!
        </Alert>
      </Snackbar>
    </>
  );
};

export default UploadDialog;
