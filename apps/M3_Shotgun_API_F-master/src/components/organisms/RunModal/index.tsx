import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  InputAdornment,
  Step,
  StepLabel,
  Stepper,
  TextField,
  Typography,
  Badge,
  Chip,
  Stack,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Radio,
  List,
  ListSubheader,
  ListItemButton,
  ListItemText,
  Collapse,
  ListItem,
  Alert,
  RadioGroup,
  FormControlLabel,
  StepIcon,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Divider,
  CircularProgress,
} from '@mui/material';
import {TreeView, TreeItem} from '@mui/lab';
import {useDropzone} from 'react-dropzone';
import {useForm, Controller, useWatch, SubmitHandler} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {
  ModeEditOutlined,
  IosShareOutlined,
  SkipNext,
  Done,
  CheckCircleOutline,
  PriorityHighOutlined,
  UploadFileOutlined,
  ExpandMore,
  ChevronRight,
  ExpandLess,
  Warning,
  ErrorOutline,
  OpenInNew,
  FolderZip,
  ArticleOutlined,
} from '@mui/icons-material';
// import Select from 'react-select';
import {IconBtn} from '@components/atoms/button/IconBtn';
import {themeJeju} from '@components/variables/themeJeju';
import {GET, POST} from '@hooks/api/useAPI';
import TreeMenu, {ItemComponent} from 'react-simple-tree-menu';
import styled from 'styled-components';
import {useRouter} from 'next/router';
import FileSaver from 'file-saver';
import uuid from 'react-uuid';

const schema = yup
  .object({
    // inputType: yup.string().required('InputType을 선택해주세요!').nullable(),
    // inputName: yup.string().required('InputName을 입력해주세요!').nullable(),
  })
  .required();

const steps = ['Upload Dataset', 'Select a Job', 'Set Option'];
const initText = 'Click to select .tsv file';
const jobSelectInitText = 'Select a Job!';
// const selectBoxData = [
//   {
//     selectName: 'exGroup1',
//     optionList: [{value: 'exOption1-1'}, {value: 'exOption1-2'}, {value: 'exOption1-3'}],
//   },
//   {
//     selectName: 'exGroup2',
//     optionList: [{value: 'exOption2-1'}, {value: 'exOption2-2'}, {value: 'exOption2-3'}],
//   },
// ];

const CustomBadge = styled(Badge)({
  '.MuiBadge-badge': {
    padding: '0 7px 0 6px',
  },
});

const LabelChip = styled(Chip)({
  '.MuiChip-label': {
    paddingRight: 10,
  },
});

const RunModal = (props) => {
  const {onClose, selectedData, runOpen} = props;
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set<number>());
  const [tsvFileName, setTsvFileName] = useState([initText]);
  const [tsvFile, setTsvFile] = useState({});
  const [uploadSuccess, setUploadSuccess] = useState<boolean>(false);
  const [validationInfo, setValidationInfo] = useState({
    validationDetailList: [],
    errorExist: false,
  });
  const [tempFilePathValue, setTempFilePathValue] = useState('');
  const [summaryData, setSummaryData] = useState({
    totalProfileCount: null,
    categoricalDetailList: [],
    numericDetailList: [],
  });
  const [jobRunDataSetId, setJobRunDataSetId] = useState(null);
  const [profileDataset, setProfileDataset] = useState({
    jobTitle: '',
    totalProfileCount: 0,
    categoricalDetailList: [],
    numericDetailList: [],
  });
  const [categoryDetailData, setCategoryDetailData] = useState([]);
  const [jobInfos, setJobInfos] = useState({
    jobDescription: '',
    jobId: null,
    jobName: jobSelectInitText,
    profileType: '',
  });
  const [refLists, setRefLists] = useState([]);
  const [zipData, setZipData] = useState('');
  const [nextBtnDisabled, setNextBtnDisabled] = useState({
    step0: true,
    step1: true,
    step2: true,
  });
  const [isHelpText, setIsHelpText] = useState(false);
  const [datasetKeyList, setDatasetKeyList] = useState([]);
  const [datasetOptionList, setDatasetOptionList] = useState([]);
  const [optionSelectedData, setOptionSelectedData] = useState([]);
  const [optionValue, setOptionValue] = useState('');
  const [runDisabled, setRunDisabled] = useState(false);

  useEffect(() => {
    // if (activeStep === 0) {
    //   if (getValues('jobTitle') === '' && validationInfo.validationDetailList.length === 0) {
    //     setNextBtnDisabled({
    //       step0: !validationInfo.errorExist,
    //       step1: true,
    //       step2: true,
    //     });
    //   }
    // }
  }, []);

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
  const {getRootProps, getInputProps, open} = useDropzone({
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
    noDrag: true,
    // disabled: true,
    accept: {
      'text/tsv': ['.tsv'],
    },
    onDrop: async (acceptedFiles, fileRejections) => {
      console.log('acceptedFiles', typeof acceptedFiles[0]);
      setTsvFileName(acceptedFiles.map((file) => file.name));

      setIsHelpText(false);
      // 파일업로드 할때 이걸 넘기면 될거 같다.
      setTsvFile(acceptedFiles[0]);

      const form = new FormData();
      form.append('jobTitle', getValues('jobTitle'));
      form.append('dataset', acceptedFiles[0]);

      await POST('/shotgun/job/file/upload/dataset', form).then((res) => {
        console.log('Dataset Info =>', res.data.data);
        console.log('Validation List', res.data.data.validationDetailList);
        console.log('Data Summary', res.data.data.summaryDetailList);

        const tempFilePath = res.data.data.tempFilePath;
        const validationLists = res.data.data.validationInfo;
        const summaryLists = res.data.data.summaryDetailList;

        setTempFilePathValue(tempFilePath);
        setUploadSuccess(res.data.success);
        setValidationInfo({
          validationDetailList: validationLists.validationDetailList,
          errorExist: validationLists.errorExist,
        });
        setSummaryData({
          ...summaryData,
          totalProfileCount: summaryLists.totalProfileCount,
          categoricalDetailList: summaryLists.categoricalDetailList,
          numericDetailList: summaryLists.numericDetailList,
        });
        // if (res.data.success === false) {
        //   setTsvFileName(['Upload Fail!']);
        // }

        const body = {
          jobTitle: getValues('jobTitle'),
          summaryDetailList: summaryLists,
        };

        POST('/shotgun/job/dataset/summary', body).then((res) => {
          console.log('shotgunJobRunDataSetId', res.data.data.shotgunJobRunDataSetId);
          setJobRunDataSetId(res.data.data.shotgunJobRunDataSetId);
        });
      });

      await refreshBtnDisabled();
    },
  });

  const dialogOpen = () => {
    console.log('getValueJobTitle ==> ', getValues('jobTitle'));
    // console.log('WER@#$%XCVSDFG', JSON.stringify(getValues('jobTitle')));
    if (getValues('jobTitle') === '' || getValues('jobTitle') === undefined) {
      console.log('jobTitle을 입력해주세요!@!@!@');
      setIsHelpText(true);
    } else {
      open();
    }
  };

  const refreshBtnDisabled = useCallback(() => {
    if (activeStep === 0) {
      if (validationInfo.errorExist === true) {
        setNextBtnDisabled({
          ...nextBtnDisabled,
          step0: true,
        });
      } else {
        setNextBtnDisabled({
          ...nextBtnDisabled,
          step0: false,
        });
      }
    }
  }, [validationInfo.errorExist]);

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = async () => {
    let newSkipped = skipped;
    console.log('77777777===>>', newSkipped);
    console.log('activeStep', activeStep);
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    if (activeStep === 0) {
      await GET(`/shotgun/job/dataset?shotgunJobRunDataSetId=${jobRunDataSetId}`).then((res) => {
        console.log('Profile List ==>>', res.data.data);
        const {jobTitle, totalProfileCount, categoricalDetailList, numericDetailList} = res.data.data;
        setProfileDataset({
          ...profileDataset,
          jobTitle: jobTitle,
          totalProfileCount: totalProfileCount,
          categoricalDetailList: categoricalDetailList,
          numericDetailList: numericDetailList,
        });
      });
      await GET(`/shotgun/job/list?shotgunJobRunDataSetId=${jobRunDataSetId}`).then((res) => {
        console.log('Category List ==>>', res.data.data.categoryDetailList);
        setCategoryDetailData(res.data.data.categoryDetailList);
      });
    }

    if (activeStep === 1) {
      await GET(`/shotgun/job/set/option/list?jobId=${jobInfos.jobId}&shotgunJobRunDataSetId=${jobRunDataSetId}`).then(
        (res) => {
          console.log('@Option List ==>>', res.data.data);
          setDatasetOptionList(res.data.data);
        },
      );
    }

    setActiveStep((prevActiveStep) => {
      console.log(prevActiveStep);
      return prevActiveStep + 1;
    });
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepOptional(activeStep)) {
  //     // You probably want to guard against something like this,
  //     // it should never occur unless someone's actively trying to break something.
  //     throw new Error("You can't skip a step that isn't optional.");
  //   }
  //
  //   setActiveStep((prevActiveStep) => prevActiveStep + 1);
  //   setSkipped((prevSkipped) => {
  //     const newSkipped = new Set(prevSkipped.values());
  //     newSkipped.add(activeStep);
  //     return newSkipped;
  //   });
  // };

  const handleReset = () => {
    setActiveStep(0);
    resetField('jobTitle');
    setTsvFileName([initText]);
    setUploadSuccess(false);
    setValidationInfo({
      ...validationInfo,
      validationDetailList: [],
      errorExist: false,
    });
    setProfileDataset({
      jobTitle: '',
      totalProfileCount: 0,
      categoricalDetailList: [],
      numericDetailList: [],
    });
    setJobInfos({
      jobId: null,
      jobDescription: '',
      jobName: 'Select a Job!',
      profileType: '',
    });
    setCategoryDetailData([]);
    setNextBtnDisabled({
      step0: true,
      step1: true,
      step2: true,
    });
    setDatasetKeyList([]);
    setDatasetOptionList([]);
    setOptionSelectedData([]);
    setExpanded(false);
    setJobRunDataSetId(null);
    setTempFilePathValue('');
    setIsHelpText(false);
    setRunDisabled(false);
  };

  const handleClose = () => {
    handleReset();
    onClose();
  };

  const onSubmit = (data) => {
    // console.log('!@!#$%^&*', activeStep);
    // console.log('New Profile Name =>>', data);
    // console.log('selectData ==>>', optionSelectedData);

    setRunDisabled(true);
    const totalBody = {
      jobId: jobInfos.jobId,
      optionDetailList: optionSelectedData,
      shotgunJobRunDataSetId: jobRunDataSetId,
      tempFilePath: tempFilePathValue,
    };

    console.log('Run totalBody', totalBody);

    POST('/shotgun/job/run/set/lefse', totalBody).then((res) => {
      console.log('lefse run ==>>', res);
      if (res.data.success) {
        router.push('/shotgun/jobsStatus');
        handleClose();
      } else {
        console.log('Run Error!');
      }
    });
  };

  const [expanded, setExpanded] = React.useState<string | false>(false);
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('Radio Value ==>>', event.target.value);
    setSelectedValue(event.target.value);
  };

  const handleAccordianChange =
    (panel: string, jobId: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      console.log('panel', panel);
      console.log('isExpanded', isExpanded);
      console.log('JobId', jobId);
      setExpanded(isExpanded ? panel : false);
      if (isExpanded === true) {
        GET(`/shotgun/job?jobId=${jobId}`).then((res) => {
          // console.log('Tree detail ==>>', res.data.data);
          setJobInfos({
            ...jobInfos,
            jobId: res.data.data.jobId,
            jobDescription: res.data.data.jobDescription,
            jobName: res.data.data.jobName,
            profileType: res.data.data.profileType,
          });
        });
        GET(`/shotgun/job/file/download/example?jobId=${jobId}`).then((res) => {
          // console.log('.ZIP DN ==>>', res.data.data);
          setZipData(res.data.data);
        });
        GET(`/shotgun/job/ref?jobId=${jobId}`).then((res) => {
          // console.log('ref ==>>', res.data.data);
          setRefLists(res.data.data);
        });
      }
    };

  const zipDn = () => {
    const resultData = `data:application/zip;base64, ${zipData}`;
    FileSaver.saveAs(resultData, `${jobInfos.jobName}_Example.zip`);
  };

  return (
    <Dialog onClose={handleClose} open={runOpen} fullWidth maxWidth={'sm'}>
      <DialogTitle
        sx={{
          pb: 3,
          pt: 5,
          mx: 3,
          mb: 3,
          borderBottomWidth: 1,
          borderBottomColor: themeJeju.palette.grey['400'],
          borderBottomStyle: 'solid',
        }}
      >
        {/*<Typography variant='subtitle1'>UPLOAD DATASET</Typography>*/}
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps: {completed?: boolean} = {};
            const labelProps: {
              optional?: React.ReactNode;
            } = {};
            // if (isStepOptional(index)) {
            //   labelProps.optional = <Typography variant='caption'>Optional</Typography>;
            // }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  {...labelProps}
                  StepIconProps={{
                    // active: true,
                    sx: {
                      '.MuiStepIcon-root.Mui-active': {
                        backgroundColor: 'red !important',
                        '.Mui-active': {
                          backgroundColor: 'red !important',
                        },
                      },
                    },
                  }}
                >
                  {/*<StepIcon*/}
                  {/*  active={true}*/}
                  {/*  icon={<ExpandMore />}*/}
                  {/*  sx={{*/}
                  {/*    '.MuiStepIcon-root': {*/}
                  {/*      '.Mui-active': {*/}
                  {/*        backgroundColor: 'red',*/}
                  {/*      },*/}
                  {/*    },*/}
                  {/*  }}*/}
                  {/*/>*/}
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
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

      {activeStep === steps.length ? (
        <DialogContent>
          <Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} id={'runEditForm'}>
            <Box sx={{p: 2, mb: 3, backgroundColor: themeJeju.palette.grey['100'], textAlign: 'center'}}>
              {runDisabled ? (
                <>
                  <CircularProgress color='success' size={32} />
                  <Typography sx={{fontSize: 16}}>The run is in progress.</Typography>
                  <Typography sx={{fontSize: 16}}>please wait for a moment.</Typography>
                </>
              ) : (
                <>
                  <CheckCircleOutline fontSize={'large'} color={'success'} />
                  <Typography sx={{fontSize: 16}}>All preparations are complete.</Typography>
                  <Typography sx={{fontSize: 16}}>
                    Do you want to <b>run?</b>
                  </Typography>
                </>
              )}
            </Box>
          </Box>
          <Stack direction='row' spacing={1}>
            {activeStep !== 0 && (
              <Button size={'large'} variant={'outlined'} color={'secondary'} onClick={handleBack} fullWidth>
                Back
              </Button>
            )}
            <Button
              disabled={runDisabled}
              type={'submit'}
              size={'large'}
              fullWidth
              variant={'contained'}
              form={'runEditForm'}
              sx={{fontWeight: '600'}}
            >
              Run
            </Button>
          </Stack>
        </DialogContent>
      ) : (
        <DialogContent>
          <Box>
            <>
              {/*<Typography sx={{mt: 2, mb: 1}}>Step {activeStep}</Typography>*/}

              {activeStep !== 0 && (
                <Box sx={{borderBottom: `1px solid ${themeJeju.palette.grey['400']}`}}>
                  <Box
                    sx={{
                      p: 3,
                      backgroundColor: 'white',
                      borderWidth: 1,
                      borderStyle: 'solid',
                      borderColor: themeJeju.palette.primary.main,
                    }}
                  >
                    <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                      <Typography variant={'subtitle1'} sx={{mb: 1}}>
                        {profileDataset.jobTitle}
                      </Typography>
                      <Box>{profileDataset.totalProfileCount} Total Profiles</Box>
                    </Box>
                    <Box>
                      <Stack direction='row' spacing={3} sx={{overflowX: 'auto', pt: 1.5}}>
                        {profileDataset.categoricalDetailList.map((item) => {
                          return (
                            <CustomBadge badgeContent={item.count} color={'secondary'}>
                              <Chip label={item.metaName} size={'small'} />
                            </CustomBadge>
                          );
                        })}
                        {profileDataset.numericDetailList.map((item) => {
                          return (
                            <CustomBadge badgeContent={item.count} color={'secondary'}>
                              <Chip label={item.metaName} size={'small'} />
                            </CustomBadge>
                          );
                        })}
                      </Stack>
                    </Box>
                  </Box>
                  <Grid container spacing={1} sx={{mt: 0.5, justifyContent: 'space-between', px: 1.5}}>
                    <Grid item>
                      <Typography variant={'subtitle1'}>Job</Typography>
                    </Grid>
                    <Grid item>
                      <Typography
                        variant={'body1'}
                        sx={{
                          fontWeight: '600',
                          color: expanded ? themeJeju.palette.success.main : themeJeju.palette.error.light,
                        }}
                      >
                        {expanded ? jobInfos.jobName : jobSelectInitText}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              )}

              {activeStep === 0 ? (
                <Box>
                  <Box sx={{p: 2, mb: 3, backgroundColor: themeJeju.palette.grey['100']}}>
                    <Typography variant={'body1'}>Upload your data in Job Dataset template for analysis</Typography>
                    <Typography variant={'body1'}>
                      Refer to{' '}
                      <a
                        href={'https://good-mimosa-0a8.notion.site/Set-Data-analysis-c0e5ad6b553b4383be907f49ca9dffb9'}
                        target={'_blank'}
                      >
                        How To Use <IosShareOutlined sx={{fontSize: 14}} />
                      </a>
                      for detailed instructions.
                    </Typography>
                  </Box>

                  <Grid container sx={{mb: 3}}>
                    <Grid item xs={2} sx={{display: 'flex', mt: 0}}>
                      <Typography variant={'subtitle1'}>Job Title</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Controller
                        render={({field}) => (
                          <TextField
                            {...field}
                            // autoFocus={isHelpText}
                            error={isHelpText}
                            helperText={isHelpText ? 'Please enter a job title.' : null}
                            // size={'small'}
                            variant={'standard'}
                            // margin='dense'
                            id='jobTitle'
                            // label={'Job Title'}
                            type='text'
                            fullWidth
                            // value={editState.profileId}
                            placeholder={'Enter a job title'}
                            // error={errors.email && true}
                          />
                        )}
                        control={control}
                        name='jobTitle'
                        defaultValue={''}
                      />
                    </Grid>
                  </Grid>
                  <Grid container sx={{mb: 3}}>
                    <Grid item xs={2} sx={{display: 'flex', mt: 0.8}}>
                      <Typography variant={'subtitle1'}>Dataset File</Typography>
                    </Grid>
                    <Grid item xs={10}>
                      <Box {...getRootProps({className: 'dropzone'})}>
                        {/*<input {...getInputProps()} {...register('tsvFile')} />*/}
                        <input {...getInputProps()} />
                        {/*{JSON.stringify(isFocused)}*/}
                        <Button
                          onClick={dialogOpen}
                          variant={'outlined2'}
                          fullWidth
                          startIcon={validationInfo.errorExist === true ? <ErrorOutline /> : <UploadFileOutlined />}
                          sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            color: validationInfo.errorExist === true ? 'red' : 'black',
                          }}
                        >
                          {tsvFileName}
                        </Button>

                        <Box>
                          {validationInfo.validationDetailList.length === 0 && (
                            <Typography variant={'body2'} sx={{ml: 1, mt: 1}}>
                              Only <b>.tsv</b> file are supported.
                            </Typography>
                          )}
                        </Box>
                      </Box>
                      {validationInfo.validationDetailList.map((vList) => {
                        return (
                          <Box key={uuid()}>
                            <Alert severity={vList.error ? 'error' : 'success'}>{vList.validationValue}</Alert>
                          </Box>
                        );
                      })}
                    </Grid>
                  </Grid>

                  {validationInfo.validationDetailList.length !== 0 && (
                    <Grid container>
                      <Grid item xs={12}>
                        <Typography variant={'subtitle1'}>Dataset Summary</Typography>
                        <Paper variant='outlined' sx={{p: 2}}>
                          <Box sx={{mb: 1}}>Total: {summaryData.totalProfileCount} Profiles</Box>

                          <Box sx={{mb: 2}}>
                            <Typography variant={'subtitle1'}>Categorical</Typography>
                            <Grid container>
                              {summaryData.categoricalDetailList.map((item) => {
                                const {metaName, count} = item;
                                return (
                                  <Grid item xs={6}>
                                    <Box>
                                      {metaName} / {count}
                                    </Box>
                                  </Grid>
                                );
                              })}
                            </Grid>
                          </Box>

                          <Box>
                            <Typography variant={'subtitle1'}>Numeric</Typography>
                            <Grid container>
                              {summaryData.numericDetailList.length === 0
                                ? '-'
                                : summaryData.numericDetailList.map((item) => {
                                    const {metaName, range} = item;
                                    return (
                                      <Grid item xs={6}>
                                        <Box>
                                          {metaName} / {range}
                                        </Box>
                                      </Grid>
                                    );
                                  })}
                            </Grid>
                          </Box>
                        </Paper>
                      </Grid>
                    </Grid>
                  )}
                </Box>
              ) : activeStep === 1 ? (
                <Box sx={{mt: 3}}>
                  {/*<RadioGroup*/}
                  {/*  aria-labelledby='demo-controlled-radio-buttons-group'*/}
                  {/*  name='controlled-radio-buttons-group'*/}
                  {/*  value={selectedValue}*/}
                  {/*  onChange={handleRadioChange}*/}
                  {/*>*/}
                  {/*  <FormControlLabel value='female' control={<Radio />} label='Female' />*/}
                  {/*  <FormControlLabel value='male' control={<Radio />} label='Male' />*/}
                  {/*</RadioGroup>*/}

                  <TreeView
                    aria-label='file system navigator'
                    defaultCollapseIcon={<ExpandMore />}
                    defaultExpandIcon={<ChevronRight />}
                    onNodeSelect={(event) => console.log(event)}
                    expanded={['1']}
                    sx={{
                      flexGrow: 1,
                      overflowY: 'auto',
                    }}
                  >
                    {/*{JSON.stringify(categoryDetailData)}*/}
                    {categoryDetailData.map((item, index) => {
                      return (
                        <TreeItem
                          nodeId={`${index + 1}`}
                          label={item.categoryName}
                          sx={{backgroundColor: 'white', pl: 1}}
                        >
                          {item.categoryJobDetailList.map((childrenItem, index) => (
                            <Accordion
                              expanded={expanded === `panel${index}`}
                              onChange={handleAccordianChange(`panel${index}`, childrenItem.jobId)}
                              sx={{
                                ml: 1,
                                border: `1px solid ${
                                  expanded ? themeJeju.palette.primary.light : themeJeju.palette.grey['300']
                                }`,
                              }}
                            >
                              <AccordionSummary
                                expandIcon={<ExpandMore />}
                                id={`panel${index}bh-header`}
                                // sx={{border: '1px solid red'}}
                              >
                                <Typography sx={{width: '50%'}}>
                                  {/*{childrenItem.jobId}*/}
                                  {childrenItem.jobName}
                                </Typography>
                                <Box sx={{width: '50%', display: 'flex', justifyContent: 'flex-end'}}>
                                  <Stack spacing={1} direction={'row'}>
                                    <Chip label={childrenItem.profileType} size={'small'} />
                                  </Stack>
                                </Box>
                              </AccordionSummary>
                              <AccordionDetails>
                                <Typography variant={'body1'}>{jobInfos.jobDescription}</Typography>
                                <Divider sx={{my: 3}} />
                                <Grid container spacing={3}>
                                  <Grid item>
                                    <Typography variant={'subtitle1'}>Reference link</Typography>
                                    {refLists.map((item) => {
                                      const {link, name} = item;
                                      return (
                                        <Button
                                          size={'small'}
                                          href={link}
                                          target={'_blank'}
                                          startIcon={<ArticleOutlined />}
                                          // endIcon={<OpenInNew />}
                                        >
                                          {name}
                                        </Button>
                                      );
                                    })}
                                  </Grid>
                                  <Grid item>
                                    <Typography variant={'subtitle1'}>Download Ex Dataset</Typography>
                                    <Box sx={{justifyContent: 'flex-end', display: 'flex'}}>
                                      <IconButton>
                                        <FolderZip onClick={zipDn} />
                                      </IconButton>
                                    </Box>
                                  </Grid>
                                </Grid>
                              </AccordionDetails>
                            </Accordion>
                          ))}
                          {/*<Accordion expanded={expanded === 'panel2'} onChange={handleAccordianChange('panel2', 2)}>*/}
                          {/*  <AccordionSummary*/}
                          {/*    expandIcon={<ExpandMore />}*/}
                          {/*    aria-controls='panel2bh-content'*/}
                          {/*    id='panel2bh-header'*/}
                          {/*  >*/}
                          {/*    <Typography sx={{width: '33%', flexShrink: 0}}>Users</Typography>*/}
                          {/*    <Typography sx={{color: 'text.secondary'}}>You are currently not an owner</Typography>*/}
                          {/*  </AccordionSummary>*/}
                          {/*  <AccordionDetails>*/}
                          {/*    <Typography>*/}
                          {/*      Donec placerat, lectus sed mattis semper, neque lectus feugiat lectus, varius pulvinar*/}
                          {/*      diam eros in elit. Pellentesque convallis laoreet laoreet.*/}
                          {/*    </Typography>*/}
                          {/*  </AccordionDetails>*/}
                          {/*</Accordion>*/}
                        </TreeItem>
                      );
                    })}
                  </TreeView>
                </Box>
              ) : (
                <Box sx={{mt: 3}}>
                  {/*<Typography variant={'subtitle1'}>Group</Typography>*/}
                  <Grid container spacing={3}>
                    {/*<Grid item xs={6}>*/}
                    {/*<Controller*/}
                    {/*  name='select'*/}
                    {/*  control={control}*/}
                    {/*  render={({field}) => (*/}
                    {/*    <Select*/}
                    {/*      {...field}*/}
                    {/*      // onChange={(value) => setOptionSelectedData((prevState) => [...prevState, value])}*/}
                    {/*      onChange={(value, event) => {*/}
                    {/*        console.log('Selected Option Value ==>>', value);*/}
                    {/*        setOptionSelectedData([value]);*/}
                    {/*      }}*/}
                    {/*      styles={{menuPortal: (base) => ({...base, zIndex: 9999})}}*/}
                    {/*      menuPortalTarget={document.body}*/}
                    {/*      options={options}*/}
                    {/*      isMulti={false}*/}
                    {/*    />*/}
                    {/*  )}*/}
                    {/*/>*/}

                    {datasetOptionList.map((item, index) => {
                      return (
                        <Grid item xs={6}>
                          <FormControl fullWidth size={'small'}>
                            <InputLabel id={`groupSelectLabel${index}`}>Group</InputLabel>
                            <Select
                              fullWidth
                              labelId={`groupSelectLabel${index}`}
                              id={`groupSelect${index}`}
                              value={optionValue}
                              label='Group'
                              name='Group'
                              onChange={(e) => {
                                console.log('SelectedTarget ==>', e.target.value);

                                // setOptionSelectedData((prevalue) => {
                                //   return {
                                //     ...prevalue, // Spread Operator
                                //     [e.target.name]: e.target.value,
                                //   };
                                // });
                                setOptionSelectedData((prevState) => [
                                  ...prevState,
                                  {
                                    key: item.selectName,
                                    value: e.target.value,
                                  },
                                ]);
                                setOptionValue(e.target.value);
                              }}
                            >
                              {item.optionList.map((option) => (
                                <MenuItem value={option.value}>{option.value}</MenuItem>
                              ))}
                            </Select>
                          </FormControl>
                        </Grid>
                      );
                    })}

                    {/*<FormControl fullWidth size={'small'}>*/}
                    {/*  <InputLabel id='groupSelectLabel'>Group</InputLabel>*/}
                    {/*  <Select*/}
                    {/*    fullWidth*/}
                    {/*    labelId='groupSelectLabel'*/}
                    {/*    id='GroupSelect'*/}
                    {/*    value={optionValue}*/}
                    {/*    label='Group'*/}
                    {/*    onChange={(e) => {*/}
                    {/*      // setOptionSelectedData([value]);*/}
                    {/*      console.log('ssssss', e.target.value);*/}
                    {/*      setOptionValue(e.target.value);*/}
                    {/*    }}*/}
                    {/*  >*/}
                    {/*    {datasetOptionList.map((item) => (*/}
                    {/*      <MenuItem value={item}>{item}</MenuItem>*/}
                    {/*    ))}*/}
                    {/*  </Select>*/}
                    {/*</FormControl>*/}
                    {/*</Grid>*/}
                  </Grid>
                </Box>
              )}
            </>
          </Box>
        </DialogContent>
      )}

      {activeStep === steps.length ? null : (
        <DialogActions sx={{p: 3}}>
          {activeStep !== 0 && (
            <Button size={'large'} variant={'outlined'} color={'secondary'} onClick={handleBack} fullWidth>
              Back
            </Button>
          )}
          {validationInfo.validationDetailList.length === 0 ? (
            <Button disabled={true} size={'large'} fullWidth variant={'contained'}>
              Next
            </Button>
          ) : (
            <Button
              disabled={
                activeStep === 0
                  ? validationInfo.errorExist
                  : activeStep === 1
                  ? !expanded
                  : activeStep === 2
                  ? optionSelectedData.length !== 0
                    ? false
                    : true
                  : false
              }
              size={'large'}
              fullWidth
              variant={'contained'}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              {/*{JSON.stringify(validationInfo.errorExist)}*/}
            </Button>
          )}
        </DialogActions>
      )}
    </Dialog>
  );
};

export default RunModal;
