import {makeStyles} from "@mui/styles";

export const useStyles = makeStyles({
  wrapSearch: {
    backgroundColor: '#0E185F',
    backgroundImage: 'url(./img/backgroundSearch.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '243px',
    marginBottom: '30px',
  },
  sampleModify: {
    marginTop: 0,
    // backgroundColor: 'lightgray'
  },
  sampleCountDl: {
    margin: '0 30px 0 0',
    padding: 0,
    '& dt': {
      fontSize: 15
    },
    '& dd': {
      marginLeft: 0,
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize: 18,
      '& span': {
        fontWeight: 'normal',
        fontSize: 15,
      }
    }
  },
  strainCount : {
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-end',
    marginBottom: '10px'
  }
})
