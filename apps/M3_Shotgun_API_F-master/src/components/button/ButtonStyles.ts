import { makeStyles } from "@mui/styles";

export const buttonStyles = makeStyles({
  btnloading: {
    "& span": {
      display: "inline-block",
      WebkitAnimation: `$anim-rotate 1.4s linear infinite`,
      animation: `$anim-rotate 1.4s linear infinite`,
      width: "15px",
      height: "15px",
    },
  },
  "@keyframes anim-rotate": {
    "0%": {
      transform: "rotate(0)",
    },
    "100%": {
      transform: "rotate(360deg)",
    },
  },
});
