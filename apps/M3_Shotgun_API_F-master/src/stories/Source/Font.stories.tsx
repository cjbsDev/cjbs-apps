import React from "react";
import {ComponentStory, ComponentMeta} from "@storybook/react";
import Paper from "@mui/material/Paper";
import {styled} from "@mui/material/styles";
import {Box, Stack, Typography} from "@mui/material";
import SectionTitle from "@src/components/text/SectionTitle";
import {commonStyles} from "@styles/commonStyle";

export default {
  title: "Source/Typography",
  component: Typography,
} as ComponentMeta<typeof Typography>;

export const Heading = ({...args}) => {
  const headingList = [
    {
      title: "Heading",
      type: [
        {variant: "h1", sentence: "Heading 1"},
        {variant: "h2", sentence: "Heading 2"},
        {variant: "h3", sentence: "Heading 3"},
        {variant: "h4", sentence: "Heading 4"},
        {variant: "h5", sentence: "Heading 5"},
        {variant: "h6", sentence: "Heading 6"},
      ],
    },
  ];
  return (
    <Stack direction="row">
      <DataListBox data={headingList} />
    </Stack>
  );
};
Heading.args = {};

export const Subtitle = ({...args}) => {
  const subtitleList = [
    {
      title: "Subtitle",
      type: [
        {
          variant: "subtitle1",
          sentence: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        },
        {
          variant: "subtitle2",
          sentence: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        },
      ],
    },
  ];
  return (
    <Stack direction="row">
      <DataListBox data={subtitleList} />
    </Stack>
  );
};
Subtitle.args = {};

export const Body = ({...args}) => {
  const bodyList = [
    {
      title: "Body",
      type: [
        {
          variant: "body1",
          sentence: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        },
        {
          variant: "body2",
          sentence: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur",
        },
      ],
    },
  ];
  return (
    <Stack direction="row">
      <DataListBox data={bodyList} />
    </Stack>
  );
};
Body.args = {};

const DataListBox = ({data}) => {
  const tw = commonStyles({theme: "dark"});
  return (
    <div>
      {data.map((item, i) => {
        return (
          <Paper key={i} elevation={0} sx={{p: 2}}>
            <SectionTitle title={item.title} className={"bg-gray-200 py-4 px-4 mb-4"} titleClassName={"font-cjone"} />
            {item.type ? (
              <>
                {item.type.map((typeitem, i) => {
                  return (
                    <Box key={i} sx={{p: 2}} className={`${tw["bg-gray-200"]}`}>
                      <Typography variant={typeitem.variant}>
                        {typeitem.variant}. {typeitem.sentence}
                      </Typography>
                      <div className={`${tw[typeitem.variant]}`}>
                        {typeitem.variant}. {typeitem.sentence}
                      </div>
                    </Box>
                  );
                })}
              </>
            ) : null}
          </Paper>
        );
      })}
      ;
    </div>
  );
};
