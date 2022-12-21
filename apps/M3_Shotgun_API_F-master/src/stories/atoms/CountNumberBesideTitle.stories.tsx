import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import CountNumberBesideTitle from '@components/atoms/CountNumberBesideTitle';

export default {
  title: 'ATOMS/CountNumberBesideTitle',
  component: CountNumberBesideTitle,
} as ComponentMeta<typeof CountNumberBesideTitle>;

const Template: ComponentStory<typeof CountNumberBesideTitle> = (args) => {
  return (
    <CountNumberBesideTitle {...args} />
  );
};

export const CountNumber = Template.bind({});
CountNumber.args = {
  totalCount: 9999,
};
