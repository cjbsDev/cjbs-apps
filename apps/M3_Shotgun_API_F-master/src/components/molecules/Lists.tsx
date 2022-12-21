import React, {ChangeEvent, createContext} from 'react';
import {Box, FormLabel, Typography, RadioGroup, Radio, Chip, FormControlLabel, Button, Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
import router from 'next/router';
import {ChevronRight} from '@mui/icons-material';
import {themeJeju} from '@components/variables/themeJeju';
import CustomLoader from '@components/comp/CustomLoader';
import {AccBox} from '@styles/styledComp';

const ListContext = createContext(undefined);

const RadioGroupHeader = styled(Typography)({
  color: 'black',
  fontWeight: '600',
});
const RadioGroupWrap = styled(RadioGroup)({
  marginBottom: 24,
});

const FormControlLabelRadio = styled(FormControlLabel)({
  height: 24,
  marginBottom: 5,
  // color: 'white',
});

const WrapFormControlLabel = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

const LabelChip = styled(Chip)({
  '.MuiChip-label': {
    paddingRight: 10,
  },
});

const Lists = ({children, ...restProps}) => {
  return <Box {...restProps}>{children}</Box>;
};

interface TitleProps {
  titleName: string;
  path?: string;
}

const Title = ({titleName, path}: TitleProps) => {
  return (
    <Button
      variant={'outlined'}
      fullWidth
      sx={{mb: 2, borderColor: themeJeju.palette.grey['700']}}
      onClick={() => router.push(path)}
      endIcon={<ChevronRight sx={{color: 'white'}} />}
    >
      <Grid container>
        <Grid item>
          <Typography variant={'subtitle1'} sx={{color: 'white'}}>
            {titleName}
          </Typography>
        </Grid>
        {/*<Grid item></Grid>*/}
      </Grid>
    </Button>
  );
};

const List = ({children}) => {
  // const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
  //   console.log('Selected Value =>', event.target.value);
  // };
  return <Grid container>{children}</Grid>;
};

interface ItemProps {
  labelName: string;
  valueCount: number;
}

const Item = ({labelName, valueCount}: ItemProps) => {
  return (
    <Grid item xs={12} sx={{mb: 0.6}}>
      <Grid container>
        <Grid item>
          <Typography variant={'body2'} sx={{ml: 1, color: 'white'}}>
            {labelName}({valueCount})
          </Typography>
        </Grid>
        {/*<Grid item xs={6} sx={{display: 'flex', justifyContent: 'flex-end'}}>*/}
        {/*  <LabelChip*/}
        {/*    label={valueCount}*/}
        {/*    size={'small'}*/}
        {/*    sx={{*/}
        {/*      backgroundColor: themeJeju.palette.grey['100'],*/}
        {/*      color:*/}
        {/*        labelName === 'Error'*/}
        {/*          ? themeJeju.palette.error.main*/}
        {/*          : labelName === 'Complete'*/}
        {/*          ? themeJeju.palette.success.main*/}
        {/*          : labelName === 'Analyzing'*/}
        {/*          ? themeJeju.palette.warning.light*/}
        {/*          : themeJeju.palette.grey['900'],*/}
        {/*      fontWeight: '600',*/}
        {/*    }}*/}
        {/*  />*/}
        {/*</Grid>*/}
      </Grid>
    </Grid>
    // <WrapFormControlLabel>
    //   <FormControlLabelRadio
    //     value={value}
    //     control={<Radio />}
    //     label={labelName}
    //     disabled={isDisabled}
    //   />
    //   {valueCount !== undefined && <Chip label={valueCount} size={'small'} disabled={isDisabled} />}
    // </WrapFormControlLabel>
  );
};

const Loading = () => {
  return <CustomLoader />;
};

Lists.Title = Title;
Lists.List = List;
Lists.Item = Item;
Lists.Loading = Loading;

export default Lists;
