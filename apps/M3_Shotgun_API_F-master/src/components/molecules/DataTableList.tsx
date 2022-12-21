import React, {useMemo, useState} from 'react';
import CustomLoader from '@components/comp/CustomLoader';
import {
  Box,
  Chip,
  Button, Snackbar, Grid, Typography,
} from '@mui/material';
import {styled} from '@mui/material/styles';
import {blue} from '@mui/material/colors';
import {PlayCircleOutlineOutlined} from '@mui/icons-material';
import RawDownloadBtn from '@components/molecules/RawDownloadBtn';
import EngnDialog from '@components/comp/Inputs/EngnDialog';
import SdmDetailModal from '@components/molecules/SdmDetailModal';
import SDMDataGrid from '@components/organisms/dataTable/DataTableBase';
import {CSVLink, CSVDownload} from 'react-csv';
import PageTitle from '@components/atoms/PageTitle';
import CountNumberBesideTitle from '@components/atoms/CountNumberBesideTitle';
import StatusInfo from '@components/molecules/StatusInfo';
import {commonStyled} from '@styles/common/commonStyled';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

const RunButton = styled(Button)({
  backgroundColor: blue[700],
  color: 'white',
  boxShadow: 'none',
  '&:hover, &:active': {
    boxShadow: 'none',
  },
});

// function TabPanel(props: TabPanelProps) {
//   const {children, value, index, ...other} = props;
//
//   return (
//     <div
//       role='tabpanel'
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{p: 3}}>
//           {value}
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }
//
// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     'aria-controls': `simple-tabpanel-${index}`,
//   };
// }

const DataTableList = (props) => {
  const {data} = props;
  const cmnCss = commonStyled();
  // const [alertOpen, setAlertOpen] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [sampleCode, setSampleCode] = useState('');
  const [selectedData, setSelectedData] = useState([]);
  const [value, setValue] = useState(0);
  const handleEngineOpen = (event, fileUuid, fileTypeLongName, fileTypeUuid) => {
    event.stopPropagation();
    // setEngnOpen(true);
    // setEngnId(fileUuid);
    // setFileTypeValue(fileTypeLongName);
    // setFileTypeUuid(fileTypeUuid);
  };

  console.log('RealStudyData', data);

  const handleClickOpen = (row) => {
    const sampleCodeValue = row.sampleCode;
    setOpen(true);
    setSampleCode(sampleCodeValue);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };

  // const handleSelectedRowsChange = ({selectedRows}) => {
  //   console.log('Selected Rows', selectedRows);
  //   setSelectedData(selectedRows);
  // };

  const columns = useMemo(() => [
    {
      name: 'Sample Code',
      width: '130px',
      selector: row => row.sampleCode,
      sortable: true,
      style: {},
    },
    {
      name: 'Subject Code',
      width: '130px',
      selector: row => row.subjectCode,
      sortable: true,
    },
    {
      name: 'Diagnosis',
      width: '140px',
      selector: row => row.diagnosis,
      sortable: true,
    },
    {
      name: 'Visit Code',
      width: '110px',
      selector: row => row.visitCode,
      sortable: true,
    },
    {
      name: 'Date Code',
      width: '140px',
      selector: row => row.dateCode === null && '-',
      sortable: true,
    },
    {
      name: 'Sampling Date',
      width: '140px',
      selector: row => row.samplingDate,
      sortable: true,
    },
    {
      name: 'Sources',
      width: '100px',
      selector: row => row.sources,
      sortable: true,
    },
    // {
    //   name: 'Sop',
    //   width: '100px',
    //   selector: row => row.sop,
    //   sortable: true,
    // },
    {
      name: '실험정보',
      width: '130px',
      selector: row => row.dateCode,
      // sortable: true,
      // button: true,
      cell: (row, index) => {
        return (
          <>
            <RawDownloadBtn rawFileUuid={row.experimentFileUuid} sampleCode={row.sampleCode} number={index}
                            isDisabled={false} labelName={row.sop} />
            {/*{row.sop}*/}
          </>
        );
      },
    },
    {
      name: 'Status',
      wrap: true,
      allowOverflow: true,
      cell: row => (
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          <Chip label={'None'} size='small' variant={'outlined'} />
          {/*<Chip label={'W.P'} size='small' variant={'outlined'} />*/}
          {/*<Chip label={'S.T'} size='small' variant={'outlined'} />*/}
          {/*<Chip label={'분석중'} size='small' variant={'outlined'} />*/}
          {/*<Chip label={'분석완료'} size='small' variant={'outlined'} />*/}
          {/*<Chip label={'에러'} size='small' variant={'outlined'} />*/}
          {/*{*/}
          {/*  row.engineRunOutputs.length < 1*/}
          {/*    ?*/}
          {/*    <Chip label='None' variant={'outlined'} size='small'*/}
          {/*          sx={{fontFamily: `${'CJ ONLYONE NEW body'}`}} />*/}
          {/*    :*/}
          {/*    row.engineRunOutputs.map((item, index) => {*/}
          {/*      return <Box key={uuid()} sx={{m: 0.5}}>*/}
          {/*        <InputLabelStatus engineRunStatus={item.engineRunStatus}*/}
          {/*                          enginePresetName={item.enginePresetName} />*/}
          {/*      </Box>;*/}
          {/*    })*/}
          {/*}*/}
        </Box>
      ),
    },
    {
      name: 'Analysis',
      width: '110px',
      button: true,
      cell: (row) => (
        <RunButton
          variant={'contained'}
          size={'small'}
          startIcon={<PlayCircleOutlineOutlined />}
          disabled={true}
          onClick={(event) => {
            // event.stopPropagation();
            // handleEngineOpen(event)
          }}
        >
          run
        </RunButton>
        // <Btn
        //   label='Run'
        //   startIcon={true}
        //   startIconName='play'
        //   startIconSize={20}
        //   size='small'
        //   onClick={(event) => {
        //     event.stopPropagation();
        //     handleEngnOpen(row.fileUuid, row.fileTypeLongName, row.fileTypeUuid);
        //   }}
        // />
      ),
    },
  ], []);

  // const handleAlertClose = (event: React.SyntheticEvent | Event, reason?: string) => {
  //   if (reason === 'clickaway') {
  //     return;
  //   }
  //   setAlertOpen(false);
  // };

  const Actions = <StatusInfo />;

  const TitleCountNumberHeader = () => {
    return (
      <Grid container sx={{alignItems: 'center'}}>
        <Grid item><PageTitle titleName={'List'} /></Grid>
        <Grid item><CountNumberBesideTitle totalCount={data.length} /></Grid>
      </Grid>
    );
  };

  const NoDataComponent = () => {
    return (
      <Box sx={{py: 5}}>
        <Typography>해당 연구 목록이 없습니다.</Typography>
      </Box>
    );
  };

  return (
    <>
      <SDMDataGrid
        title={<TitleCountNumberHeader />}
        columns={columns}
        data={data}
        onRowClicked={(row) => handleClickOpen(row)}
        progressPending={!data ? true : false}
        progressComponent={<CustomLoader />}
        actions={Actions}
        noDataComponent={<NoDataComponent />}
        // selectableRows
        // onSelectedRowsChange={handleSelectedRowsChange}

      />

      {open && <SdmDetailModal open={open} sampleCode={sampleCode} handleClose={handleClose} />}

      {/*<Snackbar*/}
      {/*  anchorOrigin={{vertical: 'top', horizontal: 'center'}}*/}
      {/*  open={alertOpen}*/}
      {/*  autoHideDuration={1000}*/}
      {/*  onClose={handleAlertClose}*/}
      {/*  message='Please select a file.'*/}
      {/*/>*/}
    </>
  );
};

export default DataTableList;
