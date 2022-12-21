import React, {useState, useEffect} from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Tab,
  Tabs,
  Typography,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {grey} from '@mui/material/colors';
import {themeJeju} from '@components/variables/themeJeju';
import {GET} from '@src/hooks/api/useAPI';
import SampleInfoView from '@components/organisms/SampleInfoView';
import SubjectInfoView from '@components/organisms/SubjectInfoView';

const DLVerticalBox = styled('dl')({
  margin: '0 0 15 0',
  padding: 0,
  // 'dt': {
  //   margin: 0,
  //   padding: 0,
  //   color: grey[600],
  //   fontSize: 14,
  // },
  'dd': {
    margin: 0,
    padding: 0,
    fontWeight: '600',
    fontSize: 16,
  },
});

const CustomTab = styled(Tab)({
  '&.MuiTab-root': {
    width: 'auto',
    padding: '0',
    marginRight: 20,
    fontSize: 15,
    lineHeight: 1,
  },
  '&.Mui-selected': {
    width: 'auto',
    minWidth: 'auto',
    padding: '12px 0',
    marginRight: 20,
    fontWeight: '600',
  },
});

const CustomBtn = styled(Button)({
  '&.MuiButton-root, &.MuiButton-contained': {borderRadius: 0},
});

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const {children, value, index, ...other} = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{}}>
          {/*{value}*/}
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const SdmDetailModal = (props) => {
  const {open, handleClose, sampleCode} = props;
  const [value, setValue] = useState(0);
  const [sampleInfoValue, setSampleInfoValue] = useState([]);
  const [sampleDateInfoValue, setSampleDateInfoValue] = useState([]);
  const [sampleNoteInfoValue, setsampleNoteInfoValue] = useState([]);
  const [subjectInfoValue, setSubjectInfoValue] = useState([]);
  const [subjectDateInfoValue, setSubjectDateInfoValue] = useState([]);

  // console.log('open --->>>', open, sampleCode);

  useEffect(() => {
    // console.log('Hi~~', sampleCode);
    GET(`/sample/${sampleCode}`)
      .then((res) => {
        console.log(res.data.data);
        setSampleInfoValue(res.data.data.sampleInfo);
        setSampleDateInfoValue(res.data.data.dateInfo);
        setsampleNoteInfoValue(res.data.data.noteInfo);
      });
  }, []);

  const handleCloseChild = () => {
    handleClose();
    setValue(0);
  };


  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log('newValue', newValue);
    switch (newValue) {
      case 0:
        GET(`/sample/${sampleCode}`)
          .then((res) => {
            console.log(res.data.data);
            const resData = res.data.data;
            setSampleInfoValue(resData.sampleInfo);
            setSampleDateInfoValue(resData.dateInfo);
            setsampleNoteInfoValue(resData.noteInfo);
          });
        break;

      case 1:
        GET(`/subject/info?sampleCode=${sampleCode}`)
          .then((res) => {
            console.log(res.data.data);
            const resData = res.data.data;
            setSubjectInfoValue(resData.subjectInfo);
            setSubjectDateInfoValue(resData.dateInfo);
          });
        break;

      default:
        break;
    }
    setValue(newValue);
  };

  return (
    <Dialog open={open} onClose={handleCloseChild} fullWidth={true}>
      <DialogTitle sx={{p: 0}}>
        <Box sx={{borderBottom: 1, borderColor: 'divider', pt: 3.6}}>
          <Tabs
            sx={{px: 5}}
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
            textColor={'primary'}
          >
            <CustomTab label='샘플 정보' {...a11yProps(0)} />
            <CustomTab label='대상자 정보' {...a11yProps(1)} />
            <CustomTab disabled label='실험 및 분석 정보' {...a11yProps(2)} />
          </Tabs>
        </Box>
      </DialogTitle>
      <DialogContent sx={{p: 5, pt: 3.5}}>
        <TabPanel value={value} index={0}>
          <SampleInfoView
            sampleInfoValue={sampleInfoValue}
            dateInfoValue={sampleDateInfoValue}
            sampleNoteInfoValue={sampleNoteInfoValue}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SubjectInfoView
            subjectInfoValue={subjectInfoValue}
            dateInfoValue={subjectDateInfoValue}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          준비중 입니다.
        </TabPanel>
      </DialogContent>
      <DialogActions sx={{p: 0}}>
        <CustomBtn
          variant={'contained'}
          fullWidth={true}
          onClick={handleCloseChild}
        >
          확인
        </CustomBtn>
      </DialogActions>
    </Dialog>
  );
};

export default SdmDetailModal;
