import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import DataTableHeader from '@components/organisms/dataTableHeader/DataTableHeader';
import {Grid} from '@mui/material';

export default {
  title: 'Organisms/DataTableHeader',
  component: DataTableHeader,
  // subcomponents: {DataTableTitle},
} as ComponentMeta<typeof DataTableHeader>;

const Template: ComponentStory<typeof DataTableHeader> = (args) => {
  return (
    <DataTableHeader>
      <Grid item xs={6}>
        <Grid container sx={{alignItems: 'center'}}>
          <Grid item>
            <DataTableHeader.Title titleName={args.titleName} />
          </Grid>
          <Grid item>
            <DataTableHeader.TotalCount totalCount={args.totalCount} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <DataTableHeader.StatusViewInfo
          requestHdn={args.requestHdn}
          waitingHdn={args.waitingHdn}
          analyzingHdn={args.analyzingHdn}
          completeHdn={args.completeHdn}
          errorHdn={args.errorHdn}
        />
      </Grid>
    </DataTableHeader>
  );
};

export const DataTableHeaderStyled01 = Template.bind({});
DataTableHeaderStyled01.args = {
  titleName: 'Modify Title Name',
  totalCount: 9999,
  requestHdn: false,
  waitingHdn: false,
  analyzingHdn: false,
  completeHdn: false,
  errorHdn: false,
};
