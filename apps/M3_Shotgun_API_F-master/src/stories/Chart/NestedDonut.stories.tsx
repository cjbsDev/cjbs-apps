import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import {heatMapData} from "@components/charts/data/heatMapData";
import {HeatMap} from "@components/charts/HeatMap";

export default {
  title: "Chart/HeatMap",
  component: HeatMap,
} as ComponentMeta<typeof HeatMap>;

const Temp: ComponentStory<typeof HeatMap> = (args) => <HeatMap {...args} />;

export const HeatMapTemp = Temp.bind({});
HeatMapTemp.args = {
  title: 'HeatMap',
  data: heatMapData,
};
