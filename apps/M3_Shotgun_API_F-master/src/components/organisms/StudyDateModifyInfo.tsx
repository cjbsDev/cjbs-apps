import React from 'react';
import {Box, Grid} from '@mui/material';
import DLBox from '@components/organisms/dlBox/DLBox';
import {styled} from '@mui/material/styles';
import {themeJeju} from '@components/variables/themeJeju';
import {grey} from '@mui/material/colors';


const StudyDateUserInfo = styled(Box)({
  padding: 30,
  paddingTop: 20,
  paddingBottom: 20,
  backgroundColor: themeJeju.palette.grey['100'],
  'dl': {
    margin: 0,
    padding: 0,
    display: 'flex',
    fontSize: 14,
    'dt': {
      margin: 0,
      padding: 0,
      color: grey[700],
      width: 80,
    },
    'dd': {
      margin: 0,
      padding: 0,
    },
  },
});

const StudyDateModifyInfo = ({createDate, updateDate, createUser, updateUser}) => {
  return (
    <StudyDateUserInfo>
      <Grid container>
        <Grid item xs={6}>
          <DLBox>
            <DLBox.DTSmall titleCode={'Create Date'} />
            <DLBox.DDSmall valueCode={createDate} />
          </DLBox>
        </Grid>
        <Grid item xs={6}>
          <DLBox>
            <DLBox.DTSmall titleCode={'Update Date'} />
            <DLBox.DDSmall valueCode={updateDate} />
          </DLBox>
        </Grid>
        <Grid item xs={6}>
          <DLBox>
            <DLBox.DTSmall titleCode={'Create User'} />
            <DLBox.DDSmall valueCode={createUser} />
          </DLBox>
        </Grid>
        <Grid item xs={6}>
          <DLBox>
            <DLBox.DTSmall titleCode={'Update User'} />
            <DLBox.DDSmall valueCode={updateUser} />
          </DLBox>
        </Grid>
      </Grid>
    </StudyDateUserInfo>
  );
};

export default StudyDateModifyInfo;
