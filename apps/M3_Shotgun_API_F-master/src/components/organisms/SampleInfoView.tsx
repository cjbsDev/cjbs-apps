import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {themeJeju} from '@components/variables/themeJeju';
import {grey} from '@mui/material/colors';
import DLBox from '@components/organisms/dlBox/DLBox';
import {DateInfoProps} from '@src/interface/dateInfoProps';
import StudyDateModifyInfo from '@components/organisms/StudyDateModifyInfo';

interface SampleInfoProps extends DateInfoProps {
  sampleInfoValue: {
    sampleCode: string,
    visitCode: string,
    dateCode: string,
    sampleType: string,
    samplingDate: string,
  },
  sampleNoteInfoValue: {
    note: string
  };
}

const NewDT = styled(Typography)({
  color: themeJeju.palette.text.secondary,
});

const NoteTitle = styled(Typography)({
  // color: grey[600],
});

const NoteBox = styled(Typography)({
  minHeight: 102,
  border: `1px solid ${themeJeju.palette.secondary.light}`,
  paddingLeft: 16,
  paddingRight: 16,
  paddingTop: 8,
  paddingBottom: 8,
  fontWeight: '600',
});

const SampleInfoView = (props) => {
  const {sampleInfoValue, dateInfoValue, sampleNoteInfoValue}: SampleInfoProps = props;
  const {
    dateCode,
    sampleCode,
    sampleType,
    samplingDate,
    visitCode,
  } = sampleInfoValue;
  const {
    createDate,
    createUser,
    updateDate,
    updateUser,
  } = dateInfoValue;
  const {note} = sampleNoteInfoValue;

  // const keys = Object.keys(sampleInfoData);
  // keys.map((item, index) => console.log(item));

  return (
    <>
      <Grid container sx={{mt: 2}}>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Sample Code'} />
            <DLBox.DD valueCode={sampleCode} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Visit Code'} />
            <DLBox.DD valueCode={visitCode} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Date Code'} />
            <DLBox.DD valueCode={dateCode} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Sample Type'} />
            <DLBox.DD valueCode={sampleType} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Sampling Date'} />
            <DLBox.DD valueCode={samplingDate} />
          </DLBox>
        </Grid>
      </Grid>

      <Box sx={{mb: 4}}>
        <NoteTitle variant={'body2'} color={'secondary'}>Note</NoteTitle>
        <NoteBox variant={'body1'}>
          {note === null ? '-' : note}
        </NoteBox>
      </Box>

      <StudyDateModifyInfo
        createDate={createDate}
        updateDate={updateDate}
        createUser={createUser}
        updateUser={updateUser}
      />
    </>
  );
};

export default SampleInfoView;
