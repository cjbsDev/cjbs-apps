import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import StatusInfo from '@components/molecules/StatusInfo';

export default {
  title: 'Molecules/StatusInfo',
  component: StatusInfo,
} as ComponentMeta<typeof StatusInfo>;

const Template: ComponentStory<typeof StatusInfo> = (args) => {
  return (
    <StatusInfo {...args} />
  );
};

export const Default = Template.bind({});
Default.args = {
  requestHdn: false,
  waitingHdn: false,
  analyzingHdn: false,
  completeHdn: false,
  errorHdn: false,
};
