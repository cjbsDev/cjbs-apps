import React from 'react';
import {Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
import DataTableTitle from '@components/atoms/DataTableTitle';
import StatusInfo from '@components/molecules/StatusInfo';

const GridContainer = styled(Grid)({
  marginBottom: 15,
});

const GridItem = styled(Grid)({});

const DataTableHeader = (props) => {
  const {titleName, totalCount} = props;
  return (
    <GridContainer container>
      <GridItem item xs={6}>
        <DataTableTitle titleName={titleName} totalCount={totalCount} />
      </GridItem>
      <GridItem item xs={6}>
        <StatusInfo />
      </GridItem>
    </GridContainer>
  );
};

export default DataTableHeader;
