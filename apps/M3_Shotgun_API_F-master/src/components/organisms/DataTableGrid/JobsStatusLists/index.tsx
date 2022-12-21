import React, {useMemo} from 'react';
import JobsDataGrid from '@components/organisms/dataTable/DataTableBase';
import useSWR from 'swr';
import {fetcher} from '@components/fnc/fetcher';
import {useRouter} from 'next/router';
import {GET} from '@hooks/api/useAPI';
import {Box, Button, Grid, IconButton, Typography} from '@mui/material';
import uuid from 'react-uuid';
import InputLabelStatus from '@components/molecules/InputLabelStatus';
import {themeJeju} from '@components/variables/themeJeju';
import {ArrowBackIosNewRounded, FileDownload} from '@mui/icons-material';
import PageTitle from '@components/atoms/PageTitle';
import CountNumberBesideTitle from '@components/atoms/CountNumberBesideTitle';
import FileSaver from 'file-saver';
import GridHeader from '@components/pages/profiles/GridHeader';

const JobsStatusLists = () => {
  const {data, error, mutate} = useSWR('/shotgun/job/run/list', fetcher, {
    refreshInterval: 1000,
    suspense: true,
  });

  const exportHTMLData = (jobRunId, jobName) => {
    GET(`/shotgun/job/run/download?shotgunJobRunId=${jobRunId}`).then((res) => {
      console.log(`isZip ==>`, res.headers.iszip);
      // console.log(`html data ${jobRunId}`, res.headers.iszip === 'true' ? res.data.data : res.data);
      const isZip = res.headers.iszip;
      // const resData = isZip === 'true' ? res.data.data : res.data;
      const resData = res.data;

      const resultData =
        isZip === 'true'
          ? `data:application/zip;base64, ${resData}`
          : 'data:text/html;charset=utf-8,' + encodeURIComponent(resData);

      FileSaver.saveAs(
        resultData,
        isZip === 'true' ? `${jobName}${jobRunId}_output.zip` : `${jobName}${jobRunId}_output.html`,
      );
    });
  };

  const columns = useMemo(
    () => [
      {
        name: 'Job ID',
        width: '140px',
        selector: (row) => row.jobRunId,
        sortable: true,
      },
      {
        name: 'Job Title',
        // width: '140px',
        selector: (row) => row.jobRunTitle,
        cell: (row) => {
          return <Box>{row.jobRunTitle === null ? '-' : row.jobRunTitle}</Box>;
        },
        sortable: true,
      },
      {
        name: 'Type',
        width: '180px',
        selector: (row) => row.type,
        sortable: true,
      },
      {
        name: 'Job',
        width: '200px',
        selector: (row) => row.jobName,
        sortable: true,
      },
      {
        name: 'Options',
        width: '160px',
        selector: (row) => {
          return (
            <Button variant={'outlined'} size={'small'} disabled={true}>
              <Typography variant={'body1'}>View</Typography>
            </Button>
          );
        },
      },
      {
        name: 'Status',
        width: '160px',
        selector: (row) => row.status,
        cell: (row) => {
          const {status} = row;
          return (
            <Box key={uuid()} sx={{m: 0.5}}>
              <InputLabelStatus engnRnSts={status} engnPrstNm={status} />
            </Box>
          );
        },
        sortable: true,
      },
      {
        name: 'Download',
        width: '100px',
        button: true,
        cell: (row) => {
          console.log('isOutputFileExist', row.isOutputFileExist);
          const {jobRunId, jobName} = row;
          return (
            <IconButton
              size={'small'}
              onClick={() => {
                console.log('Export Data Download Click!');
                exportHTMLData(jobRunId, jobName);
              }}
              disabled={row.isOutputFileExist === 'Y' ? false : true}
              sx={{borderStyle: 'solid', borderColor: themeJeju.palette.grey['300'], borderWidth: 1, borderRadius: 0}}
            >
              <FileDownload />
            </IconButton>
          );
        },
      },
    ],
    [],
  );

  return (
    <JobsDataGrid
      title={<GridHeader titleName={'JOBS STATUS'} totalCount={data.total} />}
      columns={columns}
      data={data.profileList}
    />
  );
};

export default JobsStatusLists;
