import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import iconList from "@public/fonts/selection.json"; // 예시 데이터

import MyIcon from "@public/fonts/icon";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Box} from "@mui/material";
import {styled} from "@mui/material/styles";
import {themeJeju} from "@components/variables/themeJeju";
import {commonStyles} from "@styles/commonStyle";

const mapConList = iconList.icons.map(({properties}) => properties.name);

const Item = styled(Paper)(({theme}) => ({
  ...theme.typography.body1,
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default {
  title: "Source/Icon",
  component: MyIcon,
  argTypes: {
    icon: {
      options: mapConList,
      control: {type: "radio"},
      defaultValue: "check",
    },
    color: {
      options: [themeJeju.palette.primary.main, themeJeju.palette.secondary.main],
      control: {type: "select"},
    },
  },
} as ComponentMeta<typeof MyIcon>;

const IconBtnTemp: ComponentStory<typeof MyIcon> = (btnIconargs) => <MyIcon {...btnIconargs} />;

export const SingleIcon = IconBtnTemp.bind({});
SingleIcon.args = {
  size: 40,
  color: themeJeju.palette.primary.main,
};

export const IconList = ({...args}) => {
  const tw = commonStyles({theme: "dark"});
  return (
    <Grid container spacing={2}>
      {iconList.icons.map((item, i) => {
        return (
          <Grid item key={i}>
            <Item className={`${tw["w-32"]} ${tw.flex} ${tw["h-32"]} ${tw["justify-center"]} ${tw["items-center"]}`}>
              <div>
                <MyIcon {...IconList.args} icon={item.properties.name} />
                <div className={`${tw["truncate"]} ${tw["text-xs"]} ${tw["text-xs"]}`}>{item.properties.name}</div>
              </div>
            </Item>
          </Grid>
        );
      })}
    </Grid>
  );
};
IconList.args = {
  size: 30,
};
