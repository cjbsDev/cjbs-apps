import React from "react";
import IcoMoon from "react-icomoon";

const iconSet = require("@public/fonts/selection.json");

const MyIcon = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};

export default MyIcon;
