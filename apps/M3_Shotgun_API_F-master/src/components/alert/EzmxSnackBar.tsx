import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Slide, { SlideProps } from '@mui/material/Slide';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';


// export type EzmxSnackBarTypes = {
//   type : 'success' | 'info' | 'warning' | 'error';
//   message : string;
//   open : boolean
//   onClose : () => void;
// }

export interface EzmxSnackBarProps {
  type : 'success' | 'info' | 'warning' | 'error';
  message : string;
  open : boolean
  onClose : () => void;
}

export interface SnackbarMessage {
  message: string;
  key: number;
}

export interface State {
  open: boolean;
  snackPack: readonly SnackbarMessage[];
  messageInfo?: SnackbarMessage;
}

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

const MuiAlertStyled = styled(MuiAlert)`
  width: 100%;
  font-weight: 600;
  letter-spacing: 1px;
  font-family: CJ ONLYONE NEW body;
  color: white;
`

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlertStyled elevation={6} ref={ref} variant="filled" {...props} />;
});

function EzmxSnackBar({type, message, open, onClose}: EzmxSnackBarProps) {

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar 
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        open={open} 
        autoHideDuration={3000} 
        onClose={onClose}
        TransitionComponent={SlideTransition}
      >
        <Alert 
          onClose={onClose} 
          severity={type} 
        >
          {message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}

// EzmxSnackBar.propTypes = {
//   type:    PropTypes.oneOf(["success", "warning", "info", "error"]).isRequired,
//   message: PropTypes.string.isRequired,
//   open:    PropTypes.bool.isRequired
// };

export default EzmxSnackBar