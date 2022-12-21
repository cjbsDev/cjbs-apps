import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';

import PropTypes from 'prop-types';
import { Box } from '@mui/material';

SelectAutoWidth.propTypes = {
  data:PropTypes.array,
  handleChange:PropTypes.func,
  placeholder:PropTypes.string,
  sx:PropTypes.object,
  defaultValue:PropTypes.string,
  isError:PropTypes.bool,
  helperText: PropTypes.any
};

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP
    },
  },
};

export default function SelectAutoWidth({value, data, handleChange, placeholder, sx, defaultValue, isError, helperText}) {

  return (
    <Box >
      <FormControl sx={sx}>
        <InputLabel >{placeholder}</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          onChange={handleChange}
          autoWidth
          value={value}
          error={isError}
          sx={{height:'49px'}}
          label={placeholder}
          MenuProps={MenuProps}
          defaultValue={defaultValue ? defaultValue : ""}
        >
          {data.map((item, i) => {
            return (
              <MenuItem key={i} value={item.code}>
                {item.name}
              </MenuItem>
            );
          })}
        </Select>
        {
          isError && helperText &&
          <FormHelperText sx={{color:'red'}}>{helperText}</FormHelperText>
        }
      </FormControl>
    </Box>
  );
}