import React from 'react';
import Box from '@mui/material/Box';
import {H3} from '@styles/styledComp';
import {SearchTextField} from '@components/comp/SearchTextField';
import {Container, InputAdornment} from '@mui/material';
import {Search} from '@mui/icons-material';
import Chip from '@mui/material/Chip';
import { searchWordAtom } from '@src/recoil/atoms/strainAtom'
import { useSetRecoilState, useRecoilState } from 'recoil';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const filterOptions = createFilterOptions({
  matchFrom: 'start',
  limit:10
});


const StrainSearch = ({taxonNames}) => {
  const [ searchWordState, setSearchWordState ] = useRecoilState(searchWordAtom)
  console.log("### searchWordState =>", searchWordState);

  return (
    <Container maxWidth={'xl'}>
      <Box sx={{py: 8}}>
        <Box>
          <H3 sx={{mb: 2, color: '#ffffff'}}>Strain Search</H3>
        </Box>
        <Autocomplete
          disablePortal
          id="multiple-limit-tags"
          // options: top100Films,
          // getOptionLabel: (option) => option.title,
          options={taxonNames}
          noOptionsText={''}
          // isOptionEqualToValue={false}
          filterOptions={filterOptions}
          limitTags={2}
          value={searchWordState}
          onChange={(e, value)=> setSearchWordState(value)}
          sx={{ width: '100%'}}
          renderInput={(params) => <SearchTextField 
            {...params}
            sx={{width:'100%'}}
            value={searchWordState}
            onChange={(e)=> setSearchWordState(e.target.value)}
            variant="outlined"
            size="medium"
          />}
        />
      </Box>
    </Container>
  );
};

export default React.memo(StrainSearch);
