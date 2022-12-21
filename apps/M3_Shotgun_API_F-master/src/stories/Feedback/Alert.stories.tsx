import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {Alert} from "@src/stories/Feedback/Alert";
import iconList from "@public/fonts/selection.json";

const mapConList = iconList.icons.map(({properties}) => properties.name);

export default {
  title: "Feedback/Alert",
  component: Alert,
  argTypes: {
    iconName: {
      options: mapConList,
      control: {type: "select"},
    },
    // onClick: {action: 'clicked'},
    onClose: {action: 'clicked'}
  },
} as ComponentMeta<typeof Alert>;

const AlertTemp: ComponentStory<typeof Alert> = (args) => (
  <Alert {...args}/>
);

export const BasicAlert = AlertTemp.bind({});
BasicAlert.args = {
  severity: 'error',
  alertTitleIs: false,
  alertMessage: '메시지를 입력하세요~!~!',
  iconName: 'check',
};
