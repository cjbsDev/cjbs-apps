import React, {useState} from 'react';
import {Box, Chip, CssBaseline, Drawer, Grid, Toolbar, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import AppBarType1 from "@components/organisms/appBar";

interface ChipData {
  key: number;
  label: string;
}

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const NoneSidebarLayout = ({children}) => {
  const [open, setOpen] = useState(false);
  const [chipData, setChipData] = useState<ChipData[]>([
    {key: 0, label: '30대'},
    {key: 1, label: '남자'},
    {key: 2, label: '비만'},
    {key: 3, label: '당뇨'},
    {key: 4, label: '민감한장'},
    {key: 5, label: '설사'},
    {key: 6, label: '고혈압'},
    {key: 7, label: '여자'},
  ])


  return (
    <Box sx={{display: 'flex'}}>
      <AppBarType1 children={children}/>

      <Box sx={{
        flexGrow: 1,
        mt: 12,
        px: 3,
        pb: 5.
      }}>
        {children}
      </Box>
    </Box>
  );
};

export const getNoneSidebarLayout = (page) => <NoneSidebarLayout>{page}</NoneSidebarLayout>;

export default NoneSidebarLayout;
