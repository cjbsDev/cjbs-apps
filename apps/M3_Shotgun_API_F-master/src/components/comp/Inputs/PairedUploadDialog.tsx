import React, {useRef, useState, useCallback, useEffect, memo} from 'react';
import {
  Alert,
  AlertTitle,
  Box,
  styled,
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
  Button,
  CircularProgress,
  Badge,
  DialogContentText,
  Snackbar,
  Divider,
  Chip,
  linearProgressClasses,
  Popover,
} from '@mui/material';
import {Add, ArrowRightAlt, AttachFile, Code, CompareArrows, FileUpload, Info, InfoOutlined} from '@mui/icons-material';
import axios from 'axios';
import {FormContainer, TextFieldElement, SelectElement} from 'react-hook-form-mui';
import {IconBtn} from '@src/components/atoms/button/IconBtn';
import {useSetRecoilState} from 'recoil';
import {pairedUploadModalAtom, refreshStateAtom} from '@src/recoil/atoms/modalAtom';
import {useForm, Controller, useWatch, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {blueGrey, green, grey, red} from '@mui/material/colors';
import {Close, Done} from '@mui/icons-material';
import {Btn} from '@src/components/atoms/button';
import {getCookie} from 'cookies-next';
import {useDropzone} from 'react-dropzone';
import {formatBytes} from '@components/fnc/formatBytes';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import randomColor from 'randomColor';
import FormData from 'form-data';
import {subTextColor} from '@styles/auth/authCommonStyle';
import * as Yup from 'yup';
import CountUp from 'react-countup';
import {getToken} from '@hooks/token/useToken';
import {POST} from '@src/hooks/api/useAPI';
import uuid from 'react-uuid';
// import {ReactSortable} from 'react-sortablejs';
// import {SortableList, SortableItemProps} from '@thaddeusjiang/react-sortable-list';
// import {useRecoilValue} from 'recoil';
// import {rowInfoAtom} from '@src/recoil/atoms/rowInfoAtom';
// import styled, {css} from 'styled-components';

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

const PairedUploadDialog = (props) => {
  const {open} = props;
  const setModalOpenIs = useSetRecoilState(pairedUploadModalAtom);
  const setRefreshState = useSetRecoilState(refreshStateAtom);
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
  const [uploadFile, setUploadFile] = useState([
    {
      groupName: 'Forward',
      files: [],
    },
    {
      groupName: 'Reverse',
      files: [],
    },
  ]);
  const [forwardFileData, setForwardFileData] = useState([]);
  const [rjctForwardFileData, setRjctForwardFileData] = useState([]);
  const [reverseFileData, setReverseFileData] = useState([]);
  const [rjctReverseFileData, setRjctReverseFileData] = useState([]);
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
  const [eq, setEq] = useState<boolean>();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleTipClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleTipClose = () => {
    setAnchorEl(null);
  };

  const tipOpen = Boolean(anchorEl);
  const id = tipOpen ? 'simple-popover' : undefined;

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
    console.log('Paired UploadModal Close!');
    // setInputTypeValue('');
    resetField('inputType');
    resetField('inputName');
    setForwardFileData([]);
    setReverseFileData([]);
    setForwardUploadPercent(0);
    setReverseUploadPercent(0);
    setModalOpenIs(false);
    if (refreshChckValue === true) {
      setRefreshState(true);
    } else {
      setRefreshState(false);
    }
    // setRefreshState(true);
    setForwardDisplay(false);
    setReverseDisplay(false);
    setForwardUploadPercentTotal(0);
    setReverseUploadPercentTotal(0);
    setActive(false);
    setActive2(false);
    setRefreshChckValue(false);
  };

  const onSubmit = (data) => {
    setActive(true);
    setActive2(true);

    let fwUrl = '';
    let rvUrl = '';
    const getInputType = data.inputType;
    const getInputName = data.inputName;

    if (forwardFileData.length === 0) {
      setForwardChk(true);
    } else {
      setForwardChk(false);
    }

    if (reverseFileData.length === 0) {
      setReverseChk(true);
    } else {
      setReverseChk(false);
    }

    setReverseDisplay(true);
    setForwardDisplay(true);

    // if (getInputType === 'PAIRED_FQ') {
    //   setReverseDisplay(true);
    //   setForwardDisplay(true);
    // } else {
    //   setForwardDisplay(true);
    // }

    // if (getInputType === '') {
    //   console.log('inputType Empty!!!!');
    // } else if (getInputType !== '') {
    // }

    forwardFileData.map((item, index) => {
      // console.log('startPoint ==>>', item.progress);
      console.log('forwardItem', item, index);

      reverseFileData.slice(index, index + 1).map(async (revItem) => {
        console.log('reverseItem', revItem.file, index);

        const sendData = {
          // inputType: getInputType,
          // inputName: getInputName,
          inputType: 'PAIRED_FQ',
          inputName: '',
          inputMemo: '',
          fileNames: [item.name, revItem.file.name],
        };

        console.log(sendData);

        await POST('/hub/input/upload', sendData)
          .then(async (res) => {
            console.log('fileUpload Success(^^V.) ->>', res);
            // if (getInputType === 'PAIRED_FQ') {
            //   console.log('forwardInputFileURL =>', res.data.data.url[0]);
            //   fwUrl = res.data.data.url[0];
            //   console.log('reverseInputFileURL =>', res.data.data.url[1]);
            //   rvUrl = res.data.data.url[1];
            // } else {
            //   console.log('forwardInputFileURL =>', res.data.data.url[0]);
            //   fwUrl = res.data.data.url[0];
            // }

            console.log('forwardInputFileURL =>', res.data.data.url[0]);
            fwUrl = res.data.data.url[0];
            console.log('reverseInputFileURL =>', res.data.data.url[1]);
            rvUrl = res.data.data.url[1];

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
                    console.log('progress', item.progress);
                    return item.progress;
                  })
                  .reduce((acc, cur) => {
                    // console.log('acc', acc);
                    // console.log('cur', cur);
                    return acc + cur;
                  }, 0);

                setForwardUploadPercent(percentTotal);
              },
            };

            const reverseConfig = {
              onUploadProgress: (progressEvent) => {
                let percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);

                let newRevFile = revItem.file;
                newRevFile.progress = percent;
                let revFilesCopy = [...reverseFileData];
                let fileIndex = revFilesCopy.findIndex((el) => el.name === revItem.file.name);
                revFilesCopy[fileIndex] = newRevFile;
                setReverseFileData([...revFilesCopy]);
                revItem.file.progress = percent;

                const revPercentTotal = reverseFileData
                  .map((revItem) => {
                    console.log('Reverse progress', revItem.file.progress);
                    return revItem.file.progress;
                  })
                  .reduce((acc, cur) => {
                    // console.log('acc', acc);
                    // console.log('cur', cur);
                    return acc + cur;
                  }, 0);

                setReverseUploadPercent(revPercentTotal);
              },
            };

            const putForwardFile = axios.put(fwUrl, item, forwardConfig);
            const putReverseFile = axios.put(rvUrl, revItem.file, reverseConfig);
            await axios.all([putForwardFile, putReverseFile]).then(
              axios.spread((frwd, rvrs) => {
                console.log('Paired Forward Upload<^^V>', frwd);
                console.log('Paired Reverse Upload<^^V>', rvrs);
              }),
            );
            setActive(false);
            setRefreshChckValue(true);
          })
          .catch((error) => {
            if (error.response) {
              console.log('error1', error.response.data);
              console.log('error2', error.response.status);
              console.log('error3', error.response.headers);

              handleSnackbarClick();
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
    });
  };

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const grid = 8;

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: 'none',
    padding: 3,
    paddingLeft: 0,
    // marginBottom: 3,
    // borderRadius: 2,

    // change background colour if dragging
    // backgroundColor: isDragging ? '#dddddd' : grey[50],
    borderStyle: isDragging ? 'dashed' : 'none',
    borderColor: isDragging ? '#8C999A' : 'none',
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  const getListStyle = (isDraggingOver) => ({
    // background: isDraggingOver ? 'lightblue' : 'lightgrey',
    position: 'relative',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    width: '100%',
    // color: 'white',
  });

  const queryAttr = 'data-rbd-drag-handle-draggable-id';

  const nameR1Validator = (file) => {
    console.log('ssssssss', file);
    if (!file.name.toUpperCase().includes('R1') && !file.name.toUpperCase().includes('_1')) {
      return {
        code: 'R1-Not-Found',
        message: `Only files containing 'R1' characters are possible.`,
      };
    }
    return null;
  };

  // const nameR2Validator = (file) => {
  //   console.log('ssssssss', file);
  //   if (!file.name.includes('R2' || 'r2')) {
  //     return {
  //       code: 'R2-Not-Found',
  //       message: `Only files containing 'R2' characters are possible.`,
  //     };
  //   }
  //   return null;
  // };

  const PairedFileAdd = () => {
    const [fileAddState, setFileAddState] = useState<boolean>(false);
    const [rejectedFilesCount, setRejectedFilesCount] = useState<number>();
    const {open, getRootProps, getInputProps} = useDropzone({
      noClick: true,
      noKeyboard: true,
      accept: {
        'application/gz': ['.fasta', '.fa', '.fna', '.faa', '.ffn', '.fastq', '.fq', '.ab1', '.gz', '.gzip', '.gunzip'],
      },
      validator: nameR1Validator,
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
      onDrop: (acceptedFiles, fileRejections) => {
        console.log('FileRejections @@;', fileRejections);
        console.log('Forward AcceptedFiles:::::', acceptedFiles);

        setFileAddState(false);
        // setFileNameEq(true);

        if (acceptedFiles !== undefined) {
          acceptedFiles.map((item) => setArrFiles([...arrFiles, item.name]));
        } else {
          console.log('파일 확장자를 확인해주세요!!');
        }

        // setArrFiles(arrFiles => [...arrFiles, acceptedFiles[0].name]);
        setRjctForwardFileData(fileRejections);

        setForwardFileData(forwardFileData.concat(acceptedFiles));
        setForwardUploadPercentTotal(100 * forwardFileData.concat(acceptedFiles).length);

        setReverseFileData(reverseFileData.concat(fileRejections));
        setReverseUploadPercentTotal(100 * reverseFileData.concat(fileRejections).length);

        // setForwardFileData([...forwardFileData, acceptedFiles]);
        if (acceptedFiles.length !== 0) {
          setForwardChk(false);
          // setActive(false);
        }
      },
    });

    const removeForwardItem = (path) => {
      setForwardFileData(forwardFileData.filter((item) => item.path !== path));
      setForwardUploadPercent(0);
      setForwardUploadPercentTotal(forwardUploadPercentTotal - 100);
      setForwardDisplay(false);
    };

    const ForwardLists = (props) => {
      const {item, provided, snapshot, index} = props;
      return (
        <Box
          key={uuid()}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={[
            {
              backgroundColor: parseInt(String(index % 2)) === 0 ? grey[200] : grey[50],
              // backgroundColor: randomColor({
              //   luminosity: 'light',
              //   hue: 'blue',
              //   format: 'rgba',
              //   alpha: 0.2,
              // }),
            },
            getItemStyle(snapshot.isDragging, provided.draggableProps.style),
          ]}
        >
          <Grid container>
            <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Typography variant={'subtitle2'}>{index}</Typography>
            </Grid>
            <Grid item xs={10} sx={{display: 'flex', flexDirection: 'column'}}>
              <Box sx={{mx: 1.5}}>
                <Typography variant={'body1'} sx={{ml: 0}}>
                  {item.name}
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
            <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
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
                    removeForwardItem(item.path);
                  }}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      );
    };

    const [placeholderProps, setPlaceholderProps] = useState({});

    const onDragEnd = (result) => {
      // dropped outside the list
      if (!result.destination) {
        return;
      }

      setPlaceholderProps({});
      // setItems(items => reorder(items, result.source.index, result.destination.index));
      setForwardFileData((items) => reorder(items, result.source.index, result.destination.index));
    };

    const onDragUpdate = (update) => {
      if (!update.destination) {
        return;
      }
      const draggableId = update.draggableId;
      const destinationIndex = update.destination.index;

      const domQuery = `[${queryAttr}='${draggableId}']`;
      const draggedDOM = document.querySelector(domQuery);

      if (!draggedDOM) {
        return;
      }
      const {clientHeight, clientWidth} = draggedDOM;

      const clientY =
        parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
        [...draggedDOM.parentNode.children].slice(0, destinationIndex).reduce((total, curr) => {
          const style = curr.currentStyle || window.getComputedStyle(curr);
          const marginBottom = parseFloat(style.marginBottom);
          return total + curr.clientHeight + marginBottom;
        }, 0);

      setPlaceholderProps({
        clientHeight,
        clientWidth,
        clientY,
        clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
      });
    };

    return (
      <Box
        {...getRootProps()}
        sx={{
          mb: 0,
          pt: 2,
          position: 'relative',
        }}
      >
        <input {...getInputProps()} />
        {fileAddState === true && (
          <Grid
            item
            xs={12}
            sx={{
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
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
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
          </Grid>
        )}

        <Box>
          <Grid container spacing={5}>
            <Grid item xs={6}>
              <Typography variant={'body1'} sx={{mb: 3, fontSize: 18}}>
                <strong>Forward files</strong>
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
            </Grid>
            <Grid item xs={6}>
              <Typography variant={'body1'} sx={{mb: 3, fontSize: 18}}>
                <strong>Reverse files</strong>
                <Chip
                  label={reverseFileData.length}
                  size={'small'}
                  color={
                    reverseFileData.length === 0
                      ? 'secondary'
                      : reverseUploadPercent === reverseUploadPercentTotal
                      ? 'success'
                      : 'secondary'
                  }
                  sx={{mx: 1, color: 'white'}}
                />
              </Typography>
            </Grid>
          </Grid>
          {forwardFileData.length !== 0 || reverseFileData.length !== 0 ? (
            <Grid container>
              <Grid item xs={12} sx={{mb: 4}}>
                <Grid container spacing={0}>
                  <Grid item xs={5.6}>
                    <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
                      <Droppable droppableId='droppable'>
                        {(provided, snapshot) => (
                          <Box
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            sx={getListStyle(snapshot.isDraggingOver)}
                            className={'fileAddListItems'}
                          >
                            {forwardFileData.map((item, index) => (
                              <Draggable key={item.path} draggableId={item.path} index={index}>
                                {(provided, snapshot) => (
                                  <ForwardLists provided={provided} snapshot={snapshot} item={item} index={index} />
                                )}
                              </Draggable>
                            ))}

                            {provided.placeholder}
                            <Box
                              sx={{
                                position: 'absolute',
                                top: placeholderProps.clientY,
                                left: placeholderProps.clientX,
                                height: placeholderProps.clientHeight,
                                background: '#dddddd',
                                width: placeholderProps.clientWidth,
                              }}
                            />
                          </Box>
                        )}
                      </Droppable>
                    </DragDropContext>
                    {forwardFileData.length === 0 && (
                      <Box
                        sx={{
                          justifyContent: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                          height: '100%',
                          borderStyle: 'dashed',
                          borderColor: grey[400],
                          borderWidth: 1,
                        }}
                      >
                        {/*<AttachFile sx={{color: grey[400]}} />*/}
                        <Typography variant={'body1'} sx={{color: grey[600]}}>
                          Please upload Forward Files.
                        </Typography>
                      </Box>
                    )}
                  </Grid>

                  <Grid item xs={0.8}>
                    {forwardFileData.length > reverseFileData.length
                      ? forwardFileData.map((itemF, index) => {
                          return (
                            <Box
                              key={uuid()}
                              sx={{
                                height: 96.5,
                                // backgroundColor: 'red',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Code sx={{fontSize: 30}} />
                            </Box>
                          );
                        })
                      : forwardFileData.length < reverseFileData.length
                      ? reverseFileData.map((itemF, index) => {
                          return (
                            <Box
                              key={uuid()}
                              sx={{
                                height: 96.5,
                                // backgroundColor: 'red',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Code sx={{fontSize: 30}} />
                            </Box>
                          );
                        })
                      : forwardFileData.map((itemF, index) => {
                          return (
                            <Box
                              key={uuid()}
                              sx={{
                                height: 96.5,
                                // backgroundColor: 'red',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                              }}
                            >
                              <Code sx={{fontSize: 30}} />
                            </Box>
                          );
                        })}
                  </Grid>

                  <Grid
                    item
                    xs={5.6}
                    sx={{
                      mt: 0,
                    }}
                  >
                    <ReverseFileAdd />
                    {reverseFileData.length === 0 && (
                      <Box
                        sx={{
                          justifyContent: 'center',
                          display: 'flex',
                          alignItems: 'center',
                          width: '100%',
                          height: '100%',
                          borderStyle: 'dashed',
                          borderColor: grey[400],
                          borderWidth: 1,
                        }}
                      >
                        {/*<AttachFile sx={{color: grey[400]}} />*/}
                        <Typography variant={'body1'} sx={{color: grey[600]}}>
                          Please upload Reverse Files.
                        </Typography>
                      </Box>
                    )}
                  </Grid>
                </Grid>
              </Grid>

              {/*두파일 비교 개발진행중...*/}
              <Grid item xs={12}>
                {/*{*/}
                {/*  forwardFileData.map((itemF, index) => {*/}
                {/*    return <Box key={index.toString()}*/}
                {/*                sx={{}}>qw{index}-{itemF.name.split('R1')[0] === reverseFileData[index].file.name.split('R2')[0] || itemF.name.split('_1')[0] === reverseFileData[index].file.name.split('_2')[0]}</Box>;*/}
                {/*  })*/}
                {/*}*/}
                {/*{*/}
                {/*  forwardFileData.map((itemF, index) => {*/}
                {/*    return index;*/}
                {/*  })*/}
                {/*}*/}
              </Grid>

              <Grid item xs={12}>
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
        </Box>

        {/*{*/}
        {/*  forwardFileData.length !== reverseFileData.length &&*/}
        {/*  <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>*/}
        {/*    <Alert severity='error' sx={{p: 0, px: 1}}><Typography variant={'body2'} sx={{color: red[500]}}>*/}
        {/*      Forward와 Reverse의 개수를 맞혀 주세요.</Typography></Alert>*/}
        {/*  </Box>*/}
        {/*}*/}

        {forwardFileData.length !== reverseFileData.length ? (
          <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
            <Alert severity='error' sx={{p: 0, px: 1}}>
              <Typography variant={'body2'} sx={{color: red[500]}}>
                Forward와 Reverse의 <strong>개수를 맞혀 주세요.</strong>
              </Typography>
            </Alert>
          </Box>
        ) : (
          forwardFileData.every((value, index) => {
            // setActive(!active);
            return (
              value.name.split('_R1')[0] === reverseFileData[index].file.name.split('_R2')[0] ||
              value.name.split('_1')[0] === reverseFileData[index].file.name.split('_2')[0]
            );
          }) === false && (
            <Box sx={{display: 'flex', justifyContent: 'center', mt: 5}}>
              <Alert severity='error' sx={{p: 0, px: 1}}>
                <Typography variant={'body2'} sx={{color: red[500]}}>
                  Forward와 Reverse의 <strong>파일 이름이 서로 다릅니다.</strong>
                </Typography>
              </Alert>
            </Box>
          )
        )}

        {forwardChk === true && <Alert severity='error'>Forward 파일을 선택해 주세요!</Alert>}
      </Box>
    );
  };

  const ReverseFileAdd = () => {
    const [fileAddState, setFileAddState] = useState<boolean>(false);
    const [rejectedFilesCount, setRejectedFilesCount] = useState<number>();
    // const {open, getRootProps, getInputProps} = useDropzone({
    //   noClick: true,
    //   noKeyboard: true,
    //   accept: {
    //     'application/gz': ['.fasta', '.fa', '.fna', '.faa', '.ffn', '.fastq', '.fq', '.ab1', '.gz', '.gzip', '.gunzip'],
    //   },
    //   onFileDialogOpen: () => {
    //     console.log('FileDialogOpen');
    //     setFileAddState(true);
    //   },
    //   onFileDialogCancel: () => {
    //     console.log('FileDialogCancel');
    //     setFileAddState(false);
    //   },
    //   onDragLeave: () => {
    //     console.log('DragLeave');
    //     setFileAddState(false);
    //   },
    //   onDragOver: () => {
    //     console.log('DragOver');
    //     setFileAddState(true);
    //   },
    //   onDragEnter: () => {
    //     console.log('DragEnter');
    //     setFileAddState(true);
    //   },
    //   validator: nameR2Validator,
    //   onDrop: (acceptedFiles, fileRejections) => {
    //     console.log('FileRejections @@;', fileRejections);
    //     console.log('Reverse AcceptedFiles:::::', acceptedFiles.length);
    //
    //     setFileAddState(false);
    //
    //     if (acceptedFiles !== undefined) {
    //       acceptedFiles.map((item) => setArrFiles([...arrFiles, item.name]));
    //     } else {
    //       console.log('파일 확장자를 확인해주세요!!');
    //     }
    //
    //     setRjctReverseFileData(fileRejections);
    //
    //     setReverseFileData(reverseFileData.concat(acceptedFiles));
    //     setReverseUploadPercentTotal(100 * reverseFileData.concat(acceptedFiles).length);
    //
    //     if (acceptedFiles.length !== 0) {
    //       setReverseChk(false);
    //     }
    //   },
    // });

    const removeFile = (path) => {
      setReverseFileData(reverseFileData.filter((item) => item.file.path !== path));
      setReverseUploadPercent(0);
      setReverseDisplay(false);
      setReverseUploadPercentTotal(reverseUploadPercentTotal - 100);
    };

    const ReverseLists = (props) => {
      const {item, provided, snapshot, index} = props;
      return (
        <Box
          key={uuid()}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={[
            {
              backgroundColor: parseInt(String(index % 2)) === 0 ? grey[200] : grey[50],
              // backgroundColor: randomColor({
              //   luminosity: 'light',
              //   hue: 'blue',
              //   format: 'rgba',
              //   alpha: 0.2,
              // }),
            },
            getItemStyle(snapshot.isDragging, provided.draggableProps.style),
          ]}
        >
          <Grid container>
            <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <Typography variant={'subtitle2'}>{index}</Typography>
            </Grid>
            <Grid item xs={10} sx={{display: 'flex', flexDirection: 'column'}}>
              <Box sx={{mx: 1.5}}>
                <Typography variant={'body1'} sx={{ml: 0}}>
                  {item.file.path}
                  <Box component={'span'} sx={{color: grey[600], ml: 1, fontSize: 14}}>
                    {formatBytes(item.file.size)}
                  </Box>
                </Typography>
                <Box sx={{width: '100%', mb: 0, display: 'flex', alignItems: 'center'}}>
                  <Box sx={{width: '100%', mr: 1}}>
                    <BorderLinearProgress
                      variant='determinate'
                      value={item.file.progress === undefined ? 0 : item.file.progress}
                    />
                  </Box>
                  <Box>{item.file.progress === undefined ? 0 : item.file.progress}%</Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={1} sx={{display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}>
              {item.file.progress === 100 ? (
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
                    removeFile(item.file.path);
                  }}
                />
              )}
            </Grid>
          </Grid>
          {/*{*/}
          {/*  reverseDisplay === true && item.file.progress !== undefined &&*/}
          {/*  <Box sx={{width: '100%', display: 'flex', alignItems: 'center'}}>*/}
          {/*    <Box sx={{width: '100%', mr: 1}}>*/}
          {/*      <LinearProgress variant='determinate' value={item.file.progress} color={'success'} />*/}
          {/*    </Box>*/}
          {/*    <Box>{item.file.progress}%</Box>*/}
          {/*  </Box>*/}
          {/*}*/}
        </Box>
      );
    };

    const [placeholderProps, setPlaceholderProps] = useState({});

    const onDragEnd = (result) => {
      // dropped outside the list
      if (!result.destination) {
        return;
      }

      setPlaceholderProps({});
      // setItems(items => reorder(items, result.source.index, result.destination.index));
      setReverseFileData((items) => reorder(items, result.source.index, result.destination.index));
    };

    const onDragUpdate = (update) => {
      if (!update.destination) {
        return;
      }
      const draggableId = update.draggableId;
      const destinationIndex = update.destination.index;

      const domQuery = `[${queryAttr}='${draggableId}']`;
      const draggedDOM = document.querySelector(domQuery);

      if (!draggedDOM) {
        return;
      }
      const {clientHeight, clientWidth} = draggedDOM;

      const clientY =
        parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingTop) +
        [...draggedDOM.parentNode.children].slice(0, destinationIndex).reduce((total, curr) => {
          const style = curr.currentStyle || window.getComputedStyle(curr);
          const marginBottom = parseFloat(style.marginBottom);
          return total + curr.clientHeight + marginBottom;
        }, 0);

      setPlaceholderProps({
        clientHeight,
        clientWidth,
        clientY,
        clientX: parseFloat(window.getComputedStyle(draggedDOM.parentNode).paddingLeft),
      });
    };

    return (
      // <Box {...getRootProps()} sx={{
      <Box
        sx={{
          mb: 0,
          width: '100%',
        }}
      >
        {/*<input {...getInputProps({})} />*/}

        {/*<Box sx={{display: 'flex', justifyContent: 'space-between'}}>*/}
        {/*  <Typography variant={'body1'} sx={{mb: 3, fontSize: 18}}>*/}
        {/*    Reverse files*/}
        {/*    <Chip*/}
        {/*      label={reverseFileData.length}*/}
        {/*      size={'small'}*/}
        {/*      color={reverseFileData.length === 0 ? 'secondary' : reverseUploadPercent === reverseUploadPercentTotal ? 'success' : 'secondary'}*/}
        {/*      sx={{mx: 1, color: 'white'}}*/}
        {/*    />*/}
        {/*  </Typography>*/}
        {/*</Box>*/}

        {reverseFileData.length !== 0 && (
          <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
            <Droppable droppableId='droppable'>
              {(provided, snapshot) => (
                <Box {...provided.droppableProps} ref={provided.innerRef} sx={getListStyle(snapshot.isDraggingOver)}>
                  {reverseFileData.map((item, index) => (
                    <Draggable key={uuid()} draggableId={item.file.path} index={index}>
                      {(provided, snapshot) => (
                        // <div
                        //   ref={provided.innerRef}
                        //   {...provided.draggableProps}
                        //   {...provided.dragHandleProps}
                        //   style={getItemStyle(
                        //     snapshot.isDragging,
                        //     provided.draggableProps.style,
                        //   )}
                        // >
                        //   {item.name}
                        // </div>
                        <ReverseLists provided={provided} snapshot={snapshot} item={item} index={index} />
                      )}
                    </Draggable>
                  ))}

                  {provided.placeholder}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: placeholderProps.clientY,
                      left: placeholderProps.clientX,
                      height: placeholderProps.clientHeight,
                      background: '#dddddd',
                      width: placeholderProps.clientWidth,
                    }}
                  />
                </Box>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </Box>
    );
  };

  return (
    <>
      <Dialog open={open} fullWidth={true} maxWidth={'lg'} scroll='paper'>
        <DialogTitle sx={{p: 5, pb: 1, pt: 5.5, display: 'flex', justifyContent: 'space-between'}}>
          <Typography component={'div'} variant='subtitle1'>
            Paired Upload
          </Typography>
          <Typography component={'div'} variant={'body1'}>
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

        <DialogContent sx={{p: 5, pt: 0}}>
          <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} id={'pairedUploadForm'}>
            <Box sx={{mb: 2, display: 'flex', alignItems: 'center'}}>
              <IconButton aria-describedby={id} onClick={handleTipClick}>
                <InfoOutlined sx={{color: '#00BCD4'}} />
              </IconButton>
              <Popover
                id={id}
                open={tipOpen}
                anchorEl={anchorEl}
                onClose={handleTipClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
              >
                <Box sx={{p: 3}}>
                  <Box sx={{mb: 3}}>
                    <Typography variant={'body1'}>
                      <strong>R1, R2 Example of a file type</strong>
                    </Typography>
                    <Typography variant={'body1'} sx={{alignItems: 'center', display: 'flex'}}>
                      <ArrowRightAlt />
                      A_S1_L001_R1_001.fastq.gz / A_S1_L001_R2_001.fastq.gz
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant={'body1'}>
                      <strong>_1, _2 Example of a file type</strong>
                    </Typography>
                    <Typography variant={'body1'} sx={{alignItems: 'center', display: 'flex'}}>
                      <ArrowRightAlt />
                      S001-P01-1-15000_1.fastq.gz / S001-P01-1-15000_2.fastq.gz
                    </Typography>
                  </Box>
                </Box>
              </Popover>

              <Typography variant={'body2'} sx={{color: '#00BCD4'}}>
                Only files containing <strong>R1, _1, R2, _2</strong> characters are possible.
              </Typography>
            </Box>

            {/*<DialogContentText>*/}
            <PairedFileAdd />
            {/*<p>{forwardUploadPercent} / {forwardUploadPercentTotal}</p>*/}
            {/*<p>{reverseUploadPercent} / {reverseUploadPercentTotal}</p>*/}
            {/*</DialogContentText>*/}
          </Box>
        </DialogContent>

        <DialogActions sx={{p: 0, display: 'flex', alignItems: 'center'}}>
          {(forwardUploadPercent === 0 && forwardFileData.length === 0) ||
          (reverseUploadPercent === 0 && reverseFileData.length === 0) ||
          forwardFileData.length !== reverseFileData.length ||
          forwardFileData.every(
            (value, index) =>
              value.name.split('_R1')[0] === reverseFileData[index].file.name.split('_R2')[0] ||
              value.name.split('_1')[0] === reverseFileData[index].file.name.split('_2')[0],
          ) === false ? (
            <Button
              type={'submit'}
              fullWidth
              size={'xlarge'}
              variant={'contained'}
              disabled={!active}
              form={'pairedUploadForm'}
            >
              Upload
            </Button>
          ) : forwardUploadPercent === 0 &&
            forwardFileData.length !== 0 &&
            reverseUploadPercent === 0 &&
            reverseFileData.length !== 0 ? (
            <Button
              type={'submit'}
              fullWidth
              size={'xlarge'}
              variant={'contained'}
              disabled={active}
              form={'pairedUploadForm'}
            >
              Upload
            </Button>
          ) : forwardUploadPercent === forwardUploadPercentTotal &&
            reverseUploadPercent === reverseUploadPercentTotal ? (
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

export default PairedUploadDialog;
