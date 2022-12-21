import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {data, columns} from '@src/components/datagrid/makeData';
import DataTableBase from '@components/organisms/dataTable/DataTableBase';

export default {
  title: 'DataTable/DataTableBase',
  component: DataTableBase,
} as ComponentMeta<typeof DataTableBase>;

const Template: ComponentStory<typeof DataTableBase> = (args) => <DataTableBase {...args} />;

export const DataTableStyle01 = Template.bind({});
DataTableStyle01.args = {
  data: data,
  columns: columns,
};
