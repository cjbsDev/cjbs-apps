import { makeStyles } from "@mui/styles";
import {styled} from '@mui/material/styles';
import { Box, FormLabel, FormControlLabel } from "@mui/material";
import {commonStyles} from "@styles/commonStyle";

export const checkBoxStyles = makeStyles({
  ":global": {
    btnwrap: {
      "Mui-checked": {
        backgroundColor: "#fff111",
      },
    },
  },
  btnwrap: {
    "Mui-checked": {
      backgroundColor: "#fff111",
    },
  },
  checkbutton: {
    //backgroundColor: '#fff111',
  },
});
