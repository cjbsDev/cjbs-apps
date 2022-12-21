import React from "react";
import { ComponentMeta } from "@storybook/react";
import CheckBoxList from "@components/checkbox/CheckBoxList";

export default {
  title: "Event/Check Button List",
  component: CheckBoxList,
} as ComponentMeta<typeof CheckBoxList>;

// 라벨 있는 라디오박스
const checkDataList = [
  { label: "ver 01", value: "test", checked: true, disabled: false },
  { label: "ver 02", value: "test2", checked: false, disabled: false },
  { label: "ver 03", value: "test3", checked: false, disabled: false },
  { label: "disabled", value: "test9", checked: true, disabled: true },
];
export const LabelCheck = ({ ...args }) => {
  return (
    <div className={"bg-gray-900 p-4"}>
      <CheckBoxList
        data={checkDataList}
        groupLabel={"group01"}
        title={"라벨 있는 체크박스"}
        classNameLabel={"text-gray-100"}
        {...LabelCheck.args}
      />
    </div>
  );
};
LabelCheck.args = {};

// 라벨이 오른쪽 있는 체크박스
const checkDataList2 = [
  { label: "ver 03", value: "test3", checked: true, disabled: false },
  { label: "ver 04", value: "test4", checked: false, disabled: false },
  { label: "ver 05", value: "test5", checked: false, disabled: false },
  { label: "disabled", value: "test9", checked: true, disabled: true },
];
export const RowLabel = ({ ...args }) => {
  return (
    <div className={"bg-gray-900 p-4"}>
      <CheckBoxList
        data={checkDataList2}
        row={true}
        groupLabel={"group02"}
        title={"라벨이 오른쪽 있는 체크박스"}
        classNameLabel={"text-gray-100"}
        {...RowLabel.args}
      />
    </div>
  );
};
RowLabel.args = {};

// 라벨이 없는 체크박스
const checkDataList3 = [
  { label: "ver 06", value: "test6", checked: true, disabled: false },
  { label: "ver 07", value: "test7", checked: false, disabled: false },
  { label: "ver 08", value: "test8", checked: false, disabled: false },
  { label: "disabled", value: "test9", checked: true, disabled: true },
];
export const NoLabel = ({ ...args }) => {
  return (
    <div className={"bg-gray-900 p-4"}>
      <CheckBoxList
        data={checkDataList3}
        row={true}
        onlyIcon={true}
        groupLabel={"group02"}
        title={"라벨이 없는 체크박스"}
        classNameLabel={"text-gray-100"}
        {...NoLabel.args}
      />
    </div>
  );
};
NoLabel.args = {};

// 라벨이 오른쪽 있는 체크박스
const checkDataList4 = [
  { label: "ver 10", value: "test10", checked: true, disabled: false },
  { label: "ver 11", value: "test11", checked: false, disabled: false },
  { label: "ver 12", value: "test12", checked: false, disabled: false },
  { label: "disabled", value: "test13", checked: true, disabled: true },
];
export const ThemeButton = ({ ...args }) => {
  return (
    <div className={"bg-gray-900 p-4"}>
      <CheckBoxList
        theme={"button"}
        data={checkDataList4}
        row={true}
        groupLabel={"group02"}
        title={"버튼 스타일 체크박스"}
        classNameLabel={"text-gray-100"}
        {...ThemeButton.args}
      />
    </div>
  );
};
ThemeButton.args = {};
