import React, {useCallback, useMemo, useRef, useState, useEffect} from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Box,
  Alert,
  Select,
  Typography, InputLabel, MenuItem, FormControl, Button,
} from '@mui/material';
// import Select from 'react-select';
import {Close} from '@mui/icons-material';
import {Btn} from '@src/components/atoms/button';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {useSetRecoilState} from 'recoil';
import {engnModalAtom, refreshStateAtom} from '@src/recoil/atoms/modalAtom';
import {IconBtn} from '@src/components/atoms/button/IconBtn';
import axios from 'axios';
import {getCookie} from 'cookies-next';
import {useRouter} from 'next/router';
import {POST} from '@src/hooks/api/useAPI';

interface EngnSelectProps {
  engineSelect: {
    message: string;
  };
  dbListSelect: {
    message: string;
  };
}

const accessJwt = getCookie('emHYMSSW');

const scheme = yup.object({
  // engineSelect: yup.string().required('Engine을 선택해 주세요.').nullable(),
  dbListSelect: yup.string().required('DB List를 선택해 주세요.').nullable(),
}).required();

const EngnDialog = (props) => {
  const router = useRouter();
  const {open, engineListData, fileUuid, fileTypeValue, fileTypeUuid} = props;
  const {handleSubmit, control, resetField, clearErrors, formState: {errors}} = useForm<EngnSelectProps>({
    resolver: yupResolver(scheme),
  });
  const engnSelectRef = useRef();
  const dbListSelectRef = useRef();
  const closeBtnRef = useRef();
  const [engnState, setEngnState] = useState();
  const [inputTypeValue, setInputTypeValue] = useState<string>();
  const setModalOpenIs = useSetRecoilState(engnModalAtom);
  const setRefreshState = useSetRecoilState(refreshStateAtom);
  const [refreshChckValue, setRefreshChckValue] = useState(false);

  // useEffect(() => {
  //   console.log('engineListData', engineListData);
  // }, []);
  // useEffect(() => {
  //   console.log('refChck', refreshChckValue);
  // }, [refreshChckValue]);

  // console.log('fileTypeValue', fileTypeValue);

  const selectAllRest = () => {
    clearErrors(['engineSelect', 'dbListSelect']);
    resetField('engineSelect');
    resetField('dbListSelect');
    // setRefreshChckValue(false);
  };

  const handleClose = () => {
    console.log('EngnModal Close!');
    selectAllRest();
    setModalOpenIs(false);
  };

  const onSubmit = async (data) => {
    console.log('data', data, fileUuid, fileTypeValue);

    const sendData = {
      inputFileUuid: fileUuid,
      // enginePresetUuid: data.engineSelect,
      enginePresetUuid: fileTypeValue === 'Paired FASTQ' ? engineListData[1].enginePresetUuid : engineListData[0].enginePresetUuid,
      referenceDatabaseUuid: data.dbListSelect,
    };

    console.log(sendData);
    await POST('/hub/engine/run', sendData)
      .then((res) => {
        console.log('res', res);
        setRefreshState(true);
        handleClose();
      })
      .catch((error) => {
        if (error.response) {
          console.log('error1', error.response.data);
          console.log('error2', error.response.status);
          console.log('error3', error.response.headers);

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
        setRefreshState(false);
      });
  };

  return (
    <Dialog open={open}>
      <DialogTitle sx={{p: 5, pb: 2}}>
        <Typography variant='subtitle1'>Engine Request</Typography>
        <IconBtn
          // ref={closeBtnRef}
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
      {
        fileTypeValue !== 'Paired FASTQ' && fileTypeValue !== 'FASTQ'
          ?
          <DialogContent sx={{
            width: 500,
            height: 120,
            // p: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Typography variant={'body1'} sx={{}}>{fileTypeValue}는 아직 지원하지 않습니다.</Typography>
          </DialogContent>
          :
          <DialogContent sx={{width: 500, p: 5, pb: 0}}>
            <Box component={'form'} id={'engineRequestForm'} noValidate onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                {/*<Grid item xs={12} sx={{mb: 1, mt: 1}}>*/}
                {/*  <Controller*/}
                {/*    rules={{required: true}}*/}
                {/*    name='engineSelect'*/}
                {/*    control={control}*/}
                {/*    render={({field}) => (*/}
                {/*      <FormControl fullWidth>*/}
                {/*        <InputLabel id='EngineSelectLabelId'>Engine</InputLabel>*/}
                {/*        <Select*/}
                {/*          {...field}*/}
                {/*          error={errors.engineSelect && true}*/}
                {/*          fullWidth*/}
                {/*          required*/}
                {/*          id={'engineSelect'}*/}
                {/*          labelId='EngineSelectLabelId'*/}
                {/*          label={'Engine'}*/}
                {/*        >*/}
                {/*          {*/}
                {/*            engineListData.map((item, index) => {*/}
                {/*              console.log('676767', item.enginePresetUuid);*/}
                {/*              return <MenuItem key={item.engineUuid + index.toString()}*/}
                {/*                               value={item.enginePresetUuid}>{item.enginePresetName}</MenuItem>;*/}
                {/*            })*/}
                {/*          }*/}
                {/*        </Select>*/}
                {/*      </FormControl>*/}
                {/*    )}*/}
                {/*  />*/}
                {/*  {errors.engineSelect && <Alert severity='error'>{errors.engineSelect.message}</Alert>}*/}
                {/*</Grid>*/}

                <Grid item xs={12} sx={{mt: 2}}>
                  <Typography variant={'body1'} sx={{mb: 1}}>Engine</Typography>
                  {
                    engineListData.map((item, index) => {
                      return (
                        <Typography
                          variant={'body1'}
                          key={item.engineUuid + index.toString()}
                          sx={{
                            display: item.inputFileTypeUuid === fileTypeUuid ? 'block' : 'none',
                            mb: 1,
                            ml: 1,
                          }}
                        >
                          {item.enginePresetName}
                          {/*{item.enginePresetUuid}*/}
                        </Typography>
                      );
                    })
                  }
                </Grid>

                <Grid item xs={12}>
                  <Controller
                    rules={{required: true}}
                    name='dbListSelect'
                    control={control}
                    render={({field}) => (
                      <FormControl fullWidth disabled={false}>
                        <InputLabel id='DBListLabelId'>DB List</InputLabel>
                        <Select
                          {...field}
                          error={errors.dbListSelect && true}
                          fullWidth
                          required
                          id={'dbListSelect'}
                          labelId='DBListLabelId'
                          label={'DB List'}
                          defaultValue={''}
                          // value={inputTypeValue}
                          // onChange={(e) => setInputTypeValue(e.target.value)}
                        >
                          <MenuItem value={'95219971-d7eb-11ec-a796-0ac1cfec5fbe'}>puid_pangenome_2022</MenuItem>
                        </Select>
                      </FormControl>
                    )}
                  />
                  {errors.dbListSelect && <Alert severity='error'>{errors.dbListSelect.message}</Alert>}
                </Grid>
              </Grid>
            </Box>
          </DialogContent>
      }
      <DialogActions sx={{p: 5}}>
        <Button
          type={'submit'}
          fullWidth
          size={'xlarge'}
          variant={'contained'}
          disabled={fileTypeValue === 'FASTA' ? true : false}
          form={'engineRequestForm'}
        >
          Run
        </Button>
        {/*<Btn form={'engineRequestForm'} type='submit' size='xlarge' label='Run' fullWidth={true} />*/}
      </DialogActions>
    </Dialog>

  );
};

export default EngnDialog;
