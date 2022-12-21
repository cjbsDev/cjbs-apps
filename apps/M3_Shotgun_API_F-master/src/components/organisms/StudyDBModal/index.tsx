import React, {useRef, useState, useMemo, useCallback} from 'react';
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';
import {IconBtn} from '@components/atoms/button/IconBtn';
import Image from 'next/image';
import IcnCSV from '@public/img/icons/icn_csv.png';
import {themeJeju} from '@components/variables/themeJeju';
import {GET} from '@hooks/api/useAPI';
import {CSVLink, CSVDownload} from 'react-csv';
import uuid from 'react-uuid';
import FileSaver from 'file-saver';

const StudyDBModal = ({studyDBModalOpen, onClose, studyDBList}) => {
  const [csvInfo, setCsvInfo] = useState({
    csvData: '',
    downloadFileName: '',
    // loading: false,
  });

  const studyDBDn = async (dataSetId, dataSetName) => {
    await GET(`/shotgun/dataset/file/download?dataSetId=${dataSetId}`).then((res) => {
      const resData = res.data;
      console.log(resData);
      const resultData = `data:text/csv,${resData}`;
      FileSaver.saveAs(resultData, `${dataSetName}.tsv`);
    });
  };

  return (
    <Dialog open={studyDBModalOpen} onClose={onClose} fullWidth maxWidth={'sm'}>
      <DialogTitle sx={{p: 5, pb: 2}}>
        <Typography variant='subtitle1'>Data Warehouse</Typography>
        <IconBtn
          icon='x'
          iconSize={24}
          color='secondary'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 10,
            top: 10,
          }}
        />
      </DialogTitle>
      <DialogContent sx={{p: 5}}>
        <DialogContentText sx={{mb: 2}}>
          <Typography variant='body1' sx={{lineHeight: 1.2}}>
            The Study Database is a repository of microbiome taxonomic profiles (MTPs) produced by CJ Bioscience’s MTP
            pipeline from public whole genome shotgun sequences. Use your account to compare your MTPs with these
            reference MTPs.
          </Typography>
        </DialogContentText>
        <DialogContentText>
          <List sx={{mb: 2}}>
            {studyDBList.map((value, index) => (
              <ListItem
                sx={{backgroundColor: themeJeju.palette.grey['50'], mb: 1}}
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
                <ListItemText primary={`${value.dataSetName}`} sx={{fontWeight: '600', mr: 5}} />
              </ListItem>
            ))}
          </List>
          <Typography variant='body1' sx={{display: 'flex', justifyContent: 'center'}}>
            The database will be updated regularly!
          </Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default StudyDBModal;
