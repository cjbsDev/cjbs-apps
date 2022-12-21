import {makeStyles} from "@mui/styles";
//Tabs Font
import {default as dfstyle} from '@components/variables/tokens.json';
import {themeJeju} from '@src/components/variables/themeJeju';
const themeSet = dfstyle.global;
const themeColor = themeJeju.palette;
const themeFont = themeJeju.typography;
export const useStyles = makeStyles({
  wrapHeader: {
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center', 
    marginTop:'20px', 
    height:'127px', 
    paddingLeft:'20px', 
    paddingRight: '20px', 
    backgroundImage: 'url(/img/strain/strainDetail/backgroundHeader.png)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  }
  ,
  detailGridBottom : {
    paddingRight:'10px',
    borderBottom:'1px', 
    borderBottomStyle:'solid', 
    paddingBottom:'10px', 
    borderBottomColor:'rgba(0,0,0,.12)'
  },
  subTabBox: {
    width:'1180px', 

    backgroundColor:'white', 
    borderBottomWidth:'1px', 
    borderBottomStyle:'solid', 
    borderBottomColor:'rgba(0,0,0,.12)'
  },
  tabHead: { 
    fontFamily: `${
      'CJ ONLYONE NEW title'
    }`,
    textTransform:'none',
  },
  gridContainer: { 
    wordWrap: "break-word", 
    width:'72.5%', 
    backgroundColor:'white', 
    paddingLeft:'60px', 
    paddingRight:'60px', 
    paddingTop: '20px',
    paddingBottom:'20px',
    marginBottom:'10px'
  },
  genomeIdBtn: {
    border: '1px solid rgba(0, 110, 205, 0.5);',
    fontFamily: `${
      'CJ ONLYONE NEW title'
    }`,
    fontWeight: `${
      500
    }`,
    fontSize: `16px`,
    height: '48px',
    marginTop: '24px',
    textTransform:'none', 
    borderColor:'#006ECD', 

    width:'100%'
},
  gridTabFont : {
    fontFamily: `${
      'CJ ONLYONE NEW title'
    }`,
    textTransform:'none',
    fontSize: '16px'
  },
  subTabActiveStyle : {
    backgroundColor:'#006ECD', 
    color:'white'
  },
  gridStyle : { 
    wordWrap: "break-word", 
    width:'1180px', 
    backgroundColor:'white', 
    padding:'20px 60px 20px 60px', 
    marginBottom : '5px'
  },
})
