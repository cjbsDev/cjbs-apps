import React, {MouseEvent, useState} from 'react';
import {Btn} from '@components/atoms/button';
import {Box, ListItemIcon, Menu, MenuItem, Typography} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Logout from '@mui/icons-material/Logout';

const UserInfos = (props) => {
  const {email, anchorElUser, handleOpenUserMenu, handleCloseUserMenu, handleSignOut} = props;

  return (
    <>
      <Btn
        variant={'text'}
        label={email}
        onClick={handleOpenUserMenu}
        sx={{color: 'white', textTransform: 'lowercase'}}
      />
      <Menu
        sx={{mt: '25px'}}
        id='menu-appbar'
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <Box>
          <MenuItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <Typography textAlign='center'>{email}</Typography>
          </MenuItem>
          <MenuItem sx={{textAlign: 'center'}} onClick={() => handleSignOut()}>
            <ListItemIcon>
              <Logout />
            </ListItemIcon>
            <Typography>Log out</Typography>
          </MenuItem>
        </Box>
      </Menu>
    </>
  );
};

export default UserInfos;
