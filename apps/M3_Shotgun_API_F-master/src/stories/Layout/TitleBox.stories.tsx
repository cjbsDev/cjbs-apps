import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SectionTitleBox from "@src/components/text/SectionTitle";
import { Btn } from "@src/components/button/Btn";

export default {
  title: "Layout/Section",
  component: SectionTitleBox,
} as ComponentMeta<typeof SectionTitleBox>;

const Temp: ComponentStory<typeof SectionTitleBox> = (args) => (
  <SectionTitleBox {...args} />
);

export const SectionTitle = Temp.bind({});
SectionTitle.args = {
  title: "Page title",
  badge: true,
  titleClassName: "text-h4 bold",
  className: "border-b",
  rightRender: <Btn label="Right btn" />,
};
