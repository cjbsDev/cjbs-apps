import React from 'react';
import {Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Typography} from '@mui/material';
import {bindMenu, bindTrigger} from 'material-ui-popup-state/hooks';
import {ArrowDropDown, ContentCopy, CropPortrait} from '@mui/icons-material';
import {useHubStyles} from '@styles/hub/hubStyle';
import {themeJeju} from '@components/variables/themeJeju';

const DropdownMenu = (props) => {
  const {popupState, handleUploadOpen, pairedUploadDialogOpen} = props;
  const hubCss = useHubStyles();
  return (
    <>
      <Button
        className={hubCss.btnNoShadow}
        sx={{display: 'flex', justifyContent: 'space-between'}}
        variant='contained'
        fullWidth={true}
        size={'large'}
        {...bindTrigger(popupState)}
      >
        Upload
        <ArrowDropDown />
      </Button>
      <Menu {...bindMenu(popupState)}>
        <MenuItem onClick={handleUploadOpen} sx={{width: 226}}>
          <ListItemIcon>
            <CropPortrait />
          </ListItemIcon>
          <ListItemText>
            Single Upload
          </ListItemText>
        </MenuItem>
        <Divider sx={{mx: 2}} />
        <MenuItem onClick={pairedUploadDialogOpen} sx={{width: 226}}>
          <ListItemIcon>
            <ContentCopy />
          </ListItemIcon>
          <ListItemText>
            Paired Upload
          </ListItemText>
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropdownMenu;
