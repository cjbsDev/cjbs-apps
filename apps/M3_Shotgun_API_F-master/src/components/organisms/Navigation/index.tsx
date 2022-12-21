import React from 'react';
import {Box, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import Image from 'next/image';
import IconStatus from '@public/img/icons/icn_status.png';
import {themeJeju} from '@components/variables/themeJeju';
import JobsStatus from '@components/organisms/Status/JobsStatus';
import {styled} from '@mui/material/styles';
import {useRouter} from 'next/router';
import {navigationInfo} from '@components/organisms/Navigation/navigationInfo';
import uuid from 'react-uuid';

const Navigation = () => {
  const router = useRouter();
  const handleListItemClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, path: string) => {
    router.push(path);
  };
  return (
    <>
      <SaasNav component='nav'>
        {navigationInfo.map((menu, index) => {
          return (
            <SaasListItemBtn
              key={uuid()}
              divider={index === 2 ? false : true}
              sx={{py: 2, color: 'rgba(255,255,255,.8)'}}
              selected={menu.path === router.pathname}
              onClick={(event) => handleListItemClick(event, menu.path)}
            >
              <ListItemIcon>
                <Image src={menu.iconPath} width={menu.iconPath === IconStatus ? 16 : 18} height={16} alt={menu.name} />
              </ListItemIcon>
              <ListItemText
                primary={menu.name}
                primaryTypographyProps={{
                  color: 'white',
                  variant: 'subtitle2',
                  component: 'p',
                }}
                sx={{my: 0}}
              />
            </SaasListItemBtn>
          );
        })}
      </SaasNav>
      {router.pathname !== '/dataWarehouse' && (
        <Box sx={{backgroundColor: themeJeju.palette.grey['900'], p: 6, py: 0.5}}>
          <JobsStatus />
        </Box>
      )}
    </>
  );
};

export default Navigation;

const SaasNav = styled(List)<{component?: React.ElementType}>({
  paddingTop: 0,
  paddingBottom: 0,
  '& .MuiListItemButton-root': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

const SaasListItemBtn = styled(ListItemButton)({
  '&.MuiListItemButton-divider': {
    borderColor: themeJeju.palette.grey['700'],
  },
  '&.Mui-selected': {
    backgroundColor: themeJeju.palette.primary.main,
    '&:hover, &:focus': {
      backgroundColor: themeJeju.palette.primary.main,
    },
  },
});
