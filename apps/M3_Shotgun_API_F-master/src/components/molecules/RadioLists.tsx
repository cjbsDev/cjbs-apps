import React, {ChangeEvent, createContext} from 'react';
import {Box, FormLabel, Typography, RadioGroup, Radio, Chip, FormControlLabel} from '@mui/material';
import {styled} from '@mui/material/styles';

const RadioListContext = createContext(undefined);

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

const RadioLists = ({children, ...restProps}) => {
  return (
    <Box {...restProps}>
      {children}
    </Box>
  );
};

const Title = ({titleName}) => {
  return (
    <FormLabel id={`radio-buttons-group-${titleName}-label`} sx={{mb: 1}}>
      <RadioGroupHeader variant={'body1'}>{titleName}</RadioGroupHeader>
    </FormLabel>
  );
};

const List = ({children}) => {
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log('Selected Value =>', event.target.value);
    // handleChange(event.target.value);
  };
  return (
    <RadioGroupWrap
      aria-labelledby='radio-buttons-group-status-label'
      // defaultValue='female'
      name='radio-status-group'
      onChange={handleRadioChange}
    >
      {children}
    </RadioGroupWrap>
  );
};

interface ItemProps {
  labelName: string;
  value: string;
  isDisabled?: boolean;
  valueCount?: number;
}

const Item = ({isDisabled, labelName, value, valueCount}: ItemProps) => {
  return (
    <WrapFormControlLabel>
      <FormControlLabelRadio
        value={value}
        control={<Radio />}
        label={labelName}
        disabled={isDisabled}
      />
      {valueCount !== undefined && <Chip label={valueCount} size={'small'} disabled={isDisabled} />}
    </WrapFormControlLabel>
  );
};

RadioLists.Title = Title;
RadioLists.List = List;
RadioLists.Item = Item;

export default RadioLists;
