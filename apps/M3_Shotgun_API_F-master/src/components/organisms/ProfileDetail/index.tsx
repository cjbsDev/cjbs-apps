import React, {useState, useCallback} from 'react';
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
  InputLabel,
  TextField,
} from '@mui/material';
import {IconBtn} from '@components/atoms/button/IconBtn';
import {ModeEditOutlined} from '@mui/icons-material';
import {themeJeju} from '@components/variables/themeJeju';
import {PUT} from '@hooks/api/useAPI';
import {styled} from '@mui/material/styles';
import {useDebounce, useDebouncedCallback} from 'use-debounce';

const ProfileDetail = (props) => {
  const {editState, onClose, open} = props;
  console.log('SamplenameLength ==>', editState.profileName.length);
  const [state, setState] = useState({
    prjctName: editState.projectName,
    // prfName: {
    //   name: editState.profileName,
    //   count: editState.profileName.length,
    // },
    prfName: editState.profileName,
    profileId: editState.profileId,
    type: editState.type,
    status: editState.status,
    date: editState.date,
    dbVersion: editState.dbVersion,
    engineVersion: editState.engineVersion,
    comment: editState.comment,
  });
  const [detect, setDetect] = useState(false);
  const [detectCount, setDetectCount] = useState(editState.profileName.length);
  const [characShow, setCharacShow] = useState(false);

  const debounced = useDebouncedCallback(
    (name, value) => {
      // name === 'prfName' && setDetectCount(value.length);

      setState({
        ...state,
        [name]: value,
      });

      // name === 'prfName'
      //   ? setState({
      //       ...state,
      //       [name]: {
      //         name: value,
      //         count: value.length,
      //       },
      //       // [name]: value.length > 40 ? value.slice(0, 40) : value,
      //     })
      //   : setState({
      //       ...state,
      //       [name]: value,
      //     });
    },
    // delay in ms
    100,
  );

  const onSubmit = (event) => {
    // console.log('New Profile Name =>>', data);
    event.preventDefault();
    const bodyData = {
      profileId: editState.profileId,
      project: state.prjctName === '' ? undefined : state.prjctName,
      profileName: state.prfName === '' ? undefined : state.prfName,
      comment: state.comment === '' ? undefined : state.comment,
      // project: data.prjctName,
      // profileName: data.prfName,
      // comment: data.comment,
    };

    console.log('bodyData ==>', bodyData);

    PUT('/shotgun/profile', bodyData).then((res) => {
      console.log('Profile Detail Modify =>>', res.data);
    });

    modalClose();
  };

  const modalClose = () => {
    onClose();
    setState({
      ...state,
      prjctName: '',
      prfName: '',
      // prfName: {
      //   name: '',
      //   count: editState.profileName.length,
      // },
      profileId: '',
      type: '',
      status: '',
      date: '',
      dbVersion: '',
      engineVersion: '',
      comment: '',
    });
    setDetectCount(editState.profileName.length);
    setDetect(false);
    setCharacShow(false);
  };

  const handleChange = (e) => {
    // setDetect(true);
    debounced(e.target.name, e.target.value);

    // console.log('dsfsdfsdf', e.name);
    //
    // console.log('dsfsdfsdf', e.target.value.length);

    if (e.target.name === 'prfName') {
      console.log('prfName!');
      setDetect(true);
      setDetectCount(e.target.value.length);
    }

    // setState({
    //   ...state,
    //   prfName: {
    //     ...state.prfName,
    //     count: e.target.value.length,
    //   },
    // });
  };

  const enterBlock = (e) => {
    if (e.code === 'Enter') {
      e.preventDefault();
    }
  };

  const showCharacCount = () => {
    console.log('Focus!');
    setCharacShow(true);
  };

  return (
    <Dialog onClose={modalClose} open={open} fullWidth maxWidth={'sm'}>
      <CustomDialogTitle>
        Profile Detail
        <CloseDialog icon='x' iconSize={24} color='secondary' onClick={modalClose} />
      </CustomDialogTitle>
      <DialogContent sx={{p: 5}}>
        {/*<Box component='form' noValidate onSubmit={handleSubmit(onSubmit)} id={'editForm'}>*/}
        <Box component='form' noValidate onSubmit={onSubmit} id={'editForm'}>
          <Box>
            <Grid container spacing={2}>
              <Grid item xs={12} sx={{}}>
                <InputLabel>Study_id</InputLabel>
                <TextField
                  margin='dense'
                  name='prjctName'
                  id='prjctName'
                  type='text'
                  fullWidth
                  // value={state.prjctName}
                  onKeyPress={enterBlock}
                  onChange={handleChange}
                  defaultValue={editState.projectName}
                  // placeholder={editState.projectName}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton size='small'>
                          <ModeEditOutlined fontSize={'small'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel
                  error={state.prfName.length > 40 ? true : false}
                  sx={{display: 'flex', justifyContent: 'space-between'}}
                >
                  <Box>Sample_name</Box>
                  {characShow && (
                    <Box sx={{fontSize: 12}}>{!detect ? editState.profileName.length : detectCount}/40 characters</Box>
                  )}
                </InputLabel>
                <TextField
                  margin='dense'
                  name='prfName'
                  id='prfName'
                  // label={'Sample Name'}
                  type='text'
                  fullWidth
                  // value={state.prfName}
                  onKeyPress={enterBlock}
                  onChange={handleChange}
                  onFocus={showCharacCount}
                  defaultValue={editState.profileName}
                  // inputProps={{
                  //   maxLength: 40,
                  // }}
                  error={state.prfName.length > 40 ? true : false}
                  // helperText={
                  //   state.prfName.length > 40
                  //     ? 'Check you do not exceed 40 characters in the ‘sample_name’ values'
                  //     : null
                  // }
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton size='small'>
                          <ModeEditOutlined fontSize={'small'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
              <Grid item xs={6} sx={{}}>
                <InputLabel>ProfileId</InputLabel>
                <TextField
                  margin='dense'
                  id='prfId'
                  defaultValue={editState.profileId}
                  type='text'
                  fullWidth
                  disabled={true}
                  sx={{backgroundColor: themeJeju.palette.grey['100']}}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Type</InputLabel>
                <TextField
                  margin='dense'
                  id='type'
                  defaultValue={editState.type}
                  type='text'
                  fullWidth
                  disabled={true}
                  sx={{backgroundColor: themeJeju.palette.grey['100']}}
                />
              </Grid>

              <Grid item xs={6} sx={{}}>
                <InputLabel>Status</InputLabel>
                <TextField
                  margin='dense'
                  id='created'
                  defaultValue={editState.status}
                  type='text'
                  fullWidth
                  disabled={true}
                  sx={{backgroundColor: themeJeju.palette.grey['100']}}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Created</InputLabel>
                <TextField
                  margin='dense'
                  id='created'
                  defaultValue={editState.date}
                  type='text'
                  fullWidth
                  disabled={true}
                  sx={{backgroundColor: themeJeju.palette.grey['100']}}
                />
              </Grid>

              <Grid item xs={6} sx={{}}>
                <InputLabel>DB Ver</InputLabel>
                <TextField
                  margin='dense'
                  id='engnVer'
                  defaultValue={editState.dbVersion}
                  type='text'
                  fullWidth
                  disabled={true}
                  sx={{backgroundColor: themeJeju.palette.grey['100']}}
                />
              </Grid>
              <Grid item xs={6}>
                <InputLabel>Engine Ver</InputLabel>
                <TextField
                  margin='dense'
                  id='engnVer'
                  // value={editState.engineVersion}
                  defaultValue={editState.engineVersion}
                  type='text'
                  fullWidth
                  disabled={true}
                  sx={{backgroundColor: themeJeju.palette.grey['100']}}
                />
              </Grid>
              <Grid item xs={12}>
                <InputLabel>Comment</InputLabel>
                <TextField
                  margin='dense'
                  name='comment'
                  id='comment'
                  multiline
                  rows={4}
                  fullWidth
                  // value={state.comment}
                  onChange={handleChange}
                  defaultValue={editState.comment}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position='end'>
                        <IconButton size='small'>
                          <ModeEditOutlined fontSize={'small'} />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions sx={{p: 5, pt: 0}}>
        {/*<Button size={'large'} variant={'outlined'} color={'secondary'} fullWidth onClick={modalClose}>*/}
        {/*  Close*/}
        {/*</Button>*/}
        <Button
          disabled={state.prfName.length > 40 ? true : false}
          size={'large'}
          type={'submit'}
          fullWidth
          variant={'contained'}
          form={'editForm'}
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProfileDetail;

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
});

const CloseDialog = styled(IconBtn)({
  position: 'absolute',
  right: 10,
  top: 10,
});
