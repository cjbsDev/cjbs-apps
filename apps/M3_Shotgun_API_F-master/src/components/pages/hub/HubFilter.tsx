import React from 'react';
import {Box, ToggleButton, ToggleButtonGroup, Typography} from '@mui/material';
import {useHubStyles} from '@styles/hub/hubStyle';
import {styled} from '@mui/material/styles';
import {grey, red} from '@mui/material/colors';

const FilterTitle = styled(Typography)({
  mb: 1,
});
const MyLabelBadge = styled(Box)({
  backgroundColor: grey[800],
  color: 'white',
  fontWeight: 800,
  fontSize: 12,
  lineHeight: 1,
  padding: 5,
  paddingTop: 3,
  paddingBottom: 1,
  borderRadius: 3,
  textAlign: 'center',
  verticalAlign: 'center',
});

const ExtndBadge = styled(MyLabelBadge)({
  backgroundColor: red[300],
});

const HubFilter = (props) => {
  const {nData, handleToggleFilterChange} = props;
  const hubCss = useHubStyles();

  return (
    <>
      {/*<Typography variant={'subtitle2'} sx={{mb: 1}}>Filter</Typography>*/}
      <FilterTitle variant={'subtitle1'}>Type</FilterTitle>
      <ToggleButtonGroup
        color='primary'
        value={nData}
        exclusive
        fullWidth={true}
        onChange={handleToggleFilterChange}
        size={'small'}
        orientation={'vertical'}
      >
        <ToggleButton value='FASTQ'>FASTQ</ToggleButton>
        <ToggleButton value='Paired FASTQ'>Paired_FASTQ</ToggleButton>
        <ToggleButton value='My'>
          <MyLabelBadge>MY</MyLabelBadge>
        </ToggleButton>
      </ToggleButtonGroup>


    </>
  );
};

export default HubFilter;
