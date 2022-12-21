import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import iconList from "@public/fonts/selection.json"; // 예시 데이터
import {Btn} from "@components/button/Btn";

const mapConList = iconList.icons.map(({properties}) => properties.name);
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Event/Button",
  component: Btn,
  argTypes: {
    color: {
      options: ["primary", "secondary"],
      control: {type: "select"},
    },
    startIconName: {
      options: mapConList,
      control: {type: "select"},
      defaultValue: "check",
    },
    endIconName: {
      options: mapConList,
      control: {type: "select"},
      defaultValue: "check",
    },
    backgroundColor: {control: "color"},
  },
} as ComponentMeta<typeof Btn>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const BtnTemp: ComponentStory<typeof Btn> = (args) => <Btn {...args} />;

export const DefaultBtn = BtnTemp.bind({});
DefaultBtn.args = {
  label: "Button",
  variant: "contained",
  color: "primary",
  size: "xlarge",
  startIcon: false,
  endIcon: false,
};

export const LeftIconBtn = BtnTemp.bind({});
LeftIconBtn.args = {
  label: "Button",
  variant: "contained",
  color: "primary",
  startIcon: true,
  size: "medium",
};

export const RightIconBtn = BtnTemp.bind({});
RightIconBtn.args = {
  label: "Button",
  variant: "contained",
  color: "primary",
  endIcon: true,
  size: "medium",
};

export const LoadingBtn = BtnTemp.bind({});
LoadingBtn.args = {
  label: "Button",
  variant: "contained",
  startIcon: true,
  loading: true,
  startIconName: "spinner21",
};
