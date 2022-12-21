import React from 'react';
import {Box, Grid, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {themeJeju} from '@components/variables/themeJeju';
import {grey} from '@mui/material/colors';
import DLBox from '@components/organisms/dlBox/DLBox';
import {DateInfoProps} from '@src/interface/dateInfoProps';
import StudyDateModifyInfo from '@components/organisms/StudyDateModifyInfo';

interface SubjectInfoProps extends DateInfoProps {
  subjectInfoValue: {
    birthday: string,
    comorbidDisease: string,
    diagnosis: string,
    ethnicGroup: string,
    nationCode: string,
    sex: string,
    species: string,
    subjectCode: string,
  },
}

const SubjectInfoView = (props) => {
  const {subjectInfoValue, dateInfoValue}: SubjectInfoProps = props;
  const {
    createDate,
    createUser,
    updateDate,
    updateUser,
  } = dateInfoValue;
  const {
    birthday,
    comorbidDisease,
    diagnosis,
    ethnicGroup,
    nationCode,
    sex,
    species,
    subjectCode,
  } = subjectInfoValue;

  // const keys = Object.keys(sampleInfoData);
  // keys.map((item, index) => console.log(item));

  return (
    <>
      <Grid container sx={{mt: 2}}>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Subject Code'} />
            <DLBox.DD valueCode={subjectCode} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Type/Species Code'} />
            <DLBox.DD valueCode={species} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Nation'} />
            <DLBox.DD valueCode={nationCode} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Ethnic Group'} />
            <DLBox.DD valueCode={ethnicGroup} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Birthday'} />
            <DLBox.DD valueCode={birthday} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Sex'} />
            <DLBox.DD valueCode={sex} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Diagnosis'} />
            <DLBox.DD valueCode={diagnosis} />
          </DLBox>
        </Grid>
        <Grid item xs={4}>
          <DLBox>
            <DLBox.DT titleCode={'Comorbid Disease'} />
            <DLBox.DD valueCode={comorbidDisease} />
          </DLBox>
        </Grid>
      </Grid>

      <StudyDateModifyInfo
        createDate={createDate}
        updateDate={updateDate}
        createUser={createUser}
        updateUser={updateUser}
      />
    </>
  );
};

export default SubjectInfoView;
