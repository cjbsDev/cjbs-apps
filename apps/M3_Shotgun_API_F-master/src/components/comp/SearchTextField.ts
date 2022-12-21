import {styled} from "@mui/material/styles";
import {TextField} from "@mui/material";
import {themeJeju} from "@components/variables/themeJeju";

const themeColor = themeJeju.palette;

export const SearchTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    backgroundColor: 'white',
    '& fieldset': {
      borderColor: 'white',
      color: 'black',
      borderRadius: 5,
      boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
    },
    '&:hover fieldset': {
      borderColor: themeColor.primary.main,
      borderWidth: 2,
      borderRadius: 5,
    },
    // '&.Mui-focused fieldset': {
    //   borderColor: 'green',
    // },
  },
})
