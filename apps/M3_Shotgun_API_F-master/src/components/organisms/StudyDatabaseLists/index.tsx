import React, {useState} from 'react';
import {Box, Button, Chip, Collapse, IconButton, List, ListItem, ListItemText, Stack, Typography} from '@mui/material';
import {themeJeju} from '@components/variables/themeJeju';
import uuid from 'react-uuid';
import Image from 'next/image';
import IcnCSV from '@public/img/icons/icn_csv.png';
import useSWR from 'swr';
import {fetcher} from '@components/fnc/fetcher';
import {GET} from '@hooks/api/useAPI';
import FileSaver from 'file-saver';
import {styled} from '@mui/material/styles';

const StudyDatabaseLists = () => {
  const {data} = useSWR('/shotgun/dataset/list', fetcher, {
    refreshInterval: 0,
    suspense: true,
  });
  const [checked, setChecked] = useState(false);
  const studyDBDn = async (dataSetId, dataSetName) => {
    await GET(`/shotgun/dataset/file/download?dataSetId=${dataSetId}`).then((res) => {
      const resData = res.data;
      console.log(resData);
      const resultData = `data:text/csv,${resData}`;
      FileSaver.saveAs(resultData, `${dataSetName}.tsv`);
    });
  };

  console.log(data);

  const dddd = () => {
    setChecked((prev) => !prev);
  };

  const ListItemComponent = ({dataName, dataDesc, index, checked, toggle}) => {
    // const dddd = () => {
    //   // const {name, value} = e.target;
    //   // console.log('ActiveId ==>', activeId);
    //   console.log('Index ==>', index);
    //   // console.log('Validation ==>', init === e.target.value ? 'true' : 'false');
    //
    //   setChecked((prev) => !prev);
    // };
    return (
      <Box sx={{display: 'block'}}>
        <ListItemText
          primary={
            <Typography variant='subtitle1' component='div'>
              {dataName}
              {/*<IconButton onClick={toggle}>Darrow</IconButton>*/}
            </Typography>
          }
          sx={{fontWeight: '600', mb: 0.5, pr: 15.25}}
          secondary={dataDesc}
        />

        {/*<Box>*/}
        {/*  <Stack direction='row' spacing={1}>*/}
        {/*    <StudyTag label='Age' size='small' />*/}
        {/*    <StudyTag label='Adult' size='small' />*/}
        {/*    <StudyTag label='Healty' size='small' />*/}
        {/*  </Stack>*/}
        {/*</Box>*/}
      </Box>
    );
  };

  return (
    <List sx={{mb: 2}}>
      {data.dataSetList.map((value, index) => (
        <ListItem
          sx={{
            backgroundColor: themeJeju.palette.grey['50'],
            mb: 1.5,
            p: 3,
            border: `1px solid ${themeJeju.palette.grey['400']}`,
          }}
          key={uuid()}
          secondaryAction={
            <>
              <Button
                size={'medium'}
                variant={'outlined2'}
                startIcon={<Image src={IcnCSV} width={16} height={16} alt={'TSV'} />}
                onClick={() => studyDBDn(value.dataSetId, value.dataSetName)}
              >
                Download
              </Button>
            </>
          }
        >
          <ListItemComponent
            dataName={value.dataSetName}
            dataDesc={value.dataSetDesc}
            index={index}
            checked={checked}
            toggle={dddd}
          />
          {/*<ListItemText*/}
          {/*  primary={*/}
          {/*    <Typography variant='subtitle1'>*/}
          {/*      {value.dataSetName}*/}
          {/*      <IconButton onClick={(e) => dddd(index, value.dataSetId)}>Darrow</IconButton>*/}
          {/*    </Typography>*/}
          {/*  }*/}
          {/*  sx={{fontWeight: '600', m: 0}}*/}
          {/*  secondary={*/}
          {/*    <>*/}
          {/*      <Collapse in={checked}>*/}
          {/*        <Typography variant='body1' sx={{mb: 0.5}}>*/}
          {/*          Structure, function and diversity of the healthy human microbiome. Structure, function and diversity*/}
          {/*          of the healthy human microbiome. Structure, function and diversity of the healthy human microbiome*/}
          {/*        </Typography>*/}
          {/*      </Collapse>*/}
          {/*      <Box>*/}
          {/*        <Stack direction='row' spacing={2}>*/}
          {/*          <StudyTag label='Age' size='small' />*/}
          {/*          <StudyTag label='Adult' size='small' />*/}
          {/*          <StudyTag label='Healty' size='small' />*/}
          {/*        </Stack>*/}
          {/*      </Box>*/}
          {/*    </>*/}
          {/*  }*/}
          {/*/>*/}
        </ListItem>
      ))}
    </List>
  );
};

export default StudyDatabaseLists;
