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
import { useTranslation } from 'next-i18next';
import DataTableBase from '../DataTableBase';
import InputLabelStatus from '@src/components/molecules/InputLabelStatus';


const RealSampleDataTable = ({listToDisplay, pending, onClickExpermentInfo}) => {
  
  const {t} = useTranslation('physicalSample')

  const columns = [
    {
      name: t('sampleCode'),
      selector: (row) => {
        console.log("##### ", row);
        
        return row.sampleOriginalCode;
      },
      sortable: true,
      width: '250px',
    },
    {
    name: t('sampleID'),
    cell: (row) => {
      return row.sampleCode
      },
      sortable: true,
      wrap: true,
      width: '210px',
      selectableRows: false
    },
    {
      name: t('subjectCode'),
      selector: (row) => {
        return row.subjectOriginalCode;
      },
      sortable: true,
      wrap: true,
      width: '250px',
    },
    {
      name: t('visitCode'),
      selector: (row) => {
        return row.visitCode
      },
      sortable: true,
      width: '160px',
    },
    {
      name: t('source'),
      cell: (row, index, column, id) => {
        return row.source
      },
      sortable: true,
      width: '250px',
    },
    {
      name: t('status'),
      cell: (row, index, column, id) => {
        return <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          // backgroundColor: 'red',
        }}>
          {
            row.experimentList.length < 1
              ?
              <Chip label='None' variant={'outlined'} size='small'
                    sx={{fontFamily: `${'CJ ONLYONE NEW body'}`}} />
              :
              row.experimentList.map((item, index) => {
                return (
                    <Box key={item.orderCode} sx={{m: 0.5}}>
                      <InputLabelStatus onClick={()=>onClickExpermentInfo(item)}
                                        engnRnSts={item.status}
                                        engnPrstNm={item.experimentType} />
                    </Box>
                );
              })
          }
        </Box>
      },
      sortable: true,
      width: '180px'
    }
  ];

  return (
      <DataTableBase
        noDataComponent={<NoDataComp />}
        columns={columns}
        data={listToDisplay}
        customStyles={dataTableCustomStyles}
        pagination
        progressPending={pending}
        progressComponent={<CustomLoader />}
      />
  );
};

export default RealSampleDataTable;
