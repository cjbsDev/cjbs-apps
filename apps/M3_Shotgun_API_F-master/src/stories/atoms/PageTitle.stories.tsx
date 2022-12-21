import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import PageTitle from '@components/atoms/PageTitle';

export default {
  title: 'ATOMS/PageTitle',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => {
  return (
    <PageTitle {...args} />
  );
};

export const PageTitleType01 = Template.bind({});
PageTitleType01.args = {
  titleName: 'Modify Title Name',
};
