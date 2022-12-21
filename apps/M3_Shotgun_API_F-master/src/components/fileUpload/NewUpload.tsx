import React, {ChangeEvent, useRef, useState} from 'react';
import {FormContainer, TextFieldElement, MultiSelectElement, SelectElement} from 'react-hook-form-mui';
import * as yup from 'yup';
import {useForm, useWatch} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import axios from 'axios';
import {getCookie} from 'cookies-next';
import {useDropzone} from 'react-dropzone';
import Select from 'react-select';
import {Box, Button, TextField, Grid, Typography} from '@mui/material';
import {Btn} from '@src/components/atoms/button';

const schema = yup.object().shape({
  files: yup.mixed().test('required', 'Please select a file!', value => {
    return value && value.length;
  }),
});

const accessJwt = getCookie('emHYMSSW');

const NewUpload = () => {
  const {register, watch, control, formState: {errors}} = useForm({
    resolver: yupResolver(schema),
  });
  const [inputNameValue, setInputNameValue] = useState<string>();
  const [inputTypeValue, setInputTypeValue] = useState<string>();
  const [forwardFileData, setForwardFileData] = useState<object[]>([]);
  const [reverseFileData, setReverseFileData] = useState<object[]>([]);
  // const {open, getRootProps, getInputProps, acceptedFiles} = useDropzone({
  //   noClick: true,
  //   noKeyboard: true,
  //   onDrop: files => console.log(files),
  // });
  const config = {
    headers: {
      'content-type': 'multipart/form-data;',
      Authorization: `Bearer ${accessJwt}`,
    },
    // onUploadProgress: (data) => {
    //   console.log(
    //     `Current progress:`,
    //     Math.round((data.loaded * 100) / data.total)
    //   );
    // },
  };

  const rdHandleSubmit = async () => {
    const formData = new FormData();

    const selectedFile = acceptedFiles[0];
    console.log('sdsee^&*%%', selectedFile);

    formData.append('files', selectedFile);

    const sendData = {
      params: {inputType: inputTypeValue, inputName: inputNameValue},
      files: selectedFile,
    };

    console.log('sendData ==>>>', sendData);

    // await axios
    //   .post(`${process.env.NEXT_PUBLIC_API_URL}/file/uploadParams`, sendData, config)
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

  const onSubmit = (data) => {
    // reverseFileData
    // forwardFileData

    const formData = new FormData();
    // formData.append('files', acceptedFiles[0]);

    const sendData = {
      params: {inputType: data.inputType, inputName: data.inputName},
      files: forwardFileData,
    };

    console.log('@#@#@#@#', sendData);
  };

  const ForwardFillAdd = () => {
    const {open, getRootProps, getInputProps, acceptedFiles} = useDropzone({
      noClick: true,
      noKeyboard: true,
      onDrop: files => {
        console.log('Forwar File ==>>>>', files);
        setForwardFileData(files);
      },
    });

    const rowRemove = (name) => {
      // setForwardFiles(acceptedFiles.filter(file => file.id !== id));
      // acceptedFiles.filter(file => file.name !== name);
    };

    const forwardFiles = acceptedFiles.map(file => (
      <li key={file.path} style={{margin: 0, padding: 0}}>
        {file.path} - {file.size} bytes
      </li>
    ));

    return (
      <Box {...getRootProps()} sx={{mb: 3}}>
        <input {...getInputProps()} />
        <Grid container>
          <Grid item xs={6}>
            {
              forwardFiles.length !== 0 ?
                <ul style={{margin: 0, padding: 0, listStyle: 'none'}}>
                  {forwardFiles}
                </ul> : <Typography variant={'body2'}>Forward file select!</Typography>
            }
          </Grid>
          <Grid item xs={6} sx={{}}>
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
              <Btn
                label='Add'
                onClick={open}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );

  };

  const ReverseFileAdd = () => {
    const {open, getRootProps, getInputProps, acceptedFiles} = useDropzone({
      noClick: true,
      noKeyboard: true,
      onDrop: files => {
        console.log('Reverse File =>>>>', files);
        setReverseFileData(files);
      },
    });

    const reverseFiles = acceptedFiles.map(file => (
      <li key={file.path}>
        {file.path} - {file.size} bytes
      </li>
    ));

    return (
      <Box {...getRootProps()} sx={{mb: 5}}>
        <input {...getInputProps({})} />
        {/*<p>Drag n drop, Click</p>*/}
        <Grid container>
          <Grid item xs={6}>
            {
              reverseFiles.length !== 0 ?
                <ul style={{margin: 0, padding: 0, listStyle: 'none'}}>
                  {reverseFiles}
                </ul> : <Typography variant={'body2'}>Reverse file select!</Typography>
            }
          </Grid>
          <Grid item xs={6}>
            <Box sx={{display: 'flex', justifyContent: 'flex-end'}}>
              <Btn
                label='Add'
                onClick={open}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <Box sx={{backgroundColor: 'white'}}>
      <Box sx={{mb: 10}}>
        <FormContainer
          onSuccess={onSubmit}
        >
          <Grid container>
            <Grid item xs={12} sx={{mb: 5}}>
              <SelectElement
                fullWidth
                required
                label='InputType'
                name='inputType'
                onChange={(e) => setInputTypeValue(e)}
                options={[
                  {
                    id: 'FASTA',
                    title: 'FASTA',
                  },
                  {
                    id: 'FASTQ-single',
                    title: 'FASTQ-single',
                  },
                  {
                    id: 'FASTQ-paired',
                    title: 'FASTQ-paired',
                  },
                  {
                    id: 'ab1',
                    title: 'ab1',
                  },
                ]}
              />
            </Grid>
            <Grid item xs={12} sx={{mb: 5}}>
              <TextFieldElement name='inputName' label='InputName' fullWidth required />
            </Grid>
            <Grid item xs={12}>
              <ForwardFillAdd />
              {
                inputTypeValue === 'FASTQ-paired' && <ReverseFileAdd />
              }
            </Grid>
            <Grid item xs={12}>

            </Grid>
          </Grid>

          <Box>
            <Btn
              fullWidth={true}
              type={'submit'}
              size={'xlarge'}
              label='Test Submit'
            />
          </Box>
        </FormContainer>
      </Box>
    </Box>
  );
};

export default NewUpload;
