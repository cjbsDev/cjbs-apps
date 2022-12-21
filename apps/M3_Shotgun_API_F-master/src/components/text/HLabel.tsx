import React from "react";

interface TxtProps {
  title: string;
  className?: string;
  weight?:
    | "thin"
    | "extralight"
    | "light"
    | "normal"
    | "medium"
    | "semibold"
    | "bold"
    | "extrabold"
    | "black";
  size?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  titleClassName?: string;
  cjfont?: boolean;
}

const HLabel = ({
  title,
  className,
  titleClassName,
  size = "h4",
  weight = "normal",
  cjfont = false,
}: TxtProps) => {
  return (
    <div className={`pb-2 ${className ? className : ""}`}>
      <div className={"flex relative"}>
        <div className={"flex flex-initial justify-center items-center"}>
          <div
            className={`mb-0 
              ${cjfont ? "font-cjone" : ""} 
              ${size ? "text-" + size : ""} 
              ${weight ? "font-" + weight : ""} 
              ${titleClassName ? titleClassName : ""}`}
          >
            {title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HLabel;
