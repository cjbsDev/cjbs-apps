import React from "react";
import {checkBoxStyles} from "./CheckBoxStyles";

import {FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, FormHelperText, Chip, Box, Typography} from "@mui/material";
import MyIcon from "@public/fonts/icon";

import {styled} from '@mui/material/styles';

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
  count : number;
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

  const tw = checkBoxStyles();
  
  const BoxStyled = styled(Box)`
    display : flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4px;
  `

  const FormLabelStyled = styled(FormLabel)`
    height: 24px;
    font-family: Noto Sans;
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: -0.3px;
    color: black;
    margin-bottom: 8px;
  `

  const CheckboxLabelStyled = styled(FormLabel)`
    font-family: Regualr;
    font-size: 16px;
    color: black;
    text-transform: none;
    `

  const FormControlLabelStyled = styled(FormControlLabel)`
    height: 24px;
    font-family: Noto Sans;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    letter-spacing: -0.3px;
    color: black;
    text-transform: capitalize;
  `

  return (
    <Box sx={{width:'100%'}} >
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
            )
          })}
        </>
      ) : (
        <FormControl
          component="fieldset"
          variant="standard"
          sx={{width:'100%'}}
        >
          {title ? <Typography sx={{mb:'8px'}} variant='subtitle1'>{title}</Typography> : null}
          <FormGroup row={row} {...props}>
            {data.map((item, i) => {
              return (
                <BoxStyled key={i}>
                  <Box>
                    <FormControlLabelStyled
                      key={i}
                      value={item.value}
                      className={`${classNameLabel}`}
                      control={
                        <Checkbox
                          defaultChecked={item.checked ? true : false}
                          className={`${theme === "button" ? tw["checkbutton"] : ""}`}
                          disabled={item.disabled || item.count === 0}
                          color={color}
                          inputProps={{"aria-label": item.label}}
                          onChange={handleChange}
                          icon={<MyIcon icon={icon} size={iconSz} />}
                          checkedIcon={<MyIcon icon={checkedIcon} size={iconSz} />}
                        />
                      }
                      label={<CheckboxLabelStyled sx={{color: item.count === 0 ? 'gray' : 'black'}} >{item.label}</CheckboxLabelStyled>}
                      labelPlacement={labelPlacement}
                    />
                    </Box>
                    <Box>
                      <Chip size="small" label={item.count} className="bg-gray-100"/>
                    </Box>
                </BoxStyled>
              );
            })}
          </FormGroup>
          {helpTxt ? <FormHelperText>{helpTxt}</FormHelperText> : null}
        </FormControl>
      )}
    </Box>
  );
};

export default CheckBoxList;
