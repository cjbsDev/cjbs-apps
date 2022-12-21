import React, { useState } from 'react';
import NoDataComp from '@components/comp/NoDataComp';
import CustomLoader from '@components/comp/CustomLoader';
import { Box } from '@mui/system';
import MyIcon from '@public/fonts/icon';
import DataTableBase from '../organisms/dataTable/DataTableBase';
import { useRouter } from 'next/router';
import { ALnk } from '../atoms/Link';

const move= (router, studyCode, name) => {
  
  return (
    <a onClick={()=>  router.push({pathname: '/cris/sample/[studyCode]', query: { studyCode }})} style={{'cursor': 'pointer', textDecoration:'none', color:'rgba(0,0,0,0.87)'}} >
       {name}
    </a>
  )
}

const RsearchDataTable = ({listToDisplay, pending, addFavorite, openModal, getViewData, t}) => {
  const router = useRouter()


  const columns = [
    {
      name: <MyIcon icon={'star'} size={24} color={'lightgray'}/>,
      cell: (row, index, column, id) => {
        console.log("row =>", row);
        
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
      name: t('researchCode'),
      cell: (row, index, column, id) => {
        console.log("row >" , row);
        return <ALnk linkName={row.studyCode} href={''} onClick={()=>getViewData(row.studyCode)} />
      },
      width: '120px',
      sortable: true,
      ignoreRowClick:true
    },
    {
      name: t('researchType'),
      selector: (row) => {
        return move(router, row.studyCode, row.studyType === "PUL" ? t('typePublic') : t('typeCollaboration'))
      },
      sortable: true,
      width: '100px',
      ignoreRowClick:true
    },
    {
      name: t('researchName'),
      selector: (row) => {
        if (row.title === '') {
          return '-';
        }
        return move(router, row.studyCode, row.title);
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
        return move(router, row.studyCode,         <Box>
          <Box sx={{marginBottom:'5px'}}>
            {row.principalInstitute}
          </Box>
          <Box>
            {row.principalInvestigator}
          </Box>
      </Box>)

      },
      wrap: true,
      sortable: true,
      width: '240px',
      
    },
    {
      name: t('division'),
      selector: (row) => {
        return move(router, row.studyCode, row.division)
      },

      width: '100px',
      sortable: true,
      wrap: true,
    },
    {
      name: t('diagnosis'),
      selector: (row) => {
        return move(router, row.studyCode, row.diagnosisType)
      },
      width: '130px',
      sortable: true,
      wrap: true,
    },
    {
      name: t('status'),
      selector: (row) => {
        return move(router, row.studyCode, row.studyStatus)
      },
      width: '100px',
      sortable: true,
      wrap: true,
    },
  ];

  return (
      <DataTableBase
        noDataComponent={<NoDataComp />}
        columns={columns}
        data={listToDisplay}
        highlightOnHover={true}
        pagination
        progressPending={pending}
        onRowClicked={(row, e) => { router.push({
          pathname: '/cris/sample/[studyCode]',
          query: { studyCode: row.studyCode },
        })}}
        progressComponent={<CustomLoader />
      }
      />
  );
};

export default RsearchDataTable;
