import React from "react";

interface TxtProps {
  txt: string;
  txtSize?: "body1" | "body2";
  className?: string;
  txtClassName?: string;
}

const BodyTxt = ({
  txt,
  className,
  txtClassName,
  txtSize = "body1",
}: TxtProps) => {
  return (
    <div className={`${className}`}>
      <div className={"flex relative"}>
        <div className={"flex flex-initial justify-center items-center"}>
          <div className={`${"text-" + txtSize} ${txtClassName}`}>{txt}</div>
        </div>
      </div>
    </div>
  );
};

export default BodyTxt;
