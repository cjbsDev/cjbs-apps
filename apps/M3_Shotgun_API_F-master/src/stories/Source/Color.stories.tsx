import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import MyIcon from "@public/fonts/icon";

import {Stack, Typography} from "@mui/material";

const colorThemeList = [{name: "primary"}, {name: "secondary"}, {name: "gray-500"}];

export default {
  title: "Source/Color",

  component: Typography,
} as ComponentMeta<typeof Typography>;

const IconTemp: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const ColorList = IconTemp.bind({});
ColorList.args = {};
ColorList.decorators = [
  () => (
    <Stack direction="row" className={"flex-wrap text-center justify-center items-center"}>
      {colorThemeList.map((item, i) => {
        return (
          <div key={i} className={"mb-2 w-32 py-4 mr-2 text-" + item.name}>
            <MyIcon color={"text-" + item.name} icon={"radio-button-fill"} size={40} />
            <Typography variant={"body1"} color={item.name}>
              {item.name}
            </Typography>
          </div>
        );
      })}
    </Stack>
  ),
];
