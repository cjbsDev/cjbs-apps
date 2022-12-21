import React from "react";

interface TxtProps {
  title: string;
  desc?: string;
  badge?: string;
  className?: string;
  titleClassName?: string;
  badgeClassName?: string;
  descClassName?: string;
  rightRender?: any;
}

const SectionTitleBox = ({
  title,
  desc,
  badge,
  className,
  titleClassName = "text-h4 bold",
  badgeClassName,
  descClassName,
  rightRender,
}: TxtProps) => {
  return (
    <div className={`pb-2 ${className}`}>
      <div className={"flex relative"}>
        <div className={"flex flex-initial justify-center items-center"}>
          <div className={`mb-0 ${titleClassName}`}>{title}</div>
          <div className={"ml-2"}>
            <div className={`text-xs ${badgeClassName}`}>{badge}</div>
          </div>
        </div>
        <div className={"absolute h-100 right-0"}>{rightRender}</div>
      </div>
      {desc ? (
        <div className={`text-sm mt-2 pb-2 ${descClassName}`}>{desc}</div>
      ) : null}
    </div>
  );
};

export default SectionTitleBox;
