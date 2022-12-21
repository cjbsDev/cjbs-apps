import React from "react";
import {checkBoxStyles} from "./CheckBoxStyles";

import {FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText} from "@mui/material";
import MyIcon from "@public/fonts/icon";

//const cx = classNames.bind(checksy);
interface CheckboxProps {
  groupLabel: string;
  onlyIcon?: boolean;
  row?: boolean;
  title?: string;
  data: dataProps[];
  color?: "primary" | "secondary" | "error" | "info" | "success" | "warning" | "default";
  valueSelect?: string;
  value?: string;
  setValue?: any;
  handleChange?: any;
  icon?: string;
  checkedIcon?: string;
  iconSz?: number;
  classNameLabel?: string;
  helpTxt?: string;
  theme?: "default" | "button";
  labelPlacement?: "end" | "start" | "top" | "bottom";
}

interface dataProps {
  value: string;
  label: string;
  disabled?: boolean;
  checked?: boolean;
}

const CheckBoxList = ({
  theme = "default",
  onlyIcon = false,
  groupLabel,
  row = false,
  title,
  data,
  color = "primary",
  valueSelect,
  value,
  setValue,
  handleChange,
  icon = "checkbox",
  checkedIcon = "checkbox-fill",
  iconSz = 20,
  classNameLabel,
  labelPlacement = "end",
  helpTxt,
  ...props
}: CheckboxProps) => {
  console.log("theme", theme);
  const tw = checkBoxStyles();
  const buttonClass = theme === "button" ? tw["btnwrap"] : "";
  return (
    <div>
      {onlyIcon ? (
        <>
          {data.map((item, i) => {
            return (
              <Checkbox
                key={i}
                className={`${tw["checkbutton"]}`}
                defaultChecked={item.checked ? true : false}
                disabled={item.disabled}
                color={color}
                onChange={handleChange}
                inputProps={{"aria-label": item.label}}
                icon={<MyIcon icon={icon} size={iconSz} />}
                checkedIcon={<MyIcon icon={checkedIcon} size={iconSz} />}
              />
            );
          })}
        </>
      ) : (
        <FormControl
          component="fieldset"
          variant="standard"
          //className={`${checksy[theme]}`}
        >
          {title ? <FormLabel component="legend">{title}</FormLabel> : null}
          <FormGroup row={row} {...props}>
            {data.map((item, i) => {
              return (
                <FormControlLabel
                  key={i}
                  value={item.value}
                  className={`${classNameLabel}`}
                  control={
                    <Checkbox
                      defaultChecked={item.checked ? true : false}
                      className={`${theme === "button" ? tw["checkbutton"] : ""}`}
                      disabled={item.disabled}
                      color={color}
                      inputProps={{"aria-label": item.label}}
                      onChange={handleChange}
                      icon={<MyIcon icon={icon} size={iconSz} />}
                      checkedIcon={<MyIcon icon={checkedIcon} size={iconSz} />}
                    />
                  }
                  label={item.label}
                  labelPlacement={labelPlacement}
                />
              );
            })}
          </FormGroup>
          {helpTxt ? <FormHelperText>{helpTxt}</FormHelperText> : null}
        </FormControl>
      )}
    </div>
  );
};

export default CheckBoxList;
