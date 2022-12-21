import React, {useEffect, useState, useCallback, useRef} from 'react';
import axios from 'axios';
import Head from 'next/head';
import {getCookie} from 'cookies-next';
import {
  Button,
  TextField,
  Container,
  Box,
  Typography,
  Alert,
  InputLabel,
  MenuItem,
  FormControl,
  // Select,
  SelectChangeEvent,
  Grid,
  InputAdornment,
  FormHelperText,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  IconButton,
  ListItemText,
} from '@mui/material';
import 'react-dropzone-uploader/dist/styles.css';
import Dropzone from 'react-dropzone-uploader';
import {Btn} from '@src/components/atoms/button';
import {useForm, Controller, SubmitHandler, NestedValue} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Files from 'react-files';
import {grey} from '@mui/material/colors';
import {Close} from '@mui/icons-material';
import Select from 'react-select';

const accessJwt = getCookie('emHYMSSW');

interface IFormInput {
  inputType: string;
  inputName: string;
  uploadFile: string[];
}

export const InputUpload = (props) => {
  // const {aToken} = props;
  const [selectedFile, setSelectedFile] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [forwardFiles, setForwardFiles] = useState([]);
  const [reverseFiles, setReverseFiles] = useState([]);
  const [progress, setProgress] = useState(0);
  const [uploadValue, setUploadValue] = useState<number>();
  const [buffer, setBuffer] = useState(10);
  const [btnDisable, setBtnDisable] = useState<boolean>(true);
  const [displayForwardIs, setDisplayForwardIs] = useState<boolean>(false);
  const [displayReverseIs, setDisplayReverseIs] = useState<boolean>(false);

  const [inputTypeName, setInputTypeName] = useState<string>('');

  const filesRef = useRef();
  const inputTypeRef = useRef();

  // useEffect(() => {
  //   // Make sure to revoke the data uris to avoid memory leaks
  //   files.forEach((file) => URL.revokeObjectURL(file.preview));
  // }, [files]);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((prevProgress) => (prevProgress >= 100 ? 10 : prevProgress + 10));
  //   }, 800);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  // const {acceptedFiles, getRootProps, getInputProps, isDragActive} =
  //   useDropzone({
  //     accept: ".fastaq",
  //     onDrop: (acceptedFiles) => {
  //       setFiles(
  //         acceptedFiles.map((file) =>
  //           Object.assign(file, {
  //             preview: URL.createObjectURL(file),
  //           })
  //         )
  //       );
  //     },
  //   });

  // const onRemove = (name) => {
  //   // console.log('ddd', name);
  //   setFiles(files.filter((file) => file.name !== name));
  //   setProgress(0);
  // };

  // const thumbs = files.map((file) => (
  //   <div
  //     style={{
  //       display: "inline-flex",
  //       borderRadius: 2,
  //       border: "1px solid #eaeaea",
  //       marginBottom: 8,
  //       marginRight: 8,
  //       width: 100,
  //       height: 200,
  //       padding: 4,
  //       boxSizing: "border-box",
  //     }}
  //     key={file.name}
  //   >
  //     <div
  //       style={{
  //         display: "flex",
  //         flexDirection: "column",
  //         minWidth: 0,
  //         overflow: "hidden",
  //         // position: 'relative',
  //       }}
  //     >
  //       {/*<img*/}
  //       {/*  src={file.preview}*/}
  //       {/*  style={img}*/}
  //       {/*  alt={file.name}*/}
  //       {/*/>*/}
  //       <p>
  //         {file.path} - {file.size} bytes
  //       </p>
  //       <IconBtn
  //         className="fileRemove"
  //         color="primary"
  //         icon="clear"
  //         iconSize={22}
  //         onClick={() => onRemove(file.name)}
  //       />
  //     </div>
  //   </div>
  // ));

  // const files = acceptedFiles.map(file => (
  //   <li key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </li>
  // ));

  const forwardFilesRemoveOne = (id) => {
    setForwardFiles(forwardFiles.filter(file => file.id !== id));
    setDisplayForwardIs(false);
  };

  const reverseFilesRemoveOne = (id) => {
    setReverseFiles(reverseFiles.filter(file => file.id !== id));
    setDisplayReverseIs(false);
  };

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      console.log(i);

      setSelectedFile(i);
      // setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const config = {
    headers: {
      'content-type': 'multipart/form-data',
      Authorization: `Bearer ${accessJwt}`,
    },
    // onUploadProgress: (data) => {
    //   console.log(
    //     `Current progress:`,
    //     Math.round((data.loaded * 100) / data.total)
    //   );
    // },
  };

  // const handleFileUpload = async () => {
  //   const formData = new FormData();
  //
  //   formData.append("file", selectedFile);
  //
  //   // console.log('file -->>', formData);
  //
  //   // const data = {
  //   //   filename: formData,
  //   // };
  //
  //   // await axios({
  //   //   method: 'post',
  //   //   url: 'http://13.125.12.94:9000/upload',
  //   //   data: formData,
  //   //   headers: {
  //   //     'Content-Type': 'multipart/form-data',
  //   //     Authorization: `Bearer ${accessJwt}`
  //   //   },
  //   //   onUploadProgress: (event) => {
  //   //     console.log(`Current progress:`, Math.round((event.loaded * 100) / event.total));
  //   //   },
  //   // })
  //   //   .then(res => console.log(res))
  //   //   .catch(error => console.log(error))
  //
  //   await axios
  //     .post("http://13.125.12.94:9000/upload", formData, config)
  //     .then((res) => console.log("fileUpload Success(^^V.) ->>", res))
  //     .catch((error) => console.log("fileUpload Error(@@!) ->>", error));
  // };

  // const handleFileUpload2 = async () => {
  //   const formData = new FormData();
  //   // formData.append("file", files[0]);
  //   files.map(file => {
  //     formData.append('multifiles', file);
  //   });
  //
  //   await axios
  //     .post('http://13.125.12.94:9000/upload', formData, config)
  //     .then((res) => console.log('fileUpload Success(^^V.) ->>', res))
  //     .catch((error) =>
  //       console.log(
  //         'fileUpload Error Status code (@@!) ->>',
  //         error.response.status,
  //       ),
  //     );
  // };

  // specify upload params and url for your files
  const getUploadParams = async ({file, meta}) => {
    console.log('UPLOAD!@#');

    const body = new FormData();

    body.append('files', file);

    return {
      url: 'http://13.125.12.94:9000/file/upload',
      body,
      headers: {
        Authorization: `Bearer ${accessJwt}`,
      },
    };
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({meta, file}, status) => {
    console.log('업로드 상태~', status, meta, file);
  };

  // receives array of files that are done uploading when submit button is clicked
  // const handleSubmit = (files, allFiles) => {
  //   console.log('submit !!!!!', files.map((f) => f.meta));
  //   allFiles.forEach((f) => f.remove());
  // };

  const handleSelectChange = (event: SelectChangeEvent) => {
    console.log(event.target.value as string);
    setInputTypeName(event.target.value as string);
  };

  // const onChangeFile = (event) => {
  //   const nwkFile = event.target.files[0];
  //   console.log('nwkFile ->', nwkFile);
  //
  //   const fileReader = new FileReader();
  //   fileReader.onload = (data) => {
  //     console.log(typeof fileReader.result);
  //     // console.log(data.target.result)
  //     console.log('newick file read =>', fileReader.result)
  //     const nwkResult = fileReader.result;
  //     setNwkText(nwkResult);
  //   }
  //   fileReader.readAsText(nwkFile);
  // }

  const {handleSubmit, control, resetField, clearErrors, formState: {errors}} = useForm();

  const onSubmit = async data => {

    console.log('sdsdfsdfsdf', data);
    // const formData = new FormData();
    // formData.append('files', selectedFile);


    // files.map(file => {
    //   formData.append('multifiles', data.files);
    // });

    // console.log('fileuploaddata', data.uploadFile);

    // const fileBlob = new Blob(files);

    const sendData = {
      // params: {'inputType': data.inputType, 'inputName': data.inputName},
      inputType: data.inputType,
      inputName: data.inputName,
      // files: files,
    };

    console.log('>>>>>>', sendData);

    // await axios
    //   .post(`${process.env.NEXT_PUBLIC_API_URL}/file/uploadParams2`, sendData, config)
    //   .then((res) => console.log('fileUpload Success(^^V.) ->>', res))
    //   .catch((error) => {
    //     if (error.response) {
    //       console.log('error1', error.response.data);
    //       console.log('error2', error.response.status);
    //       console.log('error3', error.response.headers);
    //       // if (error.response.status === 400) {
    //       //   console.log('blblblbl!@#!@#!');
    //       // }
    //     } else if (error.request) {
    //       // 요청이 이루어 졌으나 응답을 받지 못했습니다.
    //       // `error.request`는 브라우저의 XMLHttpRequest 인스턴스 또는
    //       // Node.js의 http.ClientRequest 인스턴스입니다.
    //       console.log('error4', error.request);
    //     } else {
    //       // 오류를 발생시킨 요청을 설정하는 중에 문제가 발생했습니다.
    //       console.log('error5', error.message);
    //     }
    //     console.log('error6', error.config);
    //   });
  };

  const onForwardFilesChange = (files) => {
    console.log('Files -->>', files);
    setForwardFiles(files);
    setDisplayForwardIs(true);
    // setBtnDisable(false);
  };

  const onReverseFilesChange = (files) => {
    console.log('Files -->>', files);
    setReverseFiles(files);
    setDisplayReverseIs(true);
    // setBtnDisable(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent sx={{width: 500}}>
          <Box sx={{mt: 2}}>

            <Grid container spacing={2}>
              {/*<Grid item xs={12}>*/}
              {/*  <Controller*/}
              {/*    control={control}*/}
              {/*    name='inputType'*/}
              {/*    render={({field}) => (*/}
              {/*      <>*/}
              {/*        <FormControl fullWidth required>*/}
              {/*          <InputLabel id='inputTypeLabel'>InputType</InputLabel>*/}
              {/*          <Select*/}
              {/*            {...field}*/}
              {/*            required*/}
              {/*            labelId='inputTypeLabel'*/}
              {/*            id='inputType'*/}
              {/*            value={inputTypeName}*/}
              {/*            label='InputType'*/}
              {/*            autoWidth*/}
              {/*            sx={{width: '100%'}}*/}
              {/*            onChange={(e) => setInputTypeName(e.target.value)}*/}
              {/*          >*/}
              {/*            <MenuItem value={'FASTA'}>FASTA</MenuItem>*/}
              {/*            <MenuItem value={'FASTQ-single'}>FASTQ-single</MenuItem>*/}
              {/*            <MenuItem value={'FASTQ-paired'}>FASTQ-paired</MenuItem>*/}
              {/*            <MenuItem value={'ab1'}>ab1</MenuItem>*/}
              {/*          </Select>*/}
              {/*        </FormControl>*/}
              {/*      </>*/}
              {/*    )}*/}
              {/*  />*/}
              {/*</Grid>*/}

              <Grid item xs={12} sx={{mb: 1}}>
                <Controller
                  rules={{required: true}}
                  name='inputType'
                  control={control}
                  render={({field}) => (
                    <Select
                      {...field}
                      ref={inputTypeRef}
                      styles={{menuPortal: (base) => ({...base, zIndex: 9999})}}
                      menuPortalTarget={document.querySelector('body')}
                      isClearable={true}
                      placeholder='InputType'
                      onChange={(e) => setInputTypeName(e.value)}
                      options={[
                        {value: 'FASTA', label: 'FASTA'},
                        {value: 'FASTQ-single', label: 'FASTQ-single'},
                        {value: 'FASTQ-paired', label: 'FASTQ-paired'},
                        {value: 'ab1', label: 'ab1'},
                      ]}
                    />
                  )}
                />
                {/*{errors.engineSelect && <Alert severity='error'>{errors.engineSelect.message}</Alert>}*/}
              </Grid>

              <Grid item xs={12}>
                <Controller
                  render={({field}) => (
                    <TextField
                      {...field}
                      required
                      fullWidth
                      // error={errors.email && true}
                      id='inputName'
                      label='inputName'
                      type='text'
                      name='inputName'
                      // autoComplete='email'
                      InputProps={{
                        // endAdornment: <InputAdornment position='start'>@cj.net</InputAdornment>,
                      }}
                      // onBlur={onBlurID}
                    />
                  )}
                  control={control}
                  name='inputName'
                  defaultValue=''
                />
              </Grid>

              <Grid item xs={12}>
                {/*<input type='file' multiple accept='.fastaq' {...register('uploadFile')} />*/}
                <Files
                  ref={filesRef}
                  onChange={onForwardFilesChange}
                  accepts={['.fastaq']}
                  clickable
                  multiple={false}
                  className=''
                  style={{
                    borderStyle: 'dotted',
                    borderColor: grey[500],
                    display: displayForwardIs === true ? 'none' : 'block',
                  }}
                >
                  <Typography variant='body2' sx={{textAlign: 'center', py: 1.5}}>
                    Forward file Drop! & Click!
                  </Typography>
                </Files>
                <List sx={{display: displayForwardIs === false && 'none'}}>
                  {
                    forwardFiles.map((fileItem, index) => {
                        return (
                          <ListItem
                            key={index.toString()}
                            secondaryAction={<IconButton onClick={() => forwardFilesRemoveOne(fileItem.id)}>
                              <Close />
                            </IconButton>}
                          >
                            <ListItemText primary={fileItem.name} />
                          </ListItem>
                        );
                      },
                    )
                  }
                </List>
              </Grid>

              {
                inputTypeName === 'FASTQ-paired' && <Grid item xs={12}>
                  {/*<input type='file' multiple accept='.fastaq' {...register('uploadFile')} />*/}
                  <Files
                    ref={filesRef}
                    onChange={onReverseFilesChange}
                    accepts={['.fastaq']}
                    clickable
                    multiple={false}
                    className=''
                    style={{
                      borderStyle: 'dotted',
                      borderColor: grey[500],
                      display: displayReverseIs === true ? 'none' : 'block',
                    }}
                  >
                    <Typography variant='body2' sx={{textAlign: 'center', py: 1.5}}>
                      Reverse file Drop! & Click!
                    </Typography>
                  </Files>
                  <List sx={{display: displayReverseIs === false && 'none'}}>
                    {
                      reverseFiles.map((fileItem, index) => {
                          return (
                            <ListItem
                              key={index.toString()}
                              secondaryAction={<IconButton onClick={() => reverseFilesRemoveOne(fileItem.id)}>
                                <Close />
                              </IconButton>}
                            >
                              <ListItemText primary={fileItem.name} />
                            </ListItem>
                          );
                        },
                      )
                    }
                  </List>
                </Grid>
              }
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions sx={{p: 3}}>
          <Btn type='submit' label='Upload' fullWidth={true} size='xlarge' disabled={false} />
        </DialogActions>
      </form>
    </>
  );
};


