import React from 'react';
import {Dialog, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {useRecoilValue} from 'recoil';
import {rowInfoAtom} from '@src/recoil/atoms/rowInfoAtom';

interface StrainDialogProps {
  handleClose: () => void;
  open: (url?: string | URL, target?: string, features?: string) => Window;
}

const StrainDialog = (props: StrainDialogProps) => {
  const rowInfo = useRecoilValue(rowInfoAtom);
  const {handleClose, open} = props;
  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth="md">
      <DialogTitle>{rowInfo.strainName}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{rowInfo.originalTaxonName}</DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(StrainDialog);
