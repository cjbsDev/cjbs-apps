import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import iconList from "@public/fonts/selection.json"; // 예시 데이터
import { IconBtn } from "@components/button/IconBtn";

const mapConList = iconList.icons.map(({ properties }) => properties.name);

console.log("mapConList", mapConList);

export default {
  title: "Event/Icon Button",
  component: IconBtn,
  argTypes: {
    icon: {
      options: mapConList,
      control: { type: "select" },
      defaultValue: "check",
    },
    backgroundColor: { control: "color" },
    borderRadius: { control: "number" },
  },
} as ComponentMeta<typeof IconBtn>;

const IconBtnTemp: ComponentStory<typeof IconBtn> = (args) => (
  <IconBtn {...args} />
);

export const IconButton = IconBtnTemp.bind({});
IconButton.args = {
  iconSize: 40,
  icon: "check",
  color: "primary",
};
