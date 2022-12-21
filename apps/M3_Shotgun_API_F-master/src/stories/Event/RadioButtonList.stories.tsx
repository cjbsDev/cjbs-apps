import React, { useState } from "react";
import { ComponentMeta } from "@storybook/react";
import RadioBoxList from "@components/radiobox/RadioBoxList";

export default {
  title: "Event/Radio Button List",
  component: RadioBoxList,
} as ComponentMeta<typeof RadioBoxList>;

// 라벨 있는 라디오박스
const radioDataList = [
  { label: "ver 01", value: "test" },
  { label: "ver 02", value: "test2" },
  { label: "ver 03", value: "test3" },
];

const valueSelect = "test"; // 셀렉트 값
export const LabelRadio = ({ ...args }) => {
  const [value, setValue] = useState(valueSelect);
  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className={"bg-gray-900 p-4"}>
      <RadioBoxList
        groupLabel={"group01"}
        title={"라벨 있는 라디오박스"}
        value={value}
        setValue={setValue}
        valueSelect={valueSelect}
        handleChange={handleChange}
        classNameLabel={"text-gray-100"}
        {...LabelRadio.args}
      />
    </div>
  );
};
LabelRadio.args = {
  data: radioDataList,
  row: false,
};

// 라벨이 오른쪽 있는 라디오박스
const radioDataList2 = [
  { label: "ver 03", value: "test3" },
  { label: "ver 04", value: "test4" },
  { label: "ver 05", value: "test5" },
];
const valueSelect2 = "test3"; // 셀렉트 값
export const RowLabel = ({ ...args }) => {
  const [value, setValue] = useState(valueSelect2);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className={"bg-gray-900 p-4"}>
      <RadioBoxList
        groupLabel={"group02"}
        title={"라벨이 오른쪽 있는 라디오박스"}
        value={value}
        setValue={setValue}
        valueSelect={valueSelect2}
        handleChange={handleChange}
        classNameLabel={"text-gray-100"}
        {...RowLabel.args}
      />
    </div>
  );
};
RowLabel.args = {
  data: radioDataList2,
  row: true,
};

// 라벨이 없는 라디오박스
const radioDataList3 = [
  { label: "ver 06", value: "test6" },
  { label: "ver 07", value: "test7" },
  { label: "ver 08", value: "test8" },
];
const valueSelect3 = "test3"; // 셀렉트 값
export const NoLabel = ({ ...args }) => {
  const [value, setValue] = useState(valueSelect3);

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log(event.target.value);
  };
  return (
    <div className={"bg-gray-900 p-4"}>
      <RadioBoxList
        groupLabel={"group02"}
        title={"라벨이 없는 라디오박스"}
        value={value}
        setValue={setValue}
        valueSelect={valueSelect3}
        handleChange={handleChange}
        classNameLabel={"text-gray-100"}
        {...NoLabel.args}
      />
    </div>
  );
};
NoLabel.args = {
  data: radioDataList3,
  row: true,
  onlyIcon: true,
};
