import React from 'react';
import {Grid, IconButton, InputAdornment, OutlinedInput} from '@mui/material';
import {ClearAll, Search} from '@mui/icons-material';

interface DataTableSearchBarProps {
  filterText: string;
  onFilter: (e: any) => void;
  onClear: () => void;
}

const DataTableSearchBar = ({filterText, onFilter, onClear}: DataTableSearchBarProps) => {
  console.log(filterText);
  return (
    <Grid item>
      <OutlinedInput
        type={'text'}
        size={'small'}
        // value={filterText}
        onChange={onFilter}
        endAdornment={
          <InputAdornment position='end'>
            {filterText === '' ? (
              <Search fontSize={'small'} />
            ) : (
              <IconButton size='small' onClick={onClear}>
                <ClearAll fontSize={'small'} />
              </IconButton>
            )}
          </InputAdornment>
        }
        placeholder={'Search'}
        sx={{width: 238, height: 34, backgroundColor: 'white'}}
      />
    </Grid>
  );
};

export default DataTableSearchBar;
