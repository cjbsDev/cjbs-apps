import React, {createContext, useContext, useState} from 'react';
import {Box, Button, Grid, IconButton} from '@mui/material';
import {GridContainer} from '@components/organisms/dataTableHeader/dataTableHeaderStyled';
import {DatatableSearchTextField} from '@src/components/cris/SearchTextField';
import StatusInfo from '@components/molecules/StatusInfo';
import PageTitle from '@components/atoms/PageTitle';
import CountNumberBesideTitle from '@components/atoms/CountNumberBesideTitle';
import {styled} from '@mui/material/styles';
import {ArrowBackIosNewRounded} from '@mui/icons-material';

const ListHeaderContext = createContext(undefined);

const useListHeaderContext = () => {
  let context = useContext(ListHeaderContext);

  if (!context) {
    throw new Error('Child components of ListHeader cannot be rendered outside the ListHeader component!');
  }

  return context;
};

const ListHeader = ({children, ...restProps}) => {
  const [toggled, setToggled] = useState(false);

  return (
    <ListHeaderContext.Provider value={{toggled, setToggled}}>
      <Grid container {...restProps}>
        {children}
      </Grid>
    </ListHeaderContext.Provider>
  );
};

const Title = ({titleName}) => {
  return (
    <Grid item>
      <PageTitle titleName={titleName} />
    </Grid>
  );
};

const TotalCount = ({totalCount}) => {
  return (
    <Grid item>
      <CountNumberBesideTitle totalCount={totalCount} />
    </Grid>
  );
};

const PrevBtn = ({prevPath}) => {
  return (
    <Grid item>
      <IconButton onClick={prevPath}>
        <ArrowBackIosNewRounded sx={{color: 'black', fontSize: 16}} />
      </IconButton>
    </Grid>
  );
};

ListHeader.Title = Title;
ListHeader.TotalCount = TotalCount;
ListHeader.PrevBtn = PrevBtn;

export default ListHeader;
