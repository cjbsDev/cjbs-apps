import {
  Box,
  Button,
  FormControl,
  MenuItem, Select
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {blue, grey} from '@mui/material/colors';
import {ExpandMore} from '@mui/icons-material';
import MultiClamp from 'react-multi-clamp';
import { SelectInputProps } from '@mui/material/Select/SelectInput';
const DRAWER_WIDTH = 276;

  export interface OptionProps {
    title: string
    studyCode:string
  }

  export interface SubjectSelectBoxProps {
    data : OptionProps[]
    value : string
    onChange : SelectInputProps['onChange']
    openViewModal? : (string) => void
  }

  const SelectBox = styled(Select)({
    borderRadius: 6,
    backgroundColor: grey[50],
    lineHeight: 1.5,
    '.MuiSelect-select': {
      whiteSpace: 'normal !important',
      padding: 18,
      paddingTop: 22,
      paddingBottom: 22,
      fontWeight: '800',
      fontSize: 14,
    },
  });
  
  const SelectBoxItem = styled(MenuItem)({
    whiteSpace: 'normal',
    lineHeight: 1.5,
    fontSize: 14,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 10,
    marginRight: 10,
  });

  const ContainerBox = styled(Box)`
    width: 100%;
  `

const SubjectSelectBox = function({data, value, onChange} : SubjectSelectBoxProps){

    return (
      <ContainerBox>
        <Box>
          <FormControl fullWidth={true} sx={{width:'100%',  boxShadow: 'none'}}>
            <SelectBox
              value={value}
              onChange={onChange}
              inputProps={{'aria-label': 'Without label'}}
              IconComponent={ExpandMore}
              variant={'outlined'}
              MenuProps={{
                sx: {
                  top: -89,
                  width: DRAWER_WIDTH,
                  height: '90%',
                  '.MuiMenu-paper': {
                    borderRadius: 6,
                  },
                  '.MuiMenu-list': {
                    border: `2px solid ${blue[700]}`,
                    borderRadius: 6,
                    '.MuiMenuItem-root': {
                      '&:hover': {
                        backgroundColor: grey[100],
                      },
                    },
                    '.Mui-selected': {
                      backgroundColor: 'white',
                      color: blue[800],
                      '&:focus, &:active, &:hover': {
                        backgroundColor: 'white',
                      },
                    },
                  },
                },
              }}
            >
              {
                data.map((option, i) => (
                  <SelectBoxItem key={i} value={option.studyCode} divider={true}>
                    <MultiClamp ellipsis={'...'} clamp={2}>
                      {option.title}
                    </MultiClamp>
                  </SelectBoxItem>
                ))
              }
            </SelectBox>
          </FormControl>
        </Box>
      </ContainerBox>

    )
}

export default SubjectSelectBox
