import * as React from 'react';
import {styled} from '@mui/material/styles';
import {TextField, TextFieldProps, Theme} from '@mui/material';
import {themeJeju} from '@src/components/variables/themeJeju';
const theme = themeJeju;
const themeColor = theme.palette;
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import InputAdornment from '@mui/material/InputAdornment';
import MyIcon from '@public/fonts/icon';
import { SelectInputProps } from '@mui/material/Select/SelectInput';

  const filterOptions = createFilterOptions({
    matchFrom: 'start',
    limit:10
  });

  export const DataTableSearchStyle = styled(TextField)({
    borderadius: '2px',
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: themeColor.primary.main,
        borderWidth: 2,
      },
    }
})

  export const TextFieldStyle = styled(TextField)({
      height: '34px',
      '& .MuiOutlinedInput-root': {
        backgroundColor: 'white',
        '& fieldset': {
          borderColor: 'white',
          color: 'black',
          borderRadius: 2,
          border: '1px solid rgba(134, 142, 149, 0.5)'
        },
        '&:hover fieldset': {
          borderColor: themeColor.primary.main,
          borderWidth: 2,
          borderRadius: 2,
        },
      }
  })

  export const TextFieldStyleWithAutocomplete = styled(TextField)({
    width:'100%',
    height: '36px',
    '& .MuiOutlinedInput-root': {
      backgroundColor: 'white',
      '& fieldset': {
        borderColor: 'white',
        color: 'black',
        borderRadius: 2,
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
      },
      '&:hover fieldset': {
        borderColor: themeColor.primary.main,
        borderWidth: 2,
        borderRadius: 2,
      },
    }
  })
  
  const SearchTextFieldWithAutoCompleate = ({searchWord, onChange, autocompleteData}) => {
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={autocompleteData}
        filterOptions={filterOptions}
        value={searchWord}
        isOptionEqualToValue={(option, value)=> option}
        onChange={(e, value)=>  onChange(value)}
        renderInput={(params) => <TextFieldStyleWithAutocomplete 
          {...params}
        
          placeholder="Search"
          value={searchWord}
          onChange={(e)=> onChange(e.target.value)}
          variant="outlined"
          size="medium"
      />}
      />
    )
  }

  export const SearchTextField = (props) => {
    const {searchWord, onChange } = props
    
    return (
      <TextFieldStyle 
        {...props}
        onChange={onChange}
        placeholder="Search"
        value={searchWord}
        variant="outlined"
        InputProps={{
          style:{
            width: '238px',
            height: '34px'
          },
          endAdornment: (
            <InputAdornment position="end">
              <MyIcon icon={'search'} size={20} />
            </InputAdornment>
          ),
        }}
      />
    )
  }

  export const DatatableSearchTextField = (props) => {
    const {searchWord, onChange } = props
    
    return (
      <DataTableSearchStyle 
        {...props}
        onChange={onChange}
        placeholder="Search"
        value={searchWord}
        InputProps={{
          style:{
              height:'38px', 
              width: '238px', 
              padding:'8px 18px', 
              borderRadius: '2px', 
              marginLeft:'19px',
              backgroundColor:'white',
            },
          endAdornment: (
            <InputAdornment position="end">
              <MyIcon icon={'search'} size={20} />
            </InputAdornment>
          ),
        }}
      />
    )
  }

export default SearchTextFieldWithAutoCompleate

