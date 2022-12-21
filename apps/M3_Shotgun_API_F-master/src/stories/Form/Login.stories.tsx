import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import BodyTxt from "@components/text/BodyTxt";
import SectionTitle from "@src/components/text/SectionTitle";

export default {
  title: "Form/Login",
  component: BodyTxt,
} as ComponentMeta<typeof BodyTxt>;

export const LoginForm = ({ ...args }) => {
  const bodytxt = "....";
  return (
    <div>
      <SectionTitle
        title={"Login Form"}
        className={"bg-gray-200 py-4 px-4 mb-4 rounded-lg"}
        titleClassName={"font-cjone"}
      />
      <BodyTxt txt={bodytxt} txtSize={"body1"} {...LoginForm.args} />
    </div>
  );
};
LoginForm.args = {
  className: "bg-gray-100 p-4",
  txtClassName: "text-black",
};
