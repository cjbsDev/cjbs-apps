import {makeStyles} from '@mui/styles';
import {lightBlue, grey, red, blue, green, deepOrange, cyan, amber, yellow, deepPurple} from '@mui/material/colors';

export const useHubStyles = makeStyles({
  inputBox: {
    '&:hover': {
      cursor: 'pointer',
    },
  },
  inputTitle: {
    color: 'red',
    '&:hover': {
      color: 'green',
    },
  },
  dl: {
    margin: 0,
    padding: 0,
    '& dt': {
      float: 'left',
      width: '40%',
      borderBottomWidth: 1,
      borderBottomColor: grey[300],
      borderBottomStyle: 'solid',
      lineHeight: 3.2,
      // paddingTop: 10,
      // paddingBottom: 10,
    },
    '& dd': {
      marginLeft: 0,
      borderBottomWidth: 1,
      borderBottomColor: grey[300],
      borderBottomStyle: 'solid',
      lineHeight: 3.2,
      // height: 50,
      // paddingTop: 10,
      // paddingBottom: 10,
      '& span': {
        fontWeight: 'normal',
        fontSize: 15,
      },
    },
  },
  analysisBox: {
    borderColor: grey[300],
    borderStyle: 'solid',
    borderWidth: 1,
    padding: 20,
    marginBottom: 20,
    position: 'relative',
  },
  btnGrpWrap: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: 15,
  },
  analyIng: {
    backgroundColor: blue[100],
    color: blue[500],
  },
  analyFail: {
    backgroundColor: red[100],
    color: red[500],
  },
  labelInitial: {
    // backgroundColor: amber[50],
    borderWidth: 0.5,
    borderColor: amber[500],
    color: amber[800],
    fontWeight: 'bold',
    fontFamily: `${'CJ ONLYONE NEW body'}`,
  },
  labelQueued: {
    // backgroundColor: cyan[50],
    borderWidth: 0.5,
    borderColor: cyan[500],
    color: cyan[800],
    fontWeight: 'bold',
    fontFamily: `${'CJ ONLYONE NEW body'}`,
  },
  labelIng: {
    // backgroundColor: green[50],
    borderWidth: 0.5,
    borderColor: green[500],
    color: green[800],
    fontWeight: 'bold',
    fontFamily: `${'CJ ONLYONE NEW body'}`,
  },
  labelSuccess: {
    // backgroundColor: blue[50],
    borderWidth: 0.5,
    borderColor: blue[500],
    color: blue[800],
    fontWeight: 'bold',
    fontFamily: `${'CJ ONLYONE NEW body'}`,
  },
  labelFail: {
    // backgroundColor: red[50],
    borderWidth: 0.5,
    borderColor: red[500],
    color: red[600],
    fontWeight: 'bold',
    fontFamily: `${'CJ ONLYONE NEW body'}`,
  },
  statusNameList: {
    display: 'flex',
    listStyle: 'none',
    margin: 0,
    padding: 0,
    justifyContent: 'flex-end',
    '& li': {
      marginLeft: 15,
    },
  },
  statusCycLabelInitial: {
    backgroundColor: amber[800],
    display: 'inline-block',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 5,
  },
  statusCycLabelQueued: {
    backgroundColor: cyan[600],
    display: 'inline-block',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 5,
  },
  statusCycLabelIng: {
    backgroundColor: green[600],
    display: 'inline-block',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 5,
  },
  statusCycLabelSuccess: {
    backgroundColor: blue[800],
    display: 'inline-block',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 5,
  },
  statusCycLabelFail: {
    backgroundColor: red[600],
    display: 'inline-block',
    width: 8,
    height: 8,
    borderRadius: 50,
    marginRight: 5,
  },
  fileAddListItems: {
    '&.addFileListItem': {
      backgroundColor: green,
    },
  },
  btnNoShadow: {
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '& .MuiButton-startIcon': {
      marginRight: 0,
    },
    '& .MuiButton-endIcon': {
      marginLeft: 0,
    },
  },
  runBtnNoShadow: {
    padding: 2,
    fontSize: 13,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '& .MuiButton-startIcon': {
      marginRight: 0,
    },
    '& .MuiButton-endIcon': {
      marginLeft: 0,
    },
  },
  myLabel: {
    backgroundColor: grey[800],
    color: 'white',
    fontWeight: 800,
    fontSize: 12,
    lineHeight: 1,
    padding: 5,
    paddingTop: 3,
    paddingBottom: 1,
    // width: 30,
    // height: 18,
    // minHeight: 18,
    borderRadius: 3,
    textAlign: 'center',
    verticalAlign: 'center',
  },
  newLabel: {
    width: 16,
    height: 16,
    lineHeight: 1,
    backgroundColor: 'red',
    borderRadius: '50%',
    marginRight: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 14,
  },
});
