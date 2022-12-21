import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import NoDataComp from '@components/comp/NoDataComp';
// import { columns } from '@components/comp/columns';
import {dataTableCustomStyles} from '@styles/common/dataTableCustomStyle';
import CustomLoader from '@components/comp/CustomLoader';
import { Chip, Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import MyIcon from '@public/fonts/icon';
import {styled} from '@mui/material/styles';
import { comma } from '@src/util/Format';
import LoadingButton from '@mui/lab/LoadingButton';
import DataTableBase from '../organisms/dataTable/DataTableBase';
import { useRouter } from 'next/router';

const FlexBox = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-items: center;
`

const CountBox = styled(Box)`
  margin-top: 6px;
  width: max-content;
  height: 26px;
  flex-grow: 0;
  display: flex;
  gap: 16px;
  padding: 2px 8px;
  border-radius: 20px;
  border: solid 0.5px rgba(37, 37, 37, 0.5);
  flex-grow: 0;
  font-family: NotoSans;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: -0.5px;
`

const RsearchDataTable = ({listToDisplay, pending, addFavorite, openModal, getViewData, t}) => {
  
  const router = useRouter()

  const columns = [
    {
      name: <MyIcon icon={'star'} size={24} color={'lightgray'}/>,
      cell: (row, index, column, id) => {
        if(row.interestYN === "N"){
          return(
            <a onClick={()=>addFavorite(row.studyCode)} style={{'cursor': 'pointer'}} >
              <MyIcon icon={'star'} size={24} color={'lightgray'}/>
            </a>
          )
        }
        else {
          return(
            <a onClick={()=>addFavorite(row.studyCode)} style={{'cursor': 'pointer'}} >
              <MyIcon icon={'star-fill'} size={24} color={'#FF9700'}/>
            </a>
          )
        }
      },
      width: '70px',
      sortable: true,
    },
    {
      name: t('diagnosisType'),
      cell: (row, index, column, id) => {
        return <Chip size="small" sx={{padding:'0px 5px 0px 5px',  height:'25px',  backgroundColor:row.color, color:'white', fontWeight:600}} label={row.diagnosisType}  />  //
      },
      width: '145px',
      sortable: true,
    },
    {
      name: t('status'),
      selector: (row) => {
        return row.studyStatus;
      },
      sortable: true,
      width: '90px',
    },
    {
      name: t('division'),
      center:true,
      selector: (row) => {
        return row.division;
      },

      width: '100px',
      sortable: true,
      wrap: true,
    },
    {
      name: t('researchName'),
      selector: (row) => {
        if (row.title === '') {
          return '-';
        }
        return row.title;
      },
      cell: (row, index, column, id) => {
        return  <FlexBox>
                  <Box>{row.title}</Box> 
                  <Box sx={{display:'flex'}}>
                    <CountBox sx={{marginRight:'5px'}}>
                      {t('target')} {comma(row.currentSubjectCnt)} / {comma(row.targetSubjectCnt)}
                    </CountBox>
                    <CountBox>
                    {t('sample')} {comma(row.currentSampleCnt)} / {comma(row.targetSampleCnt)}
                    </CountBox>
                  </Box>
                </FlexBox>
      },
      sortable: true,
      wrap: true,
    },
    {
      name: t('principalInvestigator'),
      selector: (row) => {
        if (row.principalInvestigator === '') {
          return '-';
        }
        return <Box>
            <Box sx={{marginBottom:'5px'}}>
              {row.principalInstitute}
            </Box>
            <Box>
              {row.principalInvestigator}
            </Box>
        </Box>
      },
      sortable: true,
      width: '242px',
      
    },
    {
      name: ' ',
      cell: (row, index, column, id) => {
        return <Box sx={{width:'100%', display:'flex', justifyContent:'space-between'}}>
                <LoadingButton onClick={()=>getViewData(row.studyCode)} variant='outlined' sx={{fontSize:'14px', padding:'1px', textTransform:'none', mr:'8px'}} >{t('researchInformation')}</LoadingButton> 
                <LoadingButton onClick={()=>
                  router.push({
                    pathname: '/cris/sample/[studyCode]',
                    query: { studyCode: row.studyCode },
                  })
                } variant='outlined' sx={{fontSize:'14px', padding:'1px', textTransform:'none', mr:'8px'}} >{t('sampleManagement')}</LoadingButton> 
               </Box>
      },
      sortable: true,
      width: '10%',
    }
  ];

  return (
      <DataTableBase
        noDataComponent={<NoDataComp />}
        columns={columns}
        data={listToDisplay}
        // style={tableStyle}
        customStyles={dataTableCustomStyles}
        pagination
        progressPending={pending}
        progressComponent={<CustomLoader />}
      />
  );
};

export default RsearchDataTable;
