import React from "react";
import {FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, FormHelperText} from "@mui/material";
import MyIcon from "@public/fonts/icon";

interface RadioProps {
  groupLabel: string;
  onlyIcon?: boolean;
  row?: boolean;
  title?: string;
  data: dataProps[];
  defaultValue?: string;
  valueSelect?: string;
  value?: string;
  setValue?: any;
  handleChange?: any;
  icon?: string;
  checkedIcon?: string;
  iconSz?: number;
  classNameLabel?: string;
  helpTxt?: string;
}

interface dataProps {
  value: string;
  label: string;
}

const RadioBoxList = ({
  onlyIcon = false,
  groupLabel,
  row = false,
  title,
  data,
  defaultValue,
  valueSelect,
  value,
  setValue,
  handleChange,
  icon = "radio-button",
  checkedIcon = "radio-button-fill",
  iconSz = 20,
  classNameLabel,
  helpTxt,
  ...props
}: RadioProps) => {
  return (
    <>
      {onlyIcon ? (
        <>
          {data.map((item, i) => {
            return (
              <Radio
                key={i}
                checked={value === item.value}
                onChange={handleChange}
                value={item.value}
                name="radio-buttons"
                inputProps={{"aria-label": item.label}}
                checkedIcon={<MyIcon icon={checkedIcon} size={iconSz} />}
                icon={<MyIcon icon={icon} size={iconSz} />}
              />
            );
          })}
        </>
      ) : (
        <FormControl component="fieldset">
          {title ? <FormLabel component="legend">{title}</FormLabel> : null}
          <RadioGroup
            aria-label={groupLabel}
            defaultValue={defaultValue}
            value={value}
            name="radio-buttons-group"
            onChange={handleChange}
            row={row}
            {...props}
          >
            {data.map((item, i) => {
              return (
                <FormControlLabel
                  key={i}
                  value={item.value}
                  className={classNameLabel}
                  control={<Radio checkedIcon={<MyIcon icon={checkedIcon} size={iconSz} />} icon={<MyIcon icon={icon} size={iconSz} />} />}
                  label={item.label}
                />
              );
            })}
          </RadioGroup>
          {helpTxt ? <FormHelperText>{helpTxt}</FormHelperText> : null}
        </FormControl>
      )}
    </>
  );
};

export default RadioBoxList;
