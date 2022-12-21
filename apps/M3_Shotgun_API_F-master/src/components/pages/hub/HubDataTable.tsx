import React, {useMemo, useState} from 'react';
import CustomLoader from '@components/comp/CustomLoader';
import DataTable, {TableColumn, createTheme} from 'react-data-table-component';
import {Box, Chip, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import dayjs from 'dayjs';
import uuid from 'react-uuid';
import InputLabelStatus from '@components/molecules/InputLabelStatus';
import {grey} from '@mui/material/colors';
import PersonCircle from '@public/svg/icon/personCircle.svg';
import {Btn} from '@components/atoms/Btn';
import {useHubStyles} from '@styles/hub/hubStyle';
import {useRecoilState, useRecoilValue} from 'recoil';
import {userInfoAtom} from '@src/recoil/atoms/userAtom';
import {hubDataTableGridStyles} from '@styles/hub/hubDataTableGridStyles';

interface DataRow {
  hubInputUuid: string,
  hubInputName: string,
  fileTypeLongName: string,
  engineRunOutputs: [
    {
      engineRunStatus: string,
      enginePresetName: string,
    }
  ],
  createdBy: string,
  createdAt: string,
  fileUuid: string,
  fileTypeUuid: string,
}

const HubDataTable = (props) => {
  const {filteredHubItems, handleEngnOpen, handleAnalyOpen, data} = props;
  const hubCss = useHubStyles();
  const userInfo = useRecoilValue(userInfoAtom);
  const [resetPaginationToggle, setResetPaginationToggle] = useState<boolean>(false);

  const columns: TableColumn<DataRow>[] = useMemo(() => [
    {
      name: 'Type',
      width: '135px',
      selector: row => row.fileTypeLongName,
      cell: (row, index) => (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {
            dayjs().isSame(dayjs(row.createdAt).format('YYYY.MM.DD HH:MM'), 'day') === true &&
            <NewLabelStatus>n</NewLabelStatus>
          }
          <Typography variant={'body2'}>{row.fileTypeLongName}</Typography>
        </Box>
      ),
      sortable: true,
      style: {
        fontWeight: 600,
      },
    },
    {
      name: 'Input Name',
      maxWidth: '200px',
      selector: row => row.hubInputName,
      sortable: true,
      wrap: true,
      style: {
        fontWeight: 'bold',
      },
    },
    {
      name: 'Status',
      // width: '450px',
      wrap: true,
      allowOverflow: true,
      cell: row => (
        <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          {
            row.engineRunOutputs.length < 1
              ?
              <Chip label='None' variant={'outlined'} size='small'
                    sx={{fontFamily: `${'CJ ONLYONE NEW body'}`}} />
              :
              row.engineRunOutputs.map((item, index) => {
                return <Box key={uuid()} sx={{m: 0.5}}>
                  <InputLabelStatus engnRnSts={item.engineRunStatus}
                                    engnPrstNm={item.enginePresetName} />
                </Box>;
              })
          }
        </Box>
      ),
    },
    {
      name: 'Uploader',
      width: '180px',
      selector: row => row.createdBy !== '' ? row.createdBy.split('@')[0] : '-',
      sortable: true,
      cell: row => (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          {
            row.createdBy === userInfo.userEmail ?
              <>
                <MyLabelBadge sx={{mr: 1}}>MY</MyLabelBadge>
                <Typography variant={'body1'}>
                  {row.createdBy !== '' ? row.createdBy.split('@')[0] : '-'}
                </Typography>
              </>
              :
              <>
                <PersonCircle width={22} height={22} />
                <Box sx={{ml: 1}}>
                  {row.createdBy !== '' ? row.createdBy.split('@')[0] : '-'}
                </Box>
              </>
          }

        </Box>
      ),
    },
    {
      name: 'Date',
      width: '180px',
      selector: row => row.createdAt,
      format: row => dayjs(row.createdAt).format('YYYY.MM.DD LT'),
      sortable: true,
    },
    {
      name: 'Analysis',
      width: '140px',
      button: true,
      cell: (row) => (
        <Btn
          className={hubCss.runBtnNoShadow}
          label='Run'
          startIcon={true}
          startIconName='play'
          startIconSize={16}
          size='small'
          onClick={(event) => {
            event.stopPropagation();
            handleEngnOpen(row.fileUuid, row.fileTypeLongName, row.fileTypeUuid);
          }}
        />
      ),
    },
  ], [userInfo.userEmail]);

  return (
    <>
      <DataTable
        // title={'Hub Input List'}
        columns={columns}
        data={filteredHubItems}
        // data={data.hubInputs}
        pagination
        customStyles={hubDataTableGridStyles}
        onRowClicked={(row) => handleAnalyOpen(row)}
        progressPending={!data ? true : false}
        progressComponent={<CustomLoader />}
        // subHeader
        // subHeaderComponent={SubHeaderComponentMemo}
        paginationResetDefaultPage={resetPaginationToggle}
        persistTableHead
      />
    </>
  );
};

const NewLabelStatus = styled(Box)({
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
});

const MyLabelBadge = styled(Box)({
  backgroundColor: grey[800],
  color: 'white',
  fontWeight: 800,
  fontSize: 12,
  lineHeight: 1,
  padding: 5,
  paddingTop: 3,
  paddingBottom: 1,
  borderRadius: 3,
  textAlign: 'center',
  verticalAlign: 'center',
});

export default HubDataTable;
