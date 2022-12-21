import React, {createContext, useContext, useState} from 'react';
import {Box, Button} from '@mui/material';
import {GridContainer} from '@components/organisms/dataTableHeader/dataTableHeaderStyled';
import {DatatableSearchTextField} from '@src/components/cris/SearchTextField';
import StatusInfo from '@components/molecules/StatusInfo';
import PageTitle from '@components/atoms/PageTitle';
import CountNumberBesideTitle from '@components/atoms/CountNumberBesideTitle';
import {styled} from '@mui/material/styles';

const DataTableHeaderContext = createContext(undefined);

const TotalCountBox = styled(Box)`
  display : flex;
  align-items : flex-end;
`

const useDataTableHeaderContext = () => {
  let context = useContext(DataTableHeaderContext);

  if (!context) {
    throw new Error('Child components of DataTableHeader cannot be rendered outside the DataTableHeader component!');
  }

  return context;
};

const DataTableHeader = ({children, ...restProps}) => {
  const [toggled, setToggled] = useState(false);

  return (
    <DataTableHeaderContext.Provider value={{toggled, setToggled}}>
      <GridContainer container {...restProps}>
        {children}
      </GridContainer>
    </DataTableHeaderContext.Provider>
  );
};

const Title = ({titleName}) => {
  const {toggled} = useDataTableHeaderContext();
  return (
    <PageTitle titleName={titleName} />
  );
};

const TotalCount = ({totalCount}) => {
  return (
    <TotalCountBox>
      <CountNumberBesideTitle totalCount={totalCount} />
    </TotalCountBox>
  );
};


const BTN = ({children}) => {
  const {setToggled} = useDataTableHeaderContext();
  return (
    <>
      <Button onClick={() => setToggled(prev => !prev)}>{children}</Button>
    </>
  );
};

const ExportBtn = () => {
  return (
    <Box>
      ssss
    </Box>
  );
};

const Search = (props) => {
  const {searchWord} = props;
  return (
    <DatatableSearchTextField
      {...props}
      placeHolader={'검색'}
      searchWord={searchWord}
    />
  );
};

const StatusViewInfo = (props) => {
  return (
    <StatusInfo {...props} />
  );
};

DataTableHeader.Title = Title;
DataTableHeader.TotalCount = TotalCount;
DataTableHeader.ExportBtn = ExportBtn;
DataTableHeader.BTN = BTN;
DataTableHeader.StatusViewInfo = StatusViewInfo;
DataTableHeader.Search = Search;

export default DataTableHeader;
