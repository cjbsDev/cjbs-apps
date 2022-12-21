import {makeStyles} from '@mui/styles';
import {themeJeju} from '@src/components/variables/themeJeju';
import {default as dfstyle} from '@components/variables/tokens.json';

const theme = themeJeju;

const themeColor = theme.palette;
const themeFont = theme.typography;
const themeJson = dfstyle.global;
const stateHoverC = 'Contained Hover Background';

interface StyleProps {
  theme: 'main' | 'light' | 'dark' | string;
}

export const commonStyles = makeStyles(() => ({
  cjtitfont: {
    fontFamily: themeFont.h1.fontFamily,
  },
  'text-primary': (props: StyleProps) => ({
    color: themeColor.primary[props.theme],
  }),
  'text-secondary': (props: StyleProps) => ({
    color: themeColor.secondary[props.theme],
  }),
  'text-info': (props: StyleProps) => ({
    color: themeColor.info[props.theme],
  }),
  'text-error': (props: StyleProps) => ({
    color: themeColor.error[props.theme],
  }),
  'text-warning': (props: StyleProps) => ({
    color: themeColor.warning[props.theme],
  }),
  'text-success': (props: StyleProps) => ({
    color: themeColor.success[props.theme],
  }),
  // text gray
  'text-gray-900': {
    color: themeColor.grey[900],
  },
  'text-gray-800': {
    color: themeColor.grey[800],
  },
  'text-gray-700': {
    color: themeColor.grey[700],
  },
  'text-gray-600': {
    color: themeColor.grey[600],
  },
  'text-gray-500': {
    color: themeColor.grey[500],
  },
  'text-gray-400': {
    color: themeColor.grey[400],
  },
  'text-gray-300': {
    color: themeColor.grey[300],
  },
  'text-gray-200': {
    color: themeColor.grey[200],
  },
  'text-gray-100': {
    color: themeColor.grey[100],
  },
  'text-gray-50': {
    color: themeColor.grey[50],
  },
  'bg-primary': (props: StyleProps) => ({
    backgroundColor: themeColor.primary[props.theme],
  }),
  'bg-secondary': (props: StyleProps) => ({
    backgroundColor: themeColor.secondary[props.theme],
  }),
  'bg-info': (props: StyleProps) => ({
    backgroundColor: themeColor.info[props.theme],
  }),
  'bg-error': (props: StyleProps) => ({
    backgroundColor: themeColor.error[props.theme],
  }),
  'bg-warning': (props: StyleProps) => ({
    backgroundColor: themeColor.warning[props.theme],
  }),
  'bg-success': (props: StyleProps) => ({
    backgroundColor: themeColor.success[props.theme],
  }),
  // hover
  'hover:bg-primary': {
    '&:hover': {
      backgroundColor: themeJson.Primary.States[stateHoverC].value,
    },
  },
  // bg gray
  'bg-gray-900': {
    backgroundColor: themeColor.grey[900],
  },
  'bg-gray-800': {
    backgroundColor: themeColor.grey[800],
  },
  'bg-gray-700': {
    backgroundColor: themeColor.grey[700],
  },
  'bg-gray-600': {
    backgroundColor: themeColor.grey[600],
  },
  'bg-gray-500': {
    backgroundColor: themeColor.grey[500],
  },
  'bg-gray-400': {
    backgroundColor: themeColor.grey[400],
  },
  'bg-gray-300': {
    backgroundColor: themeColor.grey[300],
  },
  'bg-gray-200': {
    backgroundColor: themeColor.grey[200],
  },
  'bg-gray-100': {
    backgroundColor: themeColor.grey[100],
  },
  'bg-gray-50': {
    backgroundColor: themeColor.grey[50],
  },
  // text
  h1: {
    fontSize: themeFont.h1.fontSize,
    fontFamily: themeFont.h1.fontFamily,
    fontWeight: themeFont.h1.fontWeight,
    lineHeight: themeFont.h1.lineHeight,
    letterSpacing: themeFont.h1.letterSpacing,
  },
  h2: {
    fontSize: themeFont.h2.fontSize,
    fontFamily: themeFont.h2.fontFamily,
    fontWeight: themeFont.h2.fontWeight,
    lineHeight: themeFont.h2.lineHeight,
    letterSpacing: themeFont.h2.letterSpacing,
  },
  h3: {
    fontSize: themeFont.h3.fontSize,
    fontFamily: themeFont.h3.fontFamily,
    fontWeight: themeFont.h3.fontWeight,
    lineHeight: themeFont.h3.lineHeight,
    letterSpacing: themeFont.h3.letterSpacing,
  },
  h4: {
    fontSize: themeFont.h4.fontSize,
    fontFamily: themeFont.h4.fontFamily,
    fontWeight: themeFont.h4.fontWeight,
    lineHeight: themeFont.h4.lineHeight,
    letterSpacing: themeFont.h4.letterSpacing,
  },
  h5: {
    fontSize: themeFont.h5.fontSize,
    fontFamily: themeFont.h5.fontFamily,
    fontWeight: themeFont.h5.fontWeight,
    lineHeight: themeFont.h5.lineHeight,
    letterSpacing: themeFont.h5.letterSpacing,
  },
  h6: {
    fontSize: themeFont.h6.fontSize,
    fontFamily: themeFont.h6.fontFamily,
    fontWeight: themeFont.h6.fontWeight,
    lineHeight: themeFont.h6.lineHeight,
    letterSpacing: themeFont.h6.letterSpacing,
  },
  subtitle1: {
    fontSize: themeFont.subtitle1.fontSize,
    fontFamily: themeFont.subtitle1.fontFamily,
    fontWeight: themeFont.subtitle1.fontWeight,
    lineHeight: themeFont.subtitle1.lineHeight,
    letterSpacing: themeFont.subtitle1.letterSpacing,
  },
  subtitle2: {
    fontSize: themeFont.subtitle2.fontSize,
    fontFamily: themeFont.subtitle2.fontFamily,
    fontWeight: themeFont.subtitle2.fontWeight,
    lineHeight: themeFont.subtitle2.lineHeight,
    letterSpacing: themeFont.subtitle2.letterSpacing,
  },
  body1: {
    fontSize: themeFont.body1.fontSize,
    fontFamily: themeFont.body1.fontFamily,
    fontWeight: themeFont.body1.fontWeight,
    lineHeight: themeFont.body1.lineHeight,
    letterSpacing: themeFont.body1.letterSpacing,
  },
  body2: {
    fontSize: themeFont.body2.fontSize,
    fontFamily: themeFont.body2.fontFamily,
    fontWeight: themeFont.body2.fontWeight,
    lineHeight: themeFont.body2.lineHeight,
    letterSpacing: themeFont.body1.letterSpacing,
  },
  'text-xs': {
    fontSize: '0.75rem',
    lineHeight: '1rem',
  },
  'text-sm': {
    fontSize: '0.875rem',
    lineHeight: '1.25rem',
  },
  'text-base': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
  },
  'text-lg': {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
  },
  'text-xl': {
    fontSize: '1.25rem',
    lineHeight: '1.75rem',
  },
  'text-2xl': {
    fontSize: '1.5rem',
    lineHeight: '2rem',
  },
  'text-3xl': {
    fontSize: '1.875rem',
    lineHeight: '2.25rem',
  },
  'text-4xl': {
    fontSize: '2.25rem',
    lineHeight: '2.5rem',
  },
  'text-5xl': {
    fontSize: '3rem',
    lineHeight: '1',
  },
  'text-6xl': {
    fontSize: '3.75rem',
    lineHeight: '1',
  },
  'text-7xl': {
    fontSize: '4.5rem',
    lineHeight: '1',
  },
  'text-8xl': {
    fontSize: '6rem',
    lineHeight: '1',
  },
  'text-9xl': {
    fontSize: '8rem',
    lineHeight: '1',
  },
  truncate: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  'text-ellipsis': {
    textOverflow: 'ellipsis',
  },
  'text-clip': {
    textOverflow: 'clip',
  },
  'justify-start': {
    justifyContent: 'flex-start',
  },
  'justify-end': {
    justifyContent: 'flex-end',
  },
  'justify-center': {
    justifyContent: 'center',
  },
  'justify-between': {
    justifyContent: 'space-between',
  },
  'justify-around': {
    justifyContent: 'space-around',
  },
  'justify-evenly': {
    justifyContent: 'space-evenly',
  },
  'justify-items-start': {
    justifyItems: 'start',
  },
  'justify-items-end': {
    justifyItems: 'end',
  },
  'justify-items-center': {
    justifyItems: 'center',
  },
  'justify-items-stretch': {
    justifyItems: 'stretch',
  },
  'justify-self-auto': {
    justifySelf: 'auto',
  },
  'justify-self-start': {
    justifySelf: 'start',
  },
  'justify-self-end': {
    justifySelf: 'end',
  },
  'justify-self-center': {
    justifySelf: 'center',
  },
  'justify-self-stretch': {
    justifySelf: 'stretch',
  },
  'content-center': {
    alignContent: 'center',
  },
  'content-start': {
    alignContent: 'flex-start',
  },
  'content-end': {
    alignContent: 'flex-end',
  },
  'content-between': {
    alignContent: 'space-between',
  },
  'content-around': {
    alignContent: 'space-around',
  },
  'content-evenly': {
    alignContent: 'space-evenly',
  },
  'items-start': {
    alignItems: 'flex-start',
  },
  'items-end': {
    alignItems: 'flex-end',
  },
  'items-center': {
    alignItems: 'center',
  },
  'items-baseline': {
    alignItems: 'baseline',
  },
  'items-stretch': {
    alignItems: 'stretch',
  },
  'self-auto': {
    alignSelf: 'auto',
  },
  'self-start': {
    alignSelf: 'flex-start',
  },
  'self-end': {
    alignSelf: 'flex-end',
  },
  'self-center': {
    alignSelf: 'center',
  },
  'self-stretch': {
    alignSelf: 'stretch',
  },
  'self-baseline': {
    alignSelf: 'baseline',
  },
  visible: {
    visibility: 'visible',
  },
  invisible: {
    visibility: 'hidden',
  },
  static: {
    position: 'static',
  },
  fixed: {
    position: 'fixed',
  },
  absolute: {
    position: 'absolute',
  },
  relative: {
    position: 'relative',
  },
  sticky: {
    position: 'sticky',
  },
  'inset-0': {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
  'inset-1': {
    top: '0.25rem',
    right: '0.25rem',
    bottom: '0.25rem',
    left: '0.25rem',
  },
  'inset-2': {
    top: '0.5rem',
    right: '0.5rem',
    bottom: '0.5rem',
    left: '0.5rem',
  },
  'inset-3': {
    top: '0.75rem',
    right: '0.75rem',
    bottom: '0.75rem',
    left: '0.75rem',
  },
  'inset-4': {
    top: '1rem',
    right: '1rem',
    bottom: '1rem',
    left: '1rem',
  },
  'inset-5': {
    top: '1.25rem',
    right: '1.25rem',
    bottom: '1.25rem',
    left: '1.25rem',
  },
  'inset-6': {
    top: '1.5rem',
    right: '1.5rem',
    bottom: '1.5rem',
    left: '1.5rem',
  },
  'inset-7': {
    top: '1.75rem',
    right: '1.75rem',
    bottom: '1.75rem',
    left: '1.75rem',
  },
  'inset-8': {
    top: '2rem',
    right: '2rem',
    bottom: '2rem',
    left: '2rem',
  },
  'inset-9': {
    top: '2.25rem',
    right: '2.25rem',
    bottom: '2.25rem',
    left: '2.25rem',
  },
  'inset-10': {
    top: '2.5rem',
    right: '2.5rem',
    bottom: '2.5rem',
    left: '2.5rem',
  },
  'inset-11': {
    top: '2.75rem',
    right: '2.75rem',
    bottom: '2.75rem',
    left: '2.75rem',
  },
  'inset-12': {
    top: '3rem',
    right: '3rem',
    bottom: '3rem',
    left: '3rem',
  },
  'inset-14': {
    top: '3.5rem',
    right: '3.5rem',
    bottom: '3.5rem',
    left: '3.5rem',
  },
  'inset-16': {
    top: '4rem',
    right: '4rem',
    bottom: '4rem',
    left: '4rem',
  },
  'inset-20': {
    top: '5rem',
    right: '5rem',
    bottom: '5rem',
    left: '5rem',
  },
  'inset-24': {
    top: '6rem',
    right: '6rem',
    bottom: '6rem',
    left: '6rem',
  },
  'inset-28': {
    top: '7rem',
    right: '7rem',
    bottom: '7rem',
    left: '7rem',
  },
  'inset-32': {
    top: '8rem',
    right: '8rem',
    bottom: '8rem',
    left: '8rem',
  },
  'inset-36': {
    top: '9rem',
    right: '9rem',
    bottom: '9rem',
    left: '9rem',
  },
  'inset-40': {
    top: '10rem',
    right: '10rem',
    bottom: '10rem',
    left: '10rem',
  },
  'inset-44': {
    top: '11rem',
    right: '11rem',
    bottom: '11rem',
    left: '11rem',
  },
  'inset-48': {
    top: '12rem',
    right: '12rem',
    bottom: '12rem',
    left: '12rem',
  },
  'inset-52': {
    top: '13rem',
    right: '13rem',
    bottom: '13rem',
    left: '13rem',
  },
  'inset-56': {
    top: '14rem',
    right: '14rem',
    bottom: '14rem',
    left: '14rem',
  },
  'inset-60': {
    top: '15rem',
    right: '15rem',
    bottom: '15rem',
    left: '15rem',
  },
  'inset-64': {
    top: '16rem',
    right: '16rem',
    bottom: '16rem',
    left: '16rem',
  },
  'inset-72': {
    top: '18rem',
    right: '18rem',
    bottom: '18rem',
    left: '18rem',
  },
  'inset-80': {
    top: '20rem',
    right: '20rem',
    bottom: '20rem',
    left: '20rem',
  },
  'inset-96': {
    top: '24rem',
    right: '24rem',
    bottom: '24rem',
    left: '24rem',
  },
  'inset-auto': {
    top: 'auto',
    right: 'auto',
    bottom: 'auto',
    left: 'auto',
  },
  'inset-px': {
    top: '1px',
    right: '1px',
    bottom: '1px',
    left: '1px',
  },
  'inset-0\\.5': {
    top: '0.125rem',
    right: '0.125rem',
    bottom: '0.125rem',
    left: '0.125rem',
  },
  'inset-1\\.5': {
    top: '0.375rem',
    right: '0.375rem',
    bottom: '0.375rem',
    left: '0.375rem',
  },
  'inset-2\\.5': {
    top: '0.625rem',
    right: '0.625rem',
    bottom: '0.625rem',
    left: '0.625rem',
  },
  'inset-3\\.5': {
    top: '0.875rem',
    right: '0.875rem',
    bottom: '0.875rem',
    left: '0.875rem',
  },
  '-inset-0': {
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
  '-inset-1': {
    top: '-0.25rem',
    right: '-0.25rem',
    bottom: '-0.25rem',
    left: '-0.25rem',
  },
  '-inset-2': {
    top: '-0.5rem',
    right: '-0.5rem',
    bottom: '-0.5rem',
    left: '-0.5rem',
  },
  '-inset-3': {
    top: '-0.75rem',
    right: '-0.75rem',
    bottom: '-0.75rem',
    left: '-0.75rem',
  },
  '-inset-4': {
    top: '-1rem',
    right: '-1rem',
    bottom: '-1rem',
    left: '-1rem',
  },
  '-inset-5': {
    top: '-1.25rem',
    right: '-1.25rem',
    bottom: '-1.25rem',
    left: '-1.25rem',
  },
  '-inset-6': {
    top: '-1.5rem',
    right: '-1.5rem',
    bottom: '-1.5rem',
    left: '-1.5rem',
  },
  '-inset-7': {
    top: '-1.75rem',
    right: '-1.75rem',
    bottom: '-1.75rem',
    left: '-1.75rem',
  },
  '-inset-8': {
    top: '-2rem',
    right: '-2rem',
    bottom: '-2rem',
    left: '-2rem',
  },
  '-inset-9': {
    top: '-2.25rem',
    right: '-2.25rem',
    bottom: '-2.25rem',
    left: '-2.25rem',
  },
  '-inset-10': {
    top: '-2.5rem',
    right: '-2.5rem',
    bottom: '-2.5rem',
    left: '-2.5rem',
  },
  '-inset-11': {
    top: '-2.75rem',
    right: '-2.75rem',
    bottom: '-2.75rem',
    left: '-2.75rem',
  },
  '-inset-12': {
    top: '-3rem',
    right: '-3rem',
    bottom: '-3rem',
    left: '-3rem',
  },
  '-inset-14': {
    top: '-3.5rem',
    right: '-3.5rem',
    bottom: '-3.5rem',
    left: '-3.5rem',
  },
  '-inset-16': {
    top: '-4rem',
    right: '-4rem',
    bottom: '-4rem',
    left: '-4rem',
  },
  '-inset-20': {
    top: '-5rem',
    right: '-5rem',
    bottom: '-5rem',
    left: '-5rem',
  },
  '-inset-24': {
    top: '-6rem',
    right: '-6rem',
    bottom: '-6rem',
    left: '-6rem',
  },
  '-inset-28': {
    top: '-7rem',
    right: '-7rem',
    bottom: '-7rem',
    left: '-7rem',
  },
  '-inset-32': {
    top: '-8rem',
    right: '-8rem',
    bottom: '-8rem',
    left: '-8rem',
  },
  '-inset-36': {
    top: '-9rem',
    right: '-9rem',
    bottom: '-9rem',
    left: '-9rem',
  },
  '-inset-40': {
    top: '-10rem',
    right: '-10rem',
    bottom: '-10rem',
    left: '-10rem',
  },
  '-inset-44': {
    top: '-11rem',
    right: '-11rem',
    bottom: '-11rem',
    left: '-11rem',
  },
  '-inset-48': {
    top: '-12rem',
    right: '-12rem',
    bottom: '-12rem',
    left: '-12rem',
  },
  '-inset-52': {
    top: '-13rem',
    right: '-13rem',
    bottom: '-13rem',
    left: '-13rem',
  },
  '-inset-56': {
    top: '-14rem',
    right: '-14rem',
    bottom: '-14rem',
    left: '-14rem',
  },
  '-inset-60': {
    top: '-15rem',
    right: '-15rem',
    bottom: '-15rem',
    left: '-15rem',
  },
  '-inset-64': {
    top: '-16rem',
    right: '-16rem',
    bottom: '-16rem',
    left: '-16rem',
  },
  '-inset-72': {
    top: '-18rem',
    right: '-18rem',
    bottom: '-18rem',
    left: '-18rem',
  },
  '-inset-80': {
    top: '-20rem',
    right: '-20rem',
    bottom: '-20rem',
    left: '-20rem',
  },
  '-inset-96': {
    top: '-24rem',
    right: '-24rem',
    bottom: '-24rem',
    left: '-24rem',
  },
  '-inset-px': {
    top: '-1px',
    right: '-1px',
    bottom: '-1px',
    left: '-1px',
  },
  '-inset-0\\.5': {
    top: '-0.125rem',
    right: '-0.125rem',
    bottom: '-0.125rem',
    left: '-0.125rem',
  },
  '-inset-1\\.5': {
    top: '-0.375rem',
    right: '-0.375rem',
    bottom: '-0.375rem',
    left: '-0.375rem',
  },
  '-inset-2\\.5': {
    top: '-0.625rem',
    right: '-0.625rem',
    bottom: '-0.625rem',
    left: '-0.625rem',
  },
  '-inset-3\\.5': {
    top: '-0.875rem',
    right: '-0.875rem',
    bottom: '-0.875rem',
    left: '-0.875rem',
  },
  'inset-1\\/2': {
    top: '50%',
    right: '50%',
    bottom: '50%',
    left: '50%',
  },
  'inset-1\\/3': {
    top: '33.333333%',
    right: '33.333333%',
    bottom: '33.333333%',
    left: '33.333333%',
  },
  'inset-2\\/3': {
    top: '66.666667%',
    right: '66.666667%',
    bottom: '66.666667%',
    left: '66.666667%',
  },
  'inset-1\\/4': {
    top: '25%',
    right: '25%',
    bottom: '25%',
    left: '25%',
  },
  'inset-2\\/4': {
    top: '50%',
    right: '50%',
    bottom: '50%',
    left: '50%',
  },
  'inset-3\\/4': {
    top: '75%',
    right: '75%',
    bottom: '75%',
    left: '75%',
  },
  'inset-full': {
    top: '100%',
    right: '100%',
    bottom: '100%',
    left: '100%',
  },
  '-inset-1\\/2': {
    top: '-50%',
    right: '-50%',
    bottom: '-50%',
    left: '-50%',
  },
  '-inset-1\\/3': {
    top: '-33.333333%',
    right: '-33.333333%',
    bottom: '-33.333333%',
    left: '-33.333333%',
  },
  '-inset-2\\/3': {
    top: '-66.666667%',
    right: '-66.666667%',
    bottom: '-66.666667%',
    left: '-66.666667%',
  },
  '-inset-1\\/4': {
    top: '-25%',
    right: '-25%',
    bottom: '-25%',
    left: '-25%',
  },
  '-inset-2\\/4': {
    top: '-50%',
    right: '-50%',
    bottom: '-50%',
    left: '-50%',
  },
  '-inset-3\\/4': {
    top: '-75%',
    right: '-75%',
    bottom: '-75%',
    left: '-75%',
  },
  '-inset-full': {
    top: '-100%',
    right: '-100%',
    bottom: '-100%',
    left: '-100%',
  },
  'inset-x-0': {
    left: '0px',
    right: '0px',
  },
  'inset-x-1': {
    left: '0.25rem',
    right: '0.25rem',
  },
  'inset-x-2': {
    left: '0.5rem',
    right: '0.5rem',
  },
  'inset-x-3': {
    left: '0.75rem',
    right: '0.75rem',
  },
  'inset-x-4': {
    left: '1rem',
    right: '1rem',
  },
  'inset-x-5': {
    left: '1.25rem',
    right: '1.25rem',
  },
  'inset-x-6': {
    left: '1.5rem',
    right: '1.5rem',
  },
  'inset-x-7': {
    left: '1.75rem',
    right: '1.75rem',
  },
  'inset-x-8': {
    left: '2rem',
    right: '2rem',
  },
  'inset-x-9': {
    left: '2.25rem',
    right: '2.25rem',
  },
  'inset-x-10': {
    left: '2.5rem',
    right: '2.5rem',
  },
  'inset-x-11': {
    left: '2.75rem',
    right: '2.75rem',
  },
  'inset-x-12': {
    left: '3rem',
    right: '3rem',
  },
  'inset-x-14': {
    left: '3.5rem',
    right: '3.5rem',
  },
  'inset-x-16': {
    left: '4rem',
    right: '4rem',
  },
  'inset-x-20': {
    left: '5rem',
    right: '5rem',
  },
  'inset-x-24': {
    left: '6rem',
    right: '6rem',
  },
  'inset-x-28': {
    left: '7rem',
    right: '7rem',
  },
  'inset-x-32': {
    left: '8rem',
    right: '8rem',
  },
  'inset-x-36': {
    left: '9rem',
    right: '9rem',
  },
  'inset-x-40': {
    left: '10rem',
    right: '10rem',
  },
  'inset-x-44': {
    left: '11rem',
    right: '11rem',
  },
  'inset-x-48': {
    left: '12rem',
    right: '12rem',
  },
  'inset-x-52': {
    left: '13rem',
    right: '13rem',
  },
  'inset-x-56': {
    left: '14rem',
    right: '14rem',
  },
  'inset-x-60': {
    left: '15rem',
    right: '15rem',
  },
  'inset-x-64': {
    left: '16rem',
    right: '16rem',
  },
  'inset-x-72': {
    left: '18rem',
    right: '18rem',
  },
  'inset-x-80': {
    left: '20rem',
    right: '20rem',
  },
  'inset-x-96': {
    left: '24rem',
    right: '24rem',
  },
  'inset-x-auto': {
    left: 'auto',
    right: 'auto',
  },
  'inset-x-px': {
    left: '1px',
    right: '1px',
  },
  'inset-x-0\\.5': {
    left: '0.125rem',
    right: '0.125rem',
  },
  'inset-x-1\\.5': {
    left: '0.375rem',
    right: '0.375rem',
  },
  'inset-x-2\\.5': {
    left: '0.625rem',
    right: '0.625rem',
  },
  'inset-x-3\\.5': {
    left: '0.875rem',
    right: '0.875rem',
  },
  '-inset-x-0': {
    left: '0px',
    right: '0px',
  },
  '-inset-x-1': {
    left: '-0.25rem',
    right: '-0.25rem',
  },
  '-inset-x-2': {
    left: '-0.5rem',
    right: '-0.5rem',
  },
  '-inset-x-3': {
    left: '-0.75rem',
    right: '-0.75rem',
  },
  '-inset-x-4': {
    left: '-1rem',
    right: '-1rem',
  },
  '-inset-x-5': {
    left: '-1.25rem',
    right: '-1.25rem',
  },
  '-inset-x-6': {
    left: '-1.5rem',
    right: '-1.5rem',
  },
  '-inset-x-7': {
    left: '-1.75rem',
    right: '-1.75rem',
  },
  '-inset-x-8': {
    left: '-2rem',
    right: '-2rem',
  },
  '-inset-x-9': {
    left: '-2.25rem',
    right: '-2.25rem',
  },
  '-inset-x-10': {
    left: '-2.5rem',
    right: '-2.5rem',
  },
  '-inset-x-11': {
    left: '-2.75rem',
    right: '-2.75rem',
  },
  '-inset-x-12': {
    left: '-3rem',
    right: '-3rem',
  },
  '-inset-x-14': {
    left: '-3.5rem',
    right: '-3.5rem',
  },
  '-inset-x-16': {
    left: '-4rem',
    right: '-4rem',
  },
  '-inset-x-20': {
    left: '-5rem',
    right: '-5rem',
  },
  '-inset-x-24': {
    left: '-6rem',
    right: '-6rem',
  },
  '-inset-x-28': {
    left: '-7rem',
    right: '-7rem',
  },
  '-inset-x-32': {
    left: '-8rem',
    right: '-8rem',
  },
  '-inset-x-36': {
    left: '-9rem',
    right: '-9rem',
  },
  '-inset-x-40': {
    left: '-10rem',
    right: '-10rem',
  },
  '-inset-x-44': {
    left: '-11rem',
    right: '-11rem',
  },
  '-inset-x-48': {
    left: '-12rem',
    right: '-12rem',
  },
  '-inset-x-52': {
    left: '-13rem',
    right: '-13rem',
  },
  '-inset-x-56': {
    left: '-14rem',
    right: '-14rem',
  },
  '-inset-x-60': {
    left: '-15rem',
    right: '-15rem',
  },
  '-inset-x-64': {
    left: '-16rem',
    right: '-16rem',
  },
  '-inset-x-72': {
    left: '-18rem',
    right: '-18rem',
  },
  '-inset-x-80': {
    left: '-20rem',
    right: '-20rem',
  },
  '-inset-x-96': {
    left: '-24rem',
    right: '-24rem',
  },
  '-inset-x-px': {
    left: '-1px',
    right: '-1px',
  },
  '-inset-x-0\\.5': {
    left: '-0.125rem',
    right: '-0.125rem',
  },
  '-inset-x-1\\.5': {
    left: '-0.375rem',
    right: '-0.375rem',
  },
  '-inset-x-2\\.5': {
    left: '-0.625rem',
    right: '-0.625rem',
  },
  '-inset-x-3\\.5': {
    left: '-0.875rem',
    right: '-0.875rem',
  },
  'inset-x-1\\/2': {
    left: '50%',
    right: '50%',
  },
  'inset-x-1\\/3': {
    left: '33.333333%',
    right: '33.333333%',
  },
  'inset-x-2\\/3': {
    left: '66.666667%',
    right: '66.666667%',
  },
  'inset-x-1\\/4': {
    left: '25%',
    right: '25%',
  },
  'inset-x-2\\/4': {
    left: '50%',
    right: '50%',
  },
  'inset-x-3\\/4': {
    left: '75%',
    right: '75%',
  },
  'inset-x-full': {
    left: '100%',
    right: '100%',
  },
  '-inset-x-1\\/2': {
    left: '-50%',
    right: '-50%',
  },
  '-inset-x-1\\/3': {
    left: '-33.333333%',
    right: '-33.333333%',
  },
  '-inset-x-2\\/3': {
    left: '-66.666667%',
    right: '-66.666667%',
  },
  '-inset-x-1\\/4': {
    left: '-25%',
    right: '-25%',
  },
  '-inset-x-2\\/4': {
    left: '-50%',
    right: '-50%',
  },
  '-inset-x-3\\/4': {
    left: '-75%',
    right: '-75%',
  },
  '-inset-x-full': {
    left: '-100%',
    right: '-100%',
  },
  'inset-y-0': {
    top: '0px',
    bottom: '0px',
  },
  'inset-y-1': {
    top: '0.25rem',
    bottom: '0.25rem',
  },
  'inset-y-2': {
    top: '0.5rem',
    bottom: '0.5rem',
  },
  'inset-y-3': {
    top: '0.75rem',
    bottom: '0.75rem',
  },
  'inset-y-4': {
    top: '1rem',
    bottom: '1rem',
  },
  'inset-y-5': {
    top: '1.25rem',
    bottom: '1.25rem',
  },
  'inset-y-6': {
    top: '1.5rem',
    bottom: '1.5rem',
  },
  'inset-y-7': {
    top: '1.75rem',
    bottom: '1.75rem',
  },
  'inset-y-8': {
    top: '2rem',
    bottom: '2rem',
  },
  'inset-y-9': {
    top: '2.25rem',
    bottom: '2.25rem',
  },
  'inset-y-10': {
    top: '2.5rem',
    bottom: '2.5rem',
  },
  'inset-y-11': {
    top: '2.75rem',
    bottom: '2.75rem',
  },
  'inset-y-12': {
    top: '3rem',
    bottom: '3rem',
  },
  'inset-y-14': {
    top: '3.5rem',
    bottom: '3.5rem',
  },
  'inset-y-16': {
    top: '4rem',
    bottom: '4rem',
  },
  'inset-y-20': {
    top: '5rem',
    bottom: '5rem',
  },
  'inset-y-24': {
    top: '6rem',
    bottom: '6rem',
  },
  'inset-y-28': {
    top: '7rem',
    bottom: '7rem',
  },
  'inset-y-32': {
    top: '8rem',
    bottom: '8rem',
  },
  'inset-y-36': {
    top: '9rem',
    bottom: '9rem',
  },
  'inset-y-40': {
    top: '10rem',
    bottom: '10rem',
  },
  'inset-y-44': {
    top: '11rem',
    bottom: '11rem',
  },
  'inset-y-48': {
    top: '12rem',
    bottom: '12rem',
  },
  'inset-y-52': {
    top: '13rem',
    bottom: '13rem',
  },
  'inset-y-56': {
    top: '14rem',
    bottom: '14rem',
  },
  'inset-y-60': {
    top: '15rem',
    bottom: '15rem',
  },
  'inset-y-64': {
    top: '16rem',
    bottom: '16rem',
  },
  'inset-y-72': {
    top: '18rem',
    bottom: '18rem',
  },
  'inset-y-80': {
    top: '20rem',
    bottom: '20rem',
  },
  'inset-y-96': {
    top: '24rem',
    bottom: '24rem',
  },
  'inset-y-auto': {
    top: 'auto',
    bottom: 'auto',
  },
  'inset-y-px': {
    top: '1px',
    bottom: '1px',
  },
  'inset-y-0\\.5': {
    top: '0.125rem',
    bottom: '0.125rem',
  },
  'inset-y-1\\.5': {
    top: '0.375rem',
    bottom: '0.375rem',
  },
  'inset-y-2\\.5': {
    top: '0.625rem',
    bottom: '0.625rem',
  },
  'inset-y-3\\.5': {
    top: '0.875rem',
    bottom: '0.875rem',
  },
  '-inset-y-0': {
    top: '0px',
    bottom: '0px',
  },
  '-inset-y-1': {
    top: '-0.25rem',
    bottom: '-0.25rem',
  },
  '-inset-y-2': {
    top: '-0.5rem',
    bottom: '-0.5rem',
  },
  '-inset-y-3': {
    top: '-0.75rem',
    bottom: '-0.75rem',
  },
  '-inset-y-4': {
    top: '-1rem',
    bottom: '-1rem',
  },
  '-inset-y-5': {
    top: '-1.25rem',
    bottom: '-1.25rem',
  },
  '-inset-y-6': {
    top: '-1.5rem',
    bottom: '-1.5rem',
  },
  '-inset-y-7': {
    top: '-1.75rem',
    bottom: '-1.75rem',
  },
  '-inset-y-8': {
    top: '-2rem',
    bottom: '-2rem',
  },
  '-inset-y-9': {
    top: '-2.25rem',
    bottom: '-2.25rem',
  },
  '-inset-y-10': {
    top: '-2.5rem',
    bottom: '-2.5rem',
  },
  '-inset-y-11': {
    top: '-2.75rem',
    bottom: '-2.75rem',
  },
  '-inset-y-12': {
    top: '-3rem',
    bottom: '-3rem',
  },
  '-inset-y-14': {
    top: '-3.5rem',
    bottom: '-3.5rem',
  },
  '-inset-y-16': {
    top: '-4rem',
    bottom: '-4rem',
  },
  '-inset-y-20': {
    top: '-5rem',
    bottom: '-5rem',
  },
  '-inset-y-24': {
    top: '-6rem',
    bottom: '-6rem',
  },
  '-inset-y-28': {
    top: '-7rem',
    bottom: '-7rem',
  },
  '-inset-y-32': {
    top: '-8rem',
    bottom: '-8rem',
  },
  '-inset-y-36': {
    top: '-9rem',
    bottom: '-9rem',
  },
  '-inset-y-40': {
    top: '-10rem',
    bottom: '-10rem',
  },
  '-inset-y-44': {
    top: '-11rem',
    bottom: '-11rem',
  },
  '-inset-y-48': {
    top: '-12rem',
    bottom: '-12rem',
  },
  '-inset-y-52': {
    top: '-13rem',
    bottom: '-13rem',
  },
  '-inset-y-56': {
    top: '-14rem',
    bottom: '-14rem',
  },
  '-inset-y-60': {
    top: '-15rem',
    bottom: '-15rem',
  },
  '-inset-y-64': {
    top: '-16rem',
    bottom: '-16rem',
  },
  '-inset-y-72': {
    top: '-18rem',
    bottom: '-18rem',
  },
  '-inset-y-80': {
    top: '-20rem',
    bottom: '-20rem',
  },
  '-inset-y-96': {
    top: '-24rem',
    bottom: '-24rem',
  },
  '-inset-y-px': {
    top: '-1px',
    bottom: '-1px',
  },
  '-inset-y-0\\.5': {
    top: '-0.125rem',
    bottom: '-0.125rem',
  },
  '-inset-y-1\\.5': {
    top: '-0.375rem',
    bottom: '-0.375rem',
  },
  '-inset-y-2\\.5': {
    top: '-0.625rem',
    bottom: '-0.625rem',
  },
  '-inset-y-3\\.5': {
    top: '-0.875rem',
    bottom: '-0.875rem',
  },
  'inset-y-1\\/2': {
    top: '50%',
    bottom: '50%',
  },
  'inset-y-1\\/3': {
    top: '33.333333%',
    bottom: '33.333333%',
  },
  'inset-y-2\\/3': {
    top: '66.666667%',
    bottom: '66.666667%',
  },
  'inset-y-1\\/4': {
    top: '25%',
    bottom: '25%',
  },
  'inset-y-2\\/4': {
    top: '50%',
    bottom: '50%',
  },
  'inset-y-3\\/4': {
    top: '75%',
    bottom: '75%',
  },
  'inset-y-full': {
    top: '100%',
    bottom: '100%',
  },
  '-inset-y-1\\/2': {
    top: '-50%',
    bottom: '-50%',
  },
  '-inset-y-1\\/3': {
    top: '-33.333333%',
    bottom: '-33.333333%',
  },
  '-inset-y-2\\/3': {
    top: '-66.666667%',
    bottom: '-66.666667%',
  },
  '-inset-y-1\\/4': {
    top: '-25%',
    bottom: '-25%',
  },
  '-inset-y-2\\/4': {
    top: '-50%',
    bottom: '-50%',
  },
  '-inset-y-3\\/4': {
    top: '-75%',
    bottom: '-75%',
  },
  '-inset-y-full': {
    top: '-100%',
    bottom: '-100%',
  },
  'top-0': {
    top: '0px',
  },
  'top-1': {
    top: '0.25rem',
  },
  'top-2': {
    top: '0.5rem',
  },
  'top-3': {
    top: '0.75rem',
  },
  'top-4': {
    top: '1rem',
  },
  'top-5': {
    top: '1.25rem',
  },
  'top-6': {
    top: '1.5rem',
  },
  'top-7': {
    top: '1.75rem',
  },
  'top-8': {
    top: '2rem',
  },
  'top-9': {
    top: '2.25rem',
  },
  'top-10': {
    top: '2.5rem',
  },
  'top-11': {
    top: '2.75rem',
  },
  'top-12': {
    top: '3rem',
  },
  'top-14': {
    top: '3.5rem',
  },
  'top-16': {
    top: '4rem',
  },
  'top-20': {
    top: '5rem',
  },
  'top-24': {
    top: '6rem',
  },
  'top-28': {
    top: '7rem',
  },
  'top-32': {
    top: '8rem',
  },
  'top-36': {
    top: '9rem',
  },
  'top-40': {
    top: '10rem',
  },
  'top-44': {
    top: '11rem',
  },
  'top-48': {
    top: '12rem',
  },
  'top-52': {
    top: '13rem',
  },
  'top-56': {
    top: '14rem',
  },
  'top-60': {
    top: '15rem',
  },
  'top-64': {
    top: '16rem',
  },
  'top-72': {
    top: '18rem',
  },
  'top-80': {
    top: '20rem',
  },
  'top-96': {
    top: '24rem',
  },
  'top-auto': {
    top: 'auto',
  },
  'top-px': {
    top: '1px',
  },
  'top-0\\.5': {
    top: '0.125rem',
  },
  'top-1\\.5': {
    top: '0.375rem',
  },
  'top-2\\.5': {
    top: '0.625rem',
  },
  'top-3\\.5': {
    top: '0.875rem',
  },
  '-top-0': {
    top: '0px',
  },
  '-top-1': {
    top: '-0.25rem',
  },
  '-top-2': {
    top: '-0.5rem',
  },
  '-top-3': {
    top: '-0.75rem',
  },
  '-top-4': {
    top: '-1rem',
  },
  '-top-5': {
    top: '-1.25rem',
  },
  '-top-6': {
    top: '-1.5rem',
  },
  '-top-7': {
    top: '-1.75rem',
  },
  '-top-8': {
    top: '-2rem',
  },
  '-top-9': {
    top: '-2.25rem',
  },
  '-top-10': {
    top: '-2.5rem',
  },
  '-top-11': {
    top: '-2.75rem',
  },
  '-top-12': {
    top: '-3rem',
  },
  '-top-14': {
    top: '-3.5rem',
  },
  '-top-16': {
    top: '-4rem',
  },
  '-top-20': {
    top: '-5rem',
  },
  '-top-24': {
    top: '-6rem',
  },
  '-top-28': {
    top: '-7rem',
  },
  '-top-32': {
    top: '-8rem',
  },
  '-top-36': {
    top: '-9rem',
  },
  '-top-40': {
    top: '-10rem',
  },
  '-top-44': {
    top: '-11rem',
  },
  '-top-48': {
    top: '-12rem',
  },
  '-top-52': {
    top: '-13rem',
  },
  '-top-56': {
    top: '-14rem',
  },
  '-top-60': {
    top: '-15rem',
  },
  '-top-64': {
    top: '-16rem',
  },
  '-top-72': {
    top: '-18rem',
  },
  '-top-80': {
    top: '-20rem',
  },
  '-top-96': {
    top: '-24rem',
  },
  '-top-px': {
    top: '-1px',
  },
  '-top-0\\.5': {
    top: '-0.125rem',
  },
  '-top-1\\.5': {
    top: '-0.375rem',
  },
  '-top-2\\.5': {
    top: '-0.625rem',
  },
  '-top-3\\.5': {
    top: '-0.875rem',
  },
  'top-1\\/2': {
    top: '50%',
  },
  'top-1\\/3': {
    top: '33.333333%',
  },
  'top-2\\/3': {
    top: '66.666667%',
  },
  'top-1\\/4': {
    top: '25%',
  },
  'top-2\\/4': {
    top: '50%',
  },
  'top-3\\/4': {
    top: '75%',
  },
  'top-full': {
    top: '100%',
  },
  '-top-1\\/2': {
    top: '-50%',
  },
  '-top-1\\/3': {
    top: '-33.333333%',
  },
  '-top-2\\/3': {
    top: '-66.666667%',
  },
  '-top-1\\/4': {
    top: '-25%',
  },
  '-top-2\\/4': {
    top: '-50%',
  },
  '-top-3\\/4': {
    top: '-75%',
  },
  '-top-full': {
    top: '-100%',
  },
  'right-0': {
    right: '0px',
  },
  'right-1': {
    right: '0.25rem',
  },
  'right-2': {
    right: '0.5rem',
  },
  'right-3': {
    right: '0.75rem',
  },
  'right-4': {
    right: '1rem',
  },
  'right-5': {
    right: '1.25rem',
  },
  'right-6': {
    right: '1.5rem',
  },
  'right-7': {
    right: '1.75rem',
  },
  'right-8': {
    right: '2rem',
  },
  'right-9': {
    right: '2.25rem',
  },
  'right-10': {
    right: '2.5rem',
  },
  'right-11': {
    right: '2.75rem',
  },
  'right-12': {
    right: '3rem',
  },
  'right-14': {
    right: '3.5rem',
  },
  'right-16': {
    right: '4rem',
  },
  'right-20': {
    right: '5rem',
  },
  'right-24': {
    right: '6rem',
  },
  'right-28': {
    right: '7rem',
  },
  'right-32': {
    right: '8rem',
  },
  'right-36': {
    right: '9rem',
  },
  'right-40': {
    right: '10rem',
  },
  'right-44': {
    right: '11rem',
  },
  'right-48': {
    right: '12rem',
  },
  'right-52': {
    right: '13rem',
  },
  'right-56': {
    right: '14rem',
  },
  'right-60': {
    right: '15rem',
  },
  'right-64': {
    right: '16rem',
  },
  'right-72': {
    right: '18rem',
  },
  'right-80': {
    right: '20rem',
  },
  'right-96': {
    right: '24rem',
  },
  'right-auto': {
    right: 'auto',
  },
  'right-px': {
    right: '1px',
  },
  'right-0\\.5': {
    right: '0.125rem',
  },
  'right-1\\.5': {
    right: '0.375rem',
  },
  'right-2\\.5': {
    right: '0.625rem',
  },
  'right-3\\.5': {
    right: '0.875rem',
  },
  '-right-0': {
    right: '0px',
  },
  '-right-1': {
    right: '-0.25rem',
  },
  '-right-2': {
    right: '-0.5rem',
  },
  '-right-3': {
    right: '-0.75rem',
  },
  '-right-4': {
    right: '-1rem',
  },
  '-right-5': {
    right: '-1.25rem',
  },
  '-right-6': {
    right: '-1.5rem',
  },
  '-right-7': {
    right: '-1.75rem',
  },
  '-right-8': {
    right: '-2rem',
  },
  '-right-9': {
    right: '-2.25rem',
  },
  '-right-10': {
    right: '-2.5rem',
  },
  '-right-11': {
    right: '-2.75rem',
  },
  '-right-12': {
    right: '-3rem',
  },
  '-right-14': {
    right: '-3.5rem',
  },
  '-right-16': {
    right: '-4rem',
  },
  '-right-20': {
    right: '-5rem',
  },
  '-right-24': {
    right: '-6rem',
  },
  '-right-28': {
    right: '-7rem',
  },
  '-right-32': {
    right: '-8rem',
  },
  '-right-36': {
    right: '-9rem',
  },
  '-right-40': {
    right: '-10rem',
  },
  '-right-44': {
    right: '-11rem',
  },
  '-right-48': {
    right: '-12rem',
  },
  '-right-52': {
    right: '-13rem',
  },
  '-right-56': {
    right: '-14rem',
  },
  '-right-60': {
    right: '-15rem',
  },
  '-right-64': {
    right: '-16rem',
  },
  '-right-72': {
    right: '-18rem',
  },
  '-right-80': {
    right: '-20rem',
  },
  '-right-96': {
    right: '-24rem',
  },
  '-right-px': {
    right: '-1px',
  },
  '-right-0\\.5': {
    right: '-0.125rem',
  },
  '-right-1\\.5': {
    right: '-0.375rem',
  },
  '-right-2\\.5': {
    right: '-0.625rem',
  },
  '-right-3\\.5': {
    right: '-0.875rem',
  },
  'right-1\\/2': {
    right: '50%',
  },
  'right-1\\/3': {
    right: '33.333333%',
  },
  'right-2\\/3': {
    right: '66.666667%',
  },
  'right-1\\/4': {
    right: '25%',
  },
  'right-2\\/4': {
    right: '50%',
  },
  'right-3\\/4': {
    right: '75%',
  },
  'right-full': {
    right: '100%',
  },
  '-right-1\\/2': {
    right: '-50%',
  },
  '-right-1\\/3': {
    right: '-33.333333%',
  },
  '-right-2\\/3': {
    right: '-66.666667%',
  },
  '-right-1\\/4': {
    right: '-25%',
  },
  '-right-2\\/4': {
    right: '-50%',
  },
  '-right-3\\/4': {
    right: '-75%',
  },
  '-right-full': {
    right: '-100%',
  },
  'bottom-0': {
    bottom: '0px',
  },
  'bottom-1': {
    bottom: '0.25rem',
  },
  'bottom-2': {
    bottom: '0.5rem',
  },
  'bottom-3': {
    bottom: '0.75rem',
  },
  'bottom-4': {
    bottom: '1rem',
  },
  'bottom-5': {
    bottom: '1.25rem',
  },
  'bottom-6': {
    bottom: '1.5rem',
  },
  'bottom-7': {
    bottom: '1.75rem',
  },
  'bottom-8': {
    bottom: '2rem',
  },
  'bottom-9': {
    bottom: '2.25rem',
  },
  'bottom-10': {
    bottom: '2.5rem',
  },
  'bottom-11': {
    bottom: '2.75rem',
  },
  'bottom-12': {
    bottom: '3rem',
  },
  'bottom-14': {
    bottom: '3.5rem',
  },
  'bottom-16': {
    bottom: '4rem',
  },
  'bottom-20': {
    bottom: '5rem',
  },
  'bottom-24': {
    bottom: '6rem',
  },
  'bottom-28': {
    bottom: '7rem',
  },
  'bottom-32': {
    bottom: '8rem',
  },
  'bottom-36': {
    bottom: '9rem',
  },
  'bottom-40': {
    bottom: '10rem',
  },
  'bottom-44': {
    bottom: '11rem',
  },
  'bottom-48': {
    bottom: '12rem',
  },
  'bottom-52': {
    bottom: '13rem',
  },
  'bottom-56': {
    bottom: '14rem',
  },
  'bottom-60': {
    bottom: '15rem',
  },
  'bottom-64': {
    bottom: '16rem',
  },
  'bottom-72': {
    bottom: '18rem',
  },
  'bottom-80': {
    bottom: '20rem',
  },
  'bottom-96': {
    bottom: '24rem',
  },
  'bottom-auto': {
    bottom: 'auto',
  },
  'bottom-px': {
    bottom: '1px',
  },
  'bottom-0\\.5': {
    bottom: '0.125rem',
  },
  'bottom-1\\.5': {
    bottom: '0.375rem',
  },
  'bottom-2\\.5': {
    bottom: '0.625rem',
  },
  'bottom-3\\.5': {
    bottom: '0.875rem',
  },
  '-bottom-0': {
    bottom: '0px',
  },
  '-bottom-1': {
    bottom: '-0.25rem',
  },
  '-bottom-2': {
    bottom: '-0.5rem',
  },
  '-bottom-3': {
    bottom: '-0.75rem',
  },
  '-bottom-4': {
    bottom: '-1rem',
  },
  '-bottom-5': {
    bottom: '-1.25rem',
  },
  '-bottom-6': {
    bottom: '-1.5rem',
  },
  '-bottom-7': {
    bottom: '-1.75rem',
  },
  '-bottom-8': {
    bottom: '-2rem',
  },
  '-bottom-9': {
    bottom: '-2.25rem',
  },
  '-bottom-10': {
    bottom: '-2.5rem',
  },
  '-bottom-11': {
    bottom: '-2.75rem',
  },
  '-bottom-12': {
    bottom: '-3rem',
  },
  '-bottom-14': {
    bottom: '-3.5rem',
  },
  '-bottom-16': {
    bottom: '-4rem',
  },
  '-bottom-20': {
    bottom: '-5rem',
  },
  '-bottom-24': {
    bottom: '-6rem',
  },
  '-bottom-28': {
    bottom: '-7rem',
  },
  '-bottom-32': {
    bottom: '-8rem',
  },
  '-bottom-36': {
    bottom: '-9rem',
  },
  '-bottom-40': {
    bottom: '-10rem',
  },
  '-bottom-44': {
    bottom: '-11rem',
  },
  '-bottom-48': {
    bottom: '-12rem',
  },
  '-bottom-52': {
    bottom: '-13rem',
  },
  '-bottom-56': {
    bottom: '-14rem',
  },
  '-bottom-60': {
    bottom: '-15rem',
  },
  '-bottom-64': {
    bottom: '-16rem',
  },
  '-bottom-72': {
    bottom: '-18rem',
  },
  '-bottom-80': {
    bottom: '-20rem',
  },
  '-bottom-96': {
    bottom: '-24rem',
  },
  '-bottom-px': {
    bottom: '-1px',
  },
  '-bottom-0\\.5': {
    bottom: '-0.125rem',
  },
  '-bottom-1\\.5': {
    bottom: '-0.375rem',
  },
  '-bottom-2\\.5': {
    bottom: '-0.625rem',
  },
  '-bottom-3\\.5': {
    bottom: '-0.875rem',
  },
  'bottom-1\\/2': {
    bottom: '50%',
  },
  'bottom-1\\/3': {
    bottom: '33.333333%',
  },
  'bottom-2\\/3': {
    bottom: '66.666667%',
  },
  'bottom-1\\/4': {
    bottom: '25%',
  },
  'bottom-2\\/4': {
    bottom: '50%',
  },
  'bottom-3\\/4': {
    bottom: '75%',
  },
  'bottom-full': {
    bottom: '100%',
  },
  '-bottom-1\\/2': {
    bottom: '-50%',
  },
  '-bottom-1\\/3': {
    bottom: '-33.333333%',
  },
  '-bottom-2\\/3': {
    bottom: '-66.666667%',
  },
  '-bottom-1\\/4': {
    bottom: '-25%',
  },
  '-bottom-2\\/4': {
    bottom: '-50%',
  },
  '-bottom-3\\/4': {
    bottom: '-75%',
  },
  '-bottom-full': {
    bottom: '-100%',
  },
  'left-0': {
    left: '0px',
  },
  'left-1': {
    left: '0.25rem',
  },
  'left-2': {
    left: '0.5rem',
  },
  'left-3': {
    left: '0.75rem',
  },
  'left-4': {
    left: '1rem',
  },
  'left-5': {
    left: '1.25rem',
  },
  'left-6': {
    left: '1.5rem',
  },
  'left-7': {
    left: '1.75rem',
  },
  'left-8': {
    left: '2rem',
  },
  'left-9': {
    left: '2.25rem',
  },
  'left-10': {
    left: '2.5rem',
  },
  'left-11': {
    left: '2.75rem',
  },
  'left-12': {
    left: '3rem',
  },
  'left-14': {
    left: '3.5rem',
  },
  'left-16': {
    left: '4rem',
  },
  'left-20': {
    left: '5rem',
  },
  'left-24': {
    left: '6rem',
  },
  'left-28': {
    left: '7rem',
  },
  'left-32': {
    left: '8rem',
  },
  'left-36': {
    left: '9rem',
  },
  'left-40': {
    left: '10rem',
  },
  'left-44': {
    left: '11rem',
  },
  'left-48': {
    left: '12rem',
  },
  'left-52': {
    left: '13rem',
  },
  'left-56': {
    left: '14rem',
  },
  'left-60': {
    left: '15rem',
  },
  'left-64': {
    left: '16rem',
  },
  'left-72': {
    left: '18rem',
  },
  'left-80': {
    left: '20rem',
  },
  'left-96': {
    left: '24rem',
  },
  'left-auto': {
    left: 'auto',
  },
  'left-px': {
    left: '1px',
  },
  'left-0\\.5': {
    left: '0.125rem',
  },
  'left-1\\.5': {
    left: '0.375rem',
  },
  'left-2\\.5': {
    left: '0.625rem',
  },
  'left-3\\.5': {
    left: '0.875rem',
  },
  '-left-0': {
    left: '0px',
  },
  '-left-1': {
    left: '-0.25rem',
  },
  '-left-2': {
    left: '-0.5rem',
  },
  '-left-3': {
    left: '-0.75rem',
  },
  '-left-4': {
    left: '-1rem',
  },
  '-left-5': {
    left: '-1.25rem',
  },
  '-left-6': {
    left: '-1.5rem',
  },
  '-left-7': {
    left: '-1.75rem',
  },
  '-left-8': {
    left: '-2rem',
  },
  '-left-9': {
    left: '-2.25rem',
  },
  '-left-10': {
    left: '-2.5rem',
  },
  '-left-11': {
    left: '-2.75rem',
  },
  '-left-12': {
    left: '-3rem',
  },
  '-left-14': {
    left: '-3.5rem',
  },
  '-left-16': {
    left: '-4rem',
  },
  '-left-20': {
    left: '-5rem',
  },
  '-left-24': {
    left: '-6rem',
  },
  '-left-28': {
    left: '-7rem',
  },
  '-left-32': {
    left: '-8rem',
  },
  '-left-36': {
    left: '-9rem',
  },
  '-left-40': {
    left: '-10rem',
  },
  '-left-44': {
    left: '-11rem',
  },
  '-left-48': {
    left: '-12rem',
  },
  '-left-52': {
    left: '-13rem',
  },
  '-left-56': {
    left: '-14rem',
  },
  '-left-60': {
    left: '-15rem',
  },
  '-left-64': {
    left: '-16rem',
  },
  '-left-72': {
    left: '-18rem',
  },
  '-left-80': {
    left: '-20rem',
  },
  '-left-96': {
    left: '-24rem',
  },
  '-left-px': {
    left: '-1px',
  },
  '-left-0\\.5': {
    left: '-0.125rem',
  },
  '-left-1\\.5': {
    left: '-0.375rem',
  },
  '-left-2\\.5': {
    left: '-0.625rem',
  },
  '-left-3\\.5': {
    left: '-0.875rem',
  },
  'left-1\\/2': {
    left: '50%',
  },
  'left-1\\/3': {
    left: '33.333333%',
  },
  'left-2\\/3': {
    left: '66.666667%',
  },
  'left-1\\/4': {
    left: '25%',
  },
  'left-2\\/4': {
    left: '50%',
  },
  'left-3\\/4': {
    left: '75%',
  },
  'left-full': {
    left: '100%',
  },
  '-left-1\\/2': {
    left: '-50%',
  },
  '-left-1\\/3': {
    left: '-33.333333%',
  },
  '-left-2\\/3': {
    left: '-66.666667%',
  },
  '-left-1\\/4': {
    left: '-25%',
  },
  '-left-2\\/4': {
    left: '-50%',
  },
  '-left-3\\/4': {
    left: '-75%',
  },
  '-left-full': {
    left: '-100%',
  },
  isolate: {
    isolation: 'isolate',
  },
  'isolation-auto': {
    isolation: 'auto',
  },
  'z-0': {
    zIndex: '0',
  },
  'z-10': {
    zIndex: '10',
  },
  'z-20': {
    zIndex: '20',
  },
  'z-30': {
    zIndex: '30',
  },
  'z-40': {
    zIndex: '40',
  },
  'z-50': {
    zIndex: '50',
  },
  'z-auto': {
    zIndex: 'auto',
  },
  'order-1': {
    order: '1',
  },
  'order-2': {
    order: '2',
  },
  'order-3': {
    order: '3',
  },
  'order-4': {
    order: '4',
  },
  'order-5': {
    order: '5',
  },
  'order-6': {
    order: '6',
  },
  'order-7': {
    order: '7',
  },
  'order-8': {
    order: '8',
  },
  'order-9': {
    order: '9',
  },
  'order-10': {
    order: '10',
  },
  'order-11': {
    order: '11',
  },
  'order-12': {
    order: '12',
  },
  'order-first': {
    order: '-9999',
  },
  'order-last': {
    order: '9999',
  },
  'order-none': {
    order: '0',
  },
  'col-auto': {
    gridColumn: 'auto',
  },
  'col-span-1': {
    gridColumn: 'span 1 / span 1',
  },
  'col-span-2': {
    gridColumn: 'span 2 / span 2',
  },
  'col-span-3': {
    gridColumn: 'span 3 / span 3',
  },
  'col-span-4': {
    gridColumn: 'span 4 / span 4',
  },
  'col-span-5': {
    gridColumn: 'span 5 / span 5',
  },
  'col-span-6': {
    gridColumn: 'span 6 / span 6',
  },
  'col-span-7': {
    gridColumn: 'span 7 / span 7',
  },
  'col-span-8': {
    gridColumn: 'span 8 / span 8',
  },
  'col-span-9': {
    gridColumn: 'span 9 / span 9',
  },
  'col-span-10': {
    gridColumn: 'span 10 / span 10',
  },
  'col-span-11': {
    gridColumn: 'span 11 / span 11',
  },
  'col-span-12': {
    gridColumn: 'span 12 / span 12',
  },
  'col-span-full': {
    gridColumn: '1 / -1',
  },
  'col-start-1': {
    gridColumnStart: '1',
  },
  'col-start-2': {
    gridColumnStart: '2',
  },
  'col-start-3': {
    gridColumnStart: '3',
  },
  'col-start-4': {
    gridColumnStart: '4',
  },
  'col-start-5': {
    gridColumnStart: '5',
  },
  'col-start-6': {
    gridColumnStart: '6',
  },
  'col-start-7': {
    gridColumnStart: '7',
  },
  'col-start-8': {
    gridColumnStart: '8',
  },
  'col-start-9': {
    gridColumnStart: '9',
  },
  'col-start-10': {
    gridColumnStart: '10',
  },
  'col-start-11': {
    gridColumnStart: '11',
  },
  'col-start-12': {
    gridColumnStart: '12',
  },
  'col-start-13': {
    gridColumnStart: '13',
  },
  'col-start-auto': {
    gridColumnStart: 'auto',
  },
  'col-end-1': {
    gridColumnEnd: '1',
  },
  'col-end-2': {
    gridColumnEnd: '2',
  },
  'col-end-3': {
    gridColumnEnd: '3',
  },
  'col-end-4': {
    gridColumnEnd: '4',
  },
  'col-end-5': {
    gridColumnEnd: '5',
  },
  'col-end-6': {
    gridColumnEnd: '6',
  },
  'col-end-7': {
    gridColumnEnd: '7',
  },
  'col-end-8': {
    gridColumnEnd: '8',
  },
  'col-end-9': {
    gridColumnEnd: '9',
  },
  'col-end-10': {
    gridColumnEnd: '10',
  },
  'col-end-11': {
    gridColumnEnd: '11',
  },
  'col-end-12': {
    gridColumnEnd: '12',
  },
  'col-end-13': {
    gridColumnEnd: '13',
  },
  'col-end-auto': {
    gridColumnEnd: 'auto',
  },
  'row-auto': {
    gridRow: 'auto',
  },
  'row-span-1': {
    gridRow: 'span 1 / span 1',
  },
  'row-span-2': {
    gridRow: 'span 2 / span 2',
  },
  'row-span-3': {
    gridRow: 'span 3 / span 3',
  },
  'row-span-4': {
    gridRow: 'span 4 / span 4',
  },
  'row-span-5': {
    gridRow: 'span 5 / span 5',
  },
  'row-span-6': {
    gridRow: 'span 6 / span 6',
  },
  'row-span-full': {
    gridRow: '1 / -1',
  },
  'row-start-1': {
    gridRowStart: '1',
  },
  'row-start-2': {
    gridRowStart: '2',
  },
  'row-start-3': {
    gridRowStart: '3',
  },
  'row-start-4': {
    gridRowStart: '4',
  },
  'row-start-5': {
    gridRowStart: '5',
  },
  'row-start-6': {
    gridRowStart: '6',
  },
  'row-start-7': {
    gridRowStart: '7',
  },
  'row-start-auto': {
    gridRowStart: 'auto',
  },
  'row-end-1': {
    gridRowEnd: '1',
  },
  'row-end-2': {
    gridRowEnd: '2',
  },
  'row-end-3': {
    gridRowEnd: '3',
  },
  'row-end-4': {
    gridRowEnd: '4',
  },
  'row-end-5': {
    gridRowEnd: '5',
  },
  'row-end-6': {
    gridRowEnd: '6',
  },
  'row-end-7': {
    gridRowEnd: '7',
  },
  'row-end-auto': {
    gridRowEnd: 'auto',
  },
  'float-right': {
    cssFloat: 'right',
  },
  'float-left': {
    cssFloat: 'left',
  },
  'float-none': {
    cssFloat: 'none',
  },
  'clear-left': {
    clear: 'left',
  },
  'clear-right': {
    clear: 'right',
  },
  'clear-both': {
    clear: 'both',
  },
  'clear-none': {
    clear: 'none',
  },
  'm-0': {
    margin: '0px',
  },
  'm-1': {
    margin: '0.25rem',
  },
  'm-2': {
    margin: '0.5rem',
  },
  'm-3': {
    margin: '0.75rem',
  },
  'm-4': {
    margin: '1rem',
  },
  'm-5': {
    margin: '1.25rem',
  },
  'm-6': {
    margin: '1.5rem',
  },
  'm-7': {
    margin: '1.75rem',
  },
  'm-8': {
    margin: '2rem',
  },
  'm-9': {
    margin: '2.25rem',
  },
  'm-10': {
    margin: '2.5rem',
  },
  'm-11': {
    margin: '2.75rem',
  },
  'm-12': {
    margin: '3rem',
  },
  'm-14': {
    margin: '3.5rem',
  },
  'm-16': {
    margin: '4rem',
  },
  'm-20': {
    margin: '5rem',
  },
  'm-24': {
    margin: '6rem',
  },
  'm-28': {
    margin: '7rem',
  },
  'm-32': {
    margin: '8rem',
  },
  'm-36': {
    margin: '9rem',
  },
  'm-40': {
    margin: '10rem',
  },
  'm-44': {
    margin: '11rem',
  },
  'm-48': {
    margin: '12rem',
  },
  'm-52': {
    margin: '13rem',
  },
  'm-56': {
    margin: '14rem',
  },
  'm-60': {
    margin: '15rem',
  },
  'm-64': {
    margin: '16rem',
  },
  'm-72': {
    margin: '18rem',
  },
  'm-80': {
    margin: '20rem',
  },
  'm-96': {
    margin: '24rem',
  },
  'm-auto': {
    margin: 'auto',
  },
  'm-px': {
    margin: '1px',
  },
  'm-0\\.5': {
    margin: '0.125rem',
  },
  'm-1\\.5': {
    margin: '0.375rem',
  },
  'm-2\\.5': {
    margin: '0.625rem',
  },
  'm-3\\.5': {
    margin: '0.875rem',
  },
  '-m-0': {
    margin: '0px',
  },
  '-m-1': {
    margin: '-0.25rem',
  },
  '-m-2': {
    margin: '-0.5rem',
  },
  '-m-3': {
    margin: '-0.75rem',
  },
  '-m-4': {
    margin: '-1rem',
  },
  '-m-5': {
    margin: '-1.25rem',
  },
  '-m-6': {
    margin: '-1.5rem',
  },
  '-m-7': {
    margin: '-1.75rem',
  },
  '-m-8': {
    margin: '-2rem',
  },
  '-m-9': {
    margin: '-2.25rem',
  },
  '-m-10': {
    margin: '-2.5rem',
  },
  '-m-11': {
    margin: '-2.75rem',
  },
  '-m-12': {
    margin: '-3rem',
  },
  '-m-14': {
    margin: '-3.5rem',
  },
  '-m-16': {
    margin: '-4rem',
  },
  '-m-20': {
    margin: '-5rem',
  },
  '-m-24': {
    margin: '-6rem',
  },
  '-m-28': {
    margin: '-7rem',
  },
  '-m-32': {
    margin: '-8rem',
  },
  '-m-36': {
    margin: '-9rem',
  },
  '-m-40': {
    margin: '-10rem',
  },
  '-m-44': {
    margin: '-11rem',
  },
  '-m-48': {
    margin: '-12rem',
  },
  '-m-52': {
    margin: '-13rem',
  },
  '-m-56': {
    margin: '-14rem',
  },
  '-m-60': {
    margin: '-15rem',
  },
  '-m-64': {
    margin: '-16rem',
  },
  '-m-72': {
    margin: '-18rem',
  },
  '-m-80': {
    margin: '-20rem',
  },
  '-m-96': {
    margin: '-24rem',
  },
  '-m-px': {
    margin: '-1px',
  },
  '-m-0\\.5': {
    margin: '-0.125rem',
  },
  '-m-1\\.5': {
    margin: '-0.375rem',
  },
  '-m-2\\.5': {
    margin: '-0.625rem',
  },
  '-m-3\\.5': {
    margin: '-0.875rem',
  },
  'mx-0': {
    marginLeft: '0px',
    marginRight: '0px',
  },
  'mx-1': {
    marginLeft: '0.25rem',
    marginRight: '0.25rem',
  },
  'mx-2': {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
  },
  'mx-3': {
    marginLeft: '0.75rem',
    marginRight: '0.75rem',
  },
  'mx-4': {
    marginLeft: '1rem',
    marginRight: '1rem',
  },
  'mx-5': {
    marginLeft: '1.25rem',
    marginRight: '1.25rem',
  },
  'mx-6': {
    marginLeft: '1.5rem',
    marginRight: '1.5rem',
  },
  'mx-7': {
    marginLeft: '1.75rem',
    marginRight: '1.75rem',
  },
  'mx-8': {
    marginLeft: '2rem',
    marginRight: '2rem',
  },
  'mx-9': {
    marginLeft: '2.25rem',
    marginRight: '2.25rem',
  },
  'mx-10': {
    marginLeft: '2.5rem',
    marginRight: '2.5rem',
  },
  'mx-11': {
    marginLeft: '2.75rem',
    marginRight: '2.75rem',
  },
  'mx-12': {
    marginLeft: '3rem',
    marginRight: '3rem',
  },
  'mx-14': {
    marginLeft: '3.5rem',
    marginRight: '3.5rem',
  },
  'mx-16': {
    marginLeft: '4rem',
    marginRight: '4rem',
  },
  'mx-20': {
    marginLeft: '5rem',
    marginRight: '5rem',
  },
  'mx-24': {
    marginLeft: '6rem',
    marginRight: '6rem',
  },
  'mx-28': {
    marginLeft: '7rem',
    marginRight: '7rem',
  },
  'mx-32': {
    marginLeft: '8rem',
    marginRight: '8rem',
  },
  'mx-36': {
    marginLeft: '9rem',
    marginRight: '9rem',
  },
  'mx-40': {
    marginLeft: '10rem',
    marginRight: '10rem',
  },
  'mx-44': {
    marginLeft: '11rem',
    marginRight: '11rem',
  },
  'mx-48': {
    marginLeft: '12rem',
    marginRight: '12rem',
  },
  'mx-52': {
    marginLeft: '13rem',
    marginRight: '13rem',
  },
  'mx-56': {
    marginLeft: '14rem',
    marginRight: '14rem',
  },
  'mx-60': {
    marginLeft: '15rem',
    marginRight: '15rem',
  },
  'mx-64': {
    marginLeft: '16rem',
    marginRight: '16rem',
  },
  'mx-72': {
    marginLeft: '18rem',
    marginRight: '18rem',
  },
  'mx-80': {
    marginLeft: '20rem',
    marginRight: '20rem',
  },
  'mx-96': {
    marginLeft: '24rem',
    marginRight: '24rem',
  },
  'mx-auto': {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  'mx-px': {
    marginLeft: '1px',
    marginRight: '1px',
  },
  'mx-0\\.5': {
    marginLeft: '0.125rem',
    marginRight: '0.125rem',
  },
  'mx-1\\.5': {
    marginLeft: '0.375rem',
    marginRight: '0.375rem',
  },
  'mx-2\\.5': {
    marginLeft: '0.625rem',
    marginRight: '0.625rem',
  },
  'mx-3\\.5': {
    marginLeft: '0.875rem',
    marginRight: '0.875rem',
  },
  '-mx-0': {
    marginLeft: '0px',
    marginRight: '0px',
  },
  '-mx-1': {
    marginLeft: '-0.25rem',
    marginRight: '-0.25rem',
  },
  '-mx-2': {
    marginLeft: '-0.5rem',
    marginRight: '-0.5rem',
  },
  '-mx-3': {
    marginLeft: '-0.75rem',
    marginRight: '-0.75rem',
  },
  '-mx-4': {
    marginLeft: '-1rem',
    marginRight: '-1rem',
  },
  '-mx-5': {
    marginLeft: '-1.25rem',
    marginRight: '-1.25rem',
  },
  '-mx-6': {
    marginLeft: '-1.5rem',
    marginRight: '-1.5rem',
  },
  '-mx-7': {
    marginLeft: '-1.75rem',
    marginRight: '-1.75rem',
  },
  '-mx-8': {
    marginLeft: '-2rem',
    marginRight: '-2rem',
  },
  '-mx-9': {
    marginLeft: '-2.25rem',
    marginRight: '-2.25rem',
  },
  '-mx-10': {
    marginLeft: '-2.5rem',
    marginRight: '-2.5rem',
  },
  '-mx-11': {
    marginLeft: '-2.75rem',
    marginRight: '-2.75rem',
  },
  '-mx-12': {
    marginLeft: '-3rem',
    marginRight: '-3rem',
  },
  '-mx-14': {
    marginLeft: '-3.5rem',
    marginRight: '-3.5rem',
  },
  '-mx-16': {
    marginLeft: '-4rem',
    marginRight: '-4rem',
  },
  '-mx-20': {
    marginLeft: '-5rem',
    marginRight: '-5rem',
  },
  '-mx-24': {
    marginLeft: '-6rem',
    marginRight: '-6rem',
  },
  '-mx-28': {
    marginLeft: '-7rem',
    marginRight: '-7rem',
  },
  '-mx-32': {
    marginLeft: '-8rem',
    marginRight: '-8rem',
  },
  '-mx-36': {
    marginLeft: '-9rem',
    marginRight: '-9rem',
  },
  '-mx-40': {
    marginLeft: '-10rem',
    marginRight: '-10rem',
  },
  '-mx-44': {
    marginLeft: '-11rem',
    marginRight: '-11rem',
  },
  '-mx-48': {
    marginLeft: '-12rem',
    marginRight: '-12rem',
  },
  '-mx-52': {
    marginLeft: '-13rem',
    marginRight: '-13rem',
  },
  '-mx-56': {
    marginLeft: '-14rem',
    marginRight: '-14rem',
  },
  '-mx-60': {
    marginLeft: '-15rem',
    marginRight: '-15rem',
  },
  '-mx-64': {
    marginLeft: '-16rem',
    marginRight: '-16rem',
  },
  '-mx-72': {
    marginLeft: '-18rem',
    marginRight: '-18rem',
  },
  '-mx-80': {
    marginLeft: '-20rem',
    marginRight: '-20rem',
  },
  '-mx-96': {
    marginLeft: '-24rem',
    marginRight: '-24rem',
  },
  '-mx-px': {
    marginLeft: '-1px',
    marginRight: '-1px',
  },
  '-mx-0\\.5': {
    marginLeft: '-0.125rem',
    marginRight: '-0.125rem',
  },
  '-mx-1\\.5': {
    marginLeft: '-0.375rem',
    marginRight: '-0.375rem',
  },
  '-mx-2\\.5': {
    marginLeft: '-0.625rem',
    marginRight: '-0.625rem',
  },
  '-mx-3\\.5': {
    marginLeft: '-0.875rem',
    marginRight: '-0.875rem',
  },
  'my-0': {
    marginTop: '0px',
    marginBottom: '0px',
  },
  'my-1': {
    marginTop: '0.25rem',
    marginBottom: '0.25rem',
  },
  'my-2': {
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  'my-3': {
    marginTop: '0.75rem',
    marginBottom: '0.75rem',
  },
  'my-4': {
    marginTop: '1rem',
    marginBottom: '1rem',
  },
  'my-5': {
    marginTop: '1.25rem',
    marginBottom: '1.25rem',
  },
  'my-6': {
    marginTop: '1.5rem',
    marginBottom: '1.5rem',
  },
  'my-7': {
    marginTop: '1.75rem',
    marginBottom: '1.75rem',
  },
  'my-8': {
    marginTop: '2rem',
    marginBottom: '2rem',
  },
  'my-9': {
    marginTop: '2.25rem',
    marginBottom: '2.25rem',
  },
  'my-10': {
    marginTop: '2.5rem',
    marginBottom: '2.5rem',
  },
  'my-11': {
    marginTop: '2.75rem',
    marginBottom: '2.75rem',
  },
  'my-12': {
    marginTop: '3rem',
    marginBottom: '3rem',
  },
  'my-14': {
    marginTop: '3.5rem',
    marginBottom: '3.5rem',
  },
  'my-16': {
    marginTop: '4rem',
    marginBottom: '4rem',
  },
  'my-20': {
    marginTop: '5rem',
    marginBottom: '5rem',
  },
  'my-24': {
    marginTop: '6rem',
    marginBottom: '6rem',
  },
  'my-28': {
    marginTop: '7rem',
    marginBottom: '7rem',
  },
  'my-32': {
    marginTop: '8rem',
    marginBottom: '8rem',
  },
  'my-36': {
    marginTop: '9rem',
    marginBottom: '9rem',
  },
  'my-40': {
    marginTop: '10rem',
    marginBottom: '10rem',
  },
  'my-44': {
    marginTop: '11rem',
    marginBottom: '11rem',
  },
  'my-48': {
    marginTop: '12rem',
    marginBottom: '12rem',
  },
  'my-52': {
    marginTop: '13rem',
    marginBottom: '13rem',
  },
  'my-56': {
    marginTop: '14rem',
    marginBottom: '14rem',
  },
  'my-60': {
    marginTop: '15rem',
    marginBottom: '15rem',
  },
  'my-64': {
    marginTop: '16rem',
    marginBottom: '16rem',
  },
  'my-72': {
    marginTop: '18rem',
    marginBottom: '18rem',
  },
  'my-80': {
    marginTop: '20rem',
    marginBottom: '20rem',
  },
  'my-96': {
    marginTop: '24rem',
    marginBottom: '24rem',
  },
  'my-auto': {
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  'my-px': {
    marginTop: '1px',
    marginBottom: '1px',
  },
  'my-0\\.5': {
    marginTop: '0.125rem',
    marginBottom: '0.125rem',
  },
  'my-1\\.5': {
    marginTop: '0.375rem',
    marginBottom: '0.375rem',
  },
  'my-2\\.5': {
    marginTop: '0.625rem',
    marginBottom: '0.625rem',
  },
  'my-3\\.5': {
    marginTop: '0.875rem',
    marginBottom: '0.875rem',
  },
  '-my-0': {
    marginTop: '0px',
    marginBottom: '0px',
  },
  '-my-1': {
    marginTop: '-0.25rem',
    marginBottom: '-0.25rem',
  },
  '-my-2': {
    marginTop: '-0.5rem',
    marginBottom: '-0.5rem',
  },
  '-my-3': {
    marginTop: '-0.75rem',
    marginBottom: '-0.75rem',
  },
  '-my-4': {
    marginTop: '-1rem',
    marginBottom: '-1rem',
  },
  '-my-5': {
    marginTop: '-1.25rem',
    marginBottom: '-1.25rem',
  },
  '-my-6': {
    marginTop: '-1.5rem',
    marginBottom: '-1.5rem',
  },
  '-my-7': {
    marginTop: '-1.75rem',
    marginBottom: '-1.75rem',
  },
  '-my-8': {
    marginTop: '-2rem',
    marginBottom: '-2rem',
  },
  '-my-9': {
    marginTop: '-2.25rem',
    marginBottom: '-2.25rem',
  },
  '-my-10': {
    marginTop: '-2.5rem',
    marginBottom: '-2.5rem',
  },
  '-my-11': {
    marginTop: '-2.75rem',
    marginBottom: '-2.75rem',
  },
  '-my-12': {
    marginTop: '-3rem',
    marginBottom: '-3rem',
  },
  '-my-14': {
    marginTop: '-3.5rem',
    marginBottom: '-3.5rem',
  },
  '-my-16': {
    marginTop: '-4rem',
    marginBottom: '-4rem',
  },
  '-my-20': {
    marginTop: '-5rem',
    marginBottom: '-5rem',
  },
  '-my-24': {
    marginTop: '-6rem',
    marginBottom: '-6rem',
  },
  '-my-28': {
    marginTop: '-7rem',
    marginBottom: '-7rem',
  },
  '-my-32': {
    marginTop: '-8rem',
    marginBottom: '-8rem',
  },
  '-my-36': {
    marginTop: '-9rem',
    marginBottom: '-9rem',
  },
  '-my-40': {
    marginTop: '-10rem',
    marginBottom: '-10rem',
  },
  '-my-44': {
    marginTop: '-11rem',
    marginBottom: '-11rem',
  },
  '-my-48': {
    marginTop: '-12rem',
    marginBottom: '-12rem',
  },
  '-my-52': {
    marginTop: '-13rem',
    marginBottom: '-13rem',
  },
  '-my-56': {
    marginTop: '-14rem',
    marginBottom: '-14rem',
  },
  '-my-60': {
    marginTop: '-15rem',
    marginBottom: '-15rem',
  },
  '-my-64': {
    marginTop: '-16rem',
    marginBottom: '-16rem',
  },
  '-my-72': {
    marginTop: '-18rem',
    marginBottom: '-18rem',
  },
  '-my-80': {
    marginTop: '-20rem',
    marginBottom: '-20rem',
  },
  '-my-96': {
    marginTop: '-24rem',
    marginBottom: '-24rem',
  },
  '-my-px': {
    marginTop: '-1px',
    marginBottom: '-1px',
  },
  '-my-0\\.5': {
    marginTop: '-0.125rem',
    marginBottom: '-0.125rem',
  },
  '-my-1\\.5': {
    marginTop: '-0.375rem',
    marginBottom: '-0.375rem',
  },
  '-my-2\\.5': {
    marginTop: '-0.625rem',
    marginBottom: '-0.625rem',
  },
  '-my-3\\.5': {
    marginTop: '-0.875rem',
    marginBottom: '-0.875rem',
  },
  'mt-0': {
    marginTop: '0px',
  },
  'mt-1': {
    marginTop: '0.25rem',
  },
  'mt-2': {
    marginTop: '0.5rem',
  },
  'mt-3': {
    marginTop: '0.75rem',
  },
  'mt-4': {
    marginTop: '1rem',
  },
  'mt-5': {
    marginTop: '1.25rem',
  },
  'mt-6': {
    marginTop: '1.5rem',
  },
  'mt-7': {
    marginTop: '1.75rem',
  },
  'mt-8': {
    marginTop: '2rem',
  },
  'mt-9': {
    marginTop: '2.25rem',
  },
  'mt-10': {
    marginTop: '2.5rem',
  },
  'mt-11': {
    marginTop: '2.75rem',
  },
  'mt-12': {
    marginTop: '3rem',
  },
  'mt-14': {
    marginTop: '3.5rem',
  },
  'mt-16': {
    marginTop: '4rem',
  },
  'mt-20': {
    marginTop: '5rem',
  },
  'mt-24': {
    marginTop: '6rem',
  },
  'mt-28': {
    marginTop: '7rem',
  },
  'mt-32': {
    marginTop: '8rem',
  },
  'mt-36': {
    marginTop: '9rem',
  },
  'mt-40': {
    marginTop: '10rem',
  },
  'mt-44': {
    marginTop: '11rem',
  },
  'mt-48': {
    marginTop: '12rem',
  },
  'mt-52': {
    marginTop: '13rem',
  },
  'mt-56': {
    marginTop: '14rem',
  },
  'mt-60': {
    marginTop: '15rem',
  },
  'mt-64': {
    marginTop: '16rem',
  },
  'mt-72': {
    marginTop: '18rem',
  },
  'mt-80': {
    marginTop: '20rem',
  },
  'mt-96': {
    marginTop: '24rem',
  },
  'mt-auto': {
    marginTop: 'auto',
  },
  'mt-px': {
    marginTop: '1px',
  },
  'mt-0\\.5': {
    marginTop: '0.125rem',
  },
  'mt-1\\.5': {
    marginTop: '0.375rem',
  },
  'mt-2\\.5': {
    marginTop: '0.625rem',
  },
  'mt-3\\.5': {
    marginTop: '0.875rem',
  },
  '-mt-0': {
    marginTop: '0px',
  },
  '-mt-1': {
    marginTop: '-0.25rem',
  },
  '-mt-2': {
    marginTop: '-0.5rem',
  },
  '-mt-3': {
    marginTop: '-0.75rem',
  },
  '-mt-4': {
    marginTop: '-1rem',
  },
  '-mt-5': {
    marginTop: '-1.25rem',
  },
  '-mt-6': {
    marginTop: '-1.5rem',
  },
  '-mt-7': {
    marginTop: '-1.75rem',
  },
  '-mt-8': {
    marginTop: '-2rem',
  },
  '-mt-9': {
    marginTop: '-2.25rem',
  },
  '-mt-10': {
    marginTop: '-2.5rem',
  },
  '-mt-11': {
    marginTop: '-2.75rem',
  },
  '-mt-12': {
    marginTop: '-3rem',
  },
  '-mt-14': {
    marginTop: '-3.5rem',
  },
  '-mt-16': {
    marginTop: '-4rem',
  },
  '-mt-20': {
    marginTop: '-5rem',
  },
  '-mt-24': {
    marginTop: '-6rem',
  },
  '-mt-28': {
    marginTop: '-7rem',
  },
  '-mt-32': {
    marginTop: '-8rem',
  },
  '-mt-36': {
    marginTop: '-9rem',
  },
  '-mt-40': {
    marginTop: '-10rem',
  },
  '-mt-44': {
    marginTop: '-11rem',
  },
  '-mt-48': {
    marginTop: '-12rem',
  },
  '-mt-52': {
    marginTop: '-13rem',
  },
  '-mt-56': {
    marginTop: '-14rem',
  },
  '-mt-60': {
    marginTop: '-15rem',
  },
  '-mt-64': {
    marginTop: '-16rem',
  },
  '-mt-72': {
    marginTop: '-18rem',
  },
  '-mt-80': {
    marginTop: '-20rem',
  },
  '-mt-96': {
    marginTop: '-24rem',
  },
  '-mt-px': {
    marginTop: '-1px',
  },
  '-mt-0\\.5': {
    marginTop: '-0.125rem',
  },
  '-mt-1\\.5': {
    marginTop: '-0.375rem',
  },
  '-mt-2\\.5': {
    marginTop: '-0.625rem',
  },
  '-mt-3\\.5': {
    marginTop: '-0.875rem',
  },
  'mr-0': {
    marginRight: '0px',
  },
  'mr-1': {
    marginRight: '0.25rem',
  },
  'mr-2': {
    marginRight: '0.5rem',
  },
  'mr-3': {
    marginRight: '0.75rem',
  },
  'mr-4': {
    marginRight: '1rem',
  },
  'mr-5': {
    marginRight: '1.25rem',
  },
  'mr-6': {
    marginRight: '1.5rem',
  },
  'mr-7': {
    marginRight: '1.75rem',
  },
  'mr-8': {
    marginRight: '2rem',
  },
  'mr-9': {
    marginRight: '2.25rem',
  },
  'mr-10': {
    marginRight: '2.5rem',
  },
  'mr-11': {
    marginRight: '2.75rem',
  },
  'mr-12': {
    marginRight: '3rem',
  },
  'mr-14': {
    marginRight: '3.5rem',
  },
  'mr-16': {
    marginRight: '4rem',
  },
  'mr-20': {
    marginRight: '5rem',
  },
  'mr-24': {
    marginRight: '6rem',
  },
  'mr-28': {
    marginRight: '7rem',
  },
  'mr-32': {
    marginRight: '8rem',
  },
  'mr-36': {
    marginRight: '9rem',
  },
  'mr-40': {
    marginRight: '10rem',
  },
  'mr-44': {
    marginRight: '11rem',
  },
  'mr-48': {
    marginRight: '12rem',
  },
  'mr-52': {
    marginRight: '13rem',
  },
  'mr-56': {
    marginRight: '14rem',
  },
  'mr-60': {
    marginRight: '15rem',
  },
  'mr-64': {
    marginRight: '16rem',
  },
  'mr-72': {
    marginRight: '18rem',
  },
  'mr-80': {
    marginRight: '20rem',
  },
  'mr-96': {
    marginRight: '24rem',
  },
  'mr-auto': {
    marginRight: 'auto',
  },
  'mr-px': {
    marginRight: '1px',
  },
  'mr-0\\.5': {
    marginRight: '0.125rem',
  },
  'mr-1\\.5': {
    marginRight: '0.375rem',
  },
  'mr-2\\.5': {
    marginRight: '0.625rem',
  },
  'mr-3\\.5': {
    marginRight: '0.875rem',
  },
  '-mr-0': {
    marginRight: '0px',
  },
  '-mr-1': {
    marginRight: '-0.25rem',
  },
  '-mr-2': {
    marginRight: '-0.5rem',
  },
  '-mr-3': {
    marginRight: '-0.75rem',
  },
  '-mr-4': {
    marginRight: '-1rem',
  },
  '-mr-5': {
    marginRight: '-1.25rem',
  },
  '-mr-6': {
    marginRight: '-1.5rem',
  },
  '-mr-7': {
    marginRight: '-1.75rem',
  },
  '-mr-8': {
    marginRight: '-2rem',
  },
  '-mr-9': {
    marginRight: '-2.25rem',
  },
  '-mr-10': {
    marginRight: '-2.5rem',
  },
  '-mr-11': {
    marginRight: '-2.75rem',
  },
  '-mr-12': {
    marginRight: '-3rem',
  },
  '-mr-14': {
    marginRight: '-3.5rem',
  },
  '-mr-16': {
    marginRight: '-4rem',
  },
  '-mr-20': {
    marginRight: '-5rem',
  },
  '-mr-24': {
    marginRight: '-6rem',
  },
  '-mr-28': {
    marginRight: '-7rem',
  },
  '-mr-32': {
    marginRight: '-8rem',
  },
  '-mr-36': {
    marginRight: '-9rem',
  },
  '-mr-40': {
    marginRight: '-10rem',
  },
  '-mr-44': {
    marginRight: '-11rem',
  },
  '-mr-48': {
    marginRight: '-12rem',
  },
  '-mr-52': {
    marginRight: '-13rem',
  },
  '-mr-56': {
    marginRight: '-14rem',
  },
  '-mr-60': {
    marginRight: '-15rem',
  },
  '-mr-64': {
    marginRight: '-16rem',
  },
  '-mr-72': {
    marginRight: '-18rem',
  },
  '-mr-80': {
    marginRight: '-20rem',
  },
  '-mr-96': {
    marginRight: '-24rem',
  },
  '-mr-px': {
    marginRight: '-1px',
  },
  '-mr-0\\.5': {
    marginRight: '-0.125rem',
  },
  '-mr-1\\.5': {
    marginRight: '-0.375rem',
  },
  '-mr-2\\.5': {
    marginRight: '-0.625rem',
  },
  '-mr-3\\.5': {
    marginRight: '-0.875rem',
  },
  'mb-0': {
    marginBottom: '0px',
  },
  'mb-1': {
    marginBottom: '0.25rem',
  },
  'mb-2': {
    marginBottom: '0.5rem',
  },
  'mb-3': {
    marginBottom: '0.75rem',
  },
  'mb-4': {
    marginBottom: '1rem',
  },
  'mb-5': {
    marginBottom: '1.25rem',
  },
  'mb-6': {
    marginBottom: '1.5rem',
  },
  'mb-7': {
    marginBottom: '1.75rem',
  },
  'mb-8': {
    marginBottom: '2rem',
  },
  'mb-9': {
    marginBottom: '2.25rem',
  },
  'mb-10': {
    marginBottom: '2.5rem',
  },
  'mb-11': {
    marginBottom: '2.75rem',
  },
  'mb-12': {
    marginBottom: '3rem',
  },
  'mb-14': {
    marginBottom: '3.5rem',
  },
  'mb-16': {
    marginBottom: '4rem',
  },
  'mb-20': {
    marginBottom: '5rem',
  },
  'mb-24': {
    marginBottom: '6rem',
  },
  'mb-28': {
    marginBottom: '7rem',
  },
  'mb-32': {
    marginBottom: '8rem',
  },
  'mb-36': {
    marginBottom: '9rem',
  },
  'mb-40': {
    marginBottom: '10rem',
  },
  'mb-44': {
    marginBottom: '11rem',
  },
  'mb-48': {
    marginBottom: '12rem',
  },
  'mb-52': {
    marginBottom: '13rem',
  },
  'mb-56': {
    marginBottom: '14rem',
  },
  'mb-60': {
    marginBottom: '15rem',
  },
  'mb-64': {
    marginBottom: '16rem',
  },
  'mb-72': {
    marginBottom: '18rem',
  },
  'mb-80': {
    marginBottom: '20rem',
  },
  'mb-96': {
    marginBottom: '24rem',
  },
  'mb-auto': {
    marginBottom: 'auto',
  },
  'mb-px': {
    marginBottom: '1px',
  },
  'mb-0\\.5': {
    marginBottom: '0.125rem',
  },
  'mb-1\\.5': {
    marginBottom: '0.375rem',
  },
  'mb-2\\.5': {
    marginBottom: '0.625rem',
  },
  'mb-3\\.5': {
    marginBottom: '0.875rem',
  },
  '-mb-0': {
    marginBottom: '0px',
  },
  '-mb-1': {
    marginBottom: '-0.25rem',
  },
  '-mb-2': {
    marginBottom: '-0.5rem',
  },
  '-mb-3': {
    marginBottom: '-0.75rem',
  },
  '-mb-4': {
    marginBottom: '-1rem',
  },
  '-mb-5': {
    marginBottom: '-1.25rem',
  },
  '-mb-6': {
    marginBottom: '-1.5rem',
  },
  '-mb-7': {
    marginBottom: '-1.75rem',
  },
  '-mb-8': {
    marginBottom: '-2rem',
  },
  '-mb-9': {
    marginBottom: '-2.25rem',
  },
  '-mb-10': {
    marginBottom: '-2.5rem',
  },
  '-mb-11': {
    marginBottom: '-2.75rem',
  },
  '-mb-12': {
    marginBottom: '-3rem',
  },
  '-mb-14': {
    marginBottom: '-3.5rem',
  },
  '-mb-16': {
    marginBottom: '-4rem',
  },
  '-mb-20': {
    marginBottom: '-5rem',
  },
  '-mb-24': {
    marginBottom: '-6rem',
  },
  '-mb-28': {
    marginBottom: '-7rem',
  },
  '-mb-32': {
    marginBottom: '-8rem',
  },
  '-mb-36': {
    marginBottom: '-9rem',
  },
  '-mb-40': {
    marginBottom: '-10rem',
  },
  '-mb-44': {
    marginBottom: '-11rem',
  },
  '-mb-48': {
    marginBottom: '-12rem',
  },
  '-mb-52': {
    marginBottom: '-13rem',
  },
  '-mb-56': {
    marginBottom: '-14rem',
  },
  '-mb-60': {
    marginBottom: '-15rem',
  },
  '-mb-64': {
    marginBottom: '-16rem',
  },
  '-mb-72': {
    marginBottom: '-18rem',
  },
  '-mb-80': {
    marginBottom: '-20rem',
  },
  '-mb-96': {
    marginBottom: '-24rem',
  },
  '-mb-px': {
    marginBottom: '-1px',
  },
  '-mb-0\\.5': {
    marginBottom: '-0.125rem',
  },
  '-mb-1\\.5': {
    marginBottom: '-0.375rem',
  },
  '-mb-2\\.5': {
    marginBottom: '-0.625rem',
  },
  '-mb-3\\.5': {
    marginBottom: '-0.875rem',
  },
  'ml-0': {
    marginLeft: '0px',
  },
  'ml-1': {
    marginLeft: '0.25rem',
  },
  'ml-2': {
    marginLeft: '0.5rem',
  },
  'ml-3': {
    marginLeft: '0.75rem',
  },
  'ml-4': {
    marginLeft: '1rem',
  },
  'ml-5': {
    marginLeft: '1.25rem',
  },
  'ml-6': {
    marginLeft: '1.5rem',
  },
  'ml-7': {
    marginLeft: '1.75rem',
  },
  'ml-8': {
    marginLeft: '2rem',
  },
  'ml-9': {
    marginLeft: '2.25rem',
  },
  'ml-10': {
    marginLeft: '2.5rem',
  },
  'ml-11': {
    marginLeft: '2.75rem',
  },
  'ml-12': {
    marginLeft: '3rem',
  },
  'ml-14': {
    marginLeft: '3.5rem',
  },
  'ml-16': {
    marginLeft: '4rem',
  },
  'ml-20': {
    marginLeft: '5rem',
  },
  'ml-24': {
    marginLeft: '6rem',
  },
  'ml-28': {
    marginLeft: '7rem',
  },
  'ml-32': {
    marginLeft: '8rem',
  },
  'ml-36': {
    marginLeft: '9rem',
  },
  'ml-40': {
    marginLeft: '10rem',
  },
  'ml-44': {
    marginLeft: '11rem',
  },
  'ml-48': {
    marginLeft: '12rem',
  },
  'ml-52': {
    marginLeft: '13rem',
  },
  'ml-56': {
    marginLeft: '14rem',
  },
  'ml-60': {
    marginLeft: '15rem',
  },
  'ml-64': {
    marginLeft: '16rem',
  },
  'ml-72': {
    marginLeft: '18rem',
  },
  'ml-80': {
    marginLeft: '20rem',
  },
  'ml-96': {
    marginLeft: '24rem',
  },
  'ml-auto': {
    marginLeft: 'auto',
  },
  'ml-px': {
    marginLeft: '1px',
  },
  'ml-0\\.5': {
    marginLeft: '0.125rem',
  },
  'ml-1\\.5': {
    marginLeft: '0.375rem',
  },
  'ml-2\\.5': {
    marginLeft: '0.625rem',
  },
  'ml-3\\.5': {
    marginLeft: '0.875rem',
  },
  '-ml-0': {
    marginLeft: '0px',
  },
  '-ml-1': {
    marginLeft: '-0.25rem',
  },
  '-ml-2': {
    marginLeft: '-0.5rem',
  },
  '-ml-3': {
    marginLeft: '-0.75rem',
  },
  '-ml-4': {
    marginLeft: '-1rem',
  },
  '-ml-5': {
    marginLeft: '-1.25rem',
  },
  '-ml-6': {
    marginLeft: '-1.5rem',
  },
  '-ml-7': {
    marginLeft: '-1.75rem',
  },
  '-ml-8': {
    marginLeft: '-2rem',
  },
  '-ml-9': {
    marginLeft: '-2.25rem',
  },
  '-ml-10': {
    marginLeft: '-2.5rem',
  },
  '-ml-11': {
    marginLeft: '-2.75rem',
  },
  '-ml-12': {
    marginLeft: '-3rem',
  },
  '-ml-14': {
    marginLeft: '-3.5rem',
  },
  '-ml-16': {
    marginLeft: '-4rem',
  },
  '-ml-20': {
    marginLeft: '-5rem',
  },
  '-ml-24': {
    marginLeft: '-6rem',
  },
  '-ml-28': {
    marginLeft: '-7rem',
  },
  '-ml-32': {
    marginLeft: '-8rem',
  },
  '-ml-36': {
    marginLeft: '-9rem',
  },
  '-ml-40': {
    marginLeft: '-10rem',
  },
  '-ml-44': {
    marginLeft: '-11rem',
  },
  '-ml-48': {
    marginLeft: '-12rem',
  },
  '-ml-52': {
    marginLeft: '-13rem',
  },
  '-ml-56': {
    marginLeft: '-14rem',
  },
  '-ml-60': {
    marginLeft: '-15rem',
  },
  '-ml-64': {
    marginLeft: '-16rem',
  },
  '-ml-72': {
    marginLeft: '-18rem',
  },
  '-ml-80': {
    marginLeft: '-20rem',
  },
  '-ml-96': {
    marginLeft: '-24rem',
  },
  '-ml-px': {
    marginLeft: '-1px',
  },
  '-ml-0\\.5': {
    marginLeft: '-0.125rem',
  },
  '-ml-1\\.5': {
    marginLeft: '-0.375rem',
  },
  '-ml-2\\.5': {
    marginLeft: '-0.625rem',
  },
  '-ml-3\\.5': {
    marginLeft: '-0.875rem',
  },
  'box-border': {
    boxSizing: 'border-box',
  },
  'box-content': {
    boxSizing: 'content-box',
  },
  block: {
    display: 'block',
  },
  'inline-block': {
    display: 'inline-block',
  },
  inline: {
    display: 'inline',
  },
  flex: {
    display: 'flex',
  },
  'flex-wrap': {
    flexWrap: 'wrap',
  },
  'inline-flex': {
    display: 'inline-flex',
  },
  table: {
    display: 'table',
  },
  'inline-table': {
    display: 'inline-table',
  },
  'table-caption': {
    display: 'table-caption',
  },
  'table-cell': {
    display: 'table-cell',
  },
  'table-column': {
    display: 'table-column',
  },
  'table-column-group': {
    display: 'table-column-group',
  },
  'table-footer-group': {
    display: 'table-footer-group',
  },
  'table-header-group': {
    display: 'table-header-group',
  },
  'table-row-group': {
    display: 'table-row-group',
  },
  'table-row': {
    display: 'table-row',
  },
  'flow-root': {
    display: 'flow-root',
  },
  grid: {
    display: 'grid',
  },
  'inline-grid': {
    display: 'inline-grid',
  },
  contents: {
    display: 'contents',
  },
  'list-item': {
    display: 'list-item',
  },
  hidden: {
    display: 'none',
  },
  'h-0': {
    height: '0px',
  },
  'h-1': {
    height: '0.25rem',
  },
  'h-2': {
    height: '0.5rem',
  },
  'h-3': {
    height: '0.75rem',
  },
  'h-4': {
    height: '1rem',
  },
  'h-5': {
    height: '1.25rem',
  },
  'h-6': {
    height: '1.5rem',
  },
  'h-7': {
    height: '1.75rem',
  },
  'h-8': {
    height: '2rem',
  },
  'h-9': {
    height: '2.25rem',
  },
  'h-10': {
    height: '2.5rem',
  },
  'h-11': {
    height: '2.75rem',
  },
  'h-12': {
    height: '3rem',
  },
  'h-14': {
    height: '3.5rem',
  },
  'h-16': {
    height: '4rem',
  },
  'h-20': {
    height: '5rem',
  },
  'h-24': {
    height: '6rem',
  },
  'h-28': {
    height: '7rem',
  },
  'h-32': {
    height: '8rem',
  },
  'h-36': {
    height: '9rem',
  },
  'h-40': {
    height: '10rem',
  },
  'h-44': {
    height: '11rem',
  },
  'h-48': {
    height: '12rem',
  },
  'h-52': {
    height: '13rem',
  },
  'h-56': {
    height: '14rem',
  },
  'h-60': {
    height: '15rem',
  },
  'h-64': {
    height: '16rem',
  },
  'h-72': {
    height: '18rem',
  },
  'h-80': {
    height: '20rem',
  },
  'h-96': {
    height: '24rem',
  },
  'h-auto': {
    height: 'auto',
  },
  'h-px': {
    height: '1px',
  },
  'h-0\\.5': {
    height: '0.125rem',
  },
  'h-1\\.5': {
    height: '0.375rem',
  },
  'h-2\\.5': {
    height: '0.625rem',
  },
  'h-3\\.5': {
    height: '0.875rem',
  },
  'h-1\\/2': {
    height: '50%',
  },
  'h-1\\/3': {
    height: '33.333333%',
  },
  'h-2\\/3': {
    height: '66.666667%',
  },
  'h-1\\/4': {
    height: '25%',
  },
  'h-2\\/4': {
    height: '50%',
  },
  'h-3\\/4': {
    height: '75%',
  },
  'h-1\\/5': {
    height: '20%',
  },
  'h-2\\/5': {
    height: '40%',
  },
  'h-3\\/5': {
    height: '60%',
  },
  'h-4\\/5': {
    height: '80%',
  },
  'h-1\\/6': {
    height: '16.666667%',
  },
  'h-2\\/6': {
    height: '33.333333%',
  },
  'h-3\\/6': {
    height: '50%',
  },
  'h-4\\/6': {
    height: '66.666667%',
  },
  'h-5\\/6': {
    height: '83.333333%',
  },
  'h-full': {
    height: '100%',
  },
  'h-screen': {
    height: '100vh',
  },
  'max-h-0': {
    maxHeight: '0px',
  },
  'max-h-1': {
    maxHeight: '0.25rem',
  },
  'max-h-2': {
    maxHeight: '0.5rem',
  },
  'max-h-3': {
    maxHeight: '0.75rem',
  },
  'max-h-4': {
    maxHeight: '1rem',
  },
  'max-h-5': {
    maxHeight: '1.25rem',
  },
  'max-h-6': {
    maxHeight: '1.5rem',
  },
  'max-h-7': {
    maxHeight: '1.75rem',
  },
  'max-h-8': {
    maxHeight: '2rem',
  },
  'max-h-9': {
    maxHeight: '2.25rem',
  },
  'max-h-10': {
    maxHeight: '2.5rem',
  },
  'max-h-11': {
    maxHeight: '2.75rem',
  },
  'max-h-12': {
    maxHeight: '3rem',
  },
  'max-h-14': {
    maxHeight: '3.5rem',
  },
  'max-h-16': {
    maxHeight: '4rem',
  },
  'max-h-20': {
    maxHeight: '5rem',
  },
  'max-h-24': {
    maxHeight: '6rem',
  },
  'max-h-28': {
    maxHeight: '7rem',
  },
  'max-h-32': {
    maxHeight: '8rem',
  },
  'max-h-36': {
    maxHeight: '9rem',
  },
  'max-h-40': {
    maxHeight: '10rem',
  },
  'max-h-44': {
    maxHeight: '11rem',
  },
  'max-h-48': {
    maxHeight: '12rem',
  },
  'max-h-52': {
    maxHeight: '13rem',
  },
  'max-h-56': {
    maxHeight: '14rem',
  },
  'max-h-60': {
    maxHeight: '15rem',
  },
  'max-h-64': {
    maxHeight: '16rem',
  },
  'max-h-72': {
    maxHeight: '18rem',
  },
  'max-h-80': {
    maxHeight: '20rem',
  },
  'max-h-96': {
    maxHeight: '24rem',
  },
  'max-h-px': {
    maxHeight: '1px',
  },
  'max-h-0\\.5': {
    maxHeight: '0.125rem',
  },
  'max-h-1\\.5': {
    maxHeight: '0.375rem',
  },
  'max-h-2\\.5': {
    maxHeight: '0.625rem',
  },
  'max-h-3\\.5': {
    maxHeight: '0.875rem',
  },
  'max-h-full': {
    maxHeight: '100%',
  },
  'max-h-screen': {
    maxHeight: '100vh',
  },
  'min-h-0': {
    minHeight: '0px',
  },
  'min-h-full': {
    minHeight: '100%',
  },
  'min-h-screen': {
    minHeight: '100vh',
  },
  'w-0': {
    width: '0px',
  },
  'w-1': {
    width: '0.25rem',
  },
  'w-2': {
    width: '0.5rem',
  },
  'w-3': {
    width: '0.75rem',
  },
  'w-4': {
    width: '1rem',
  },
  'w-5': {
    width: '1.25rem',
  },
  'w-6': {
    width: '1.5rem',
  },
  'w-7': {
    width: '1.75rem',
  },
  'w-8': {
    width: '2rem',
  },
  'w-9': {
    width: '2.25rem',
  },
  'w-10': {
    width: '2.5rem',
  },
  'w-11': {
    width: '2.75rem',
  },
  'w-12': {
    width: '3rem',
  },
  'w-14': {
    width: '3.5rem',
  },
  'w-16': {
    width: '4rem',
  },
  'w-20': {
    width: '5rem',
  },
  'w-24': {
    width: '6rem',
  },
  'w-28': {
    width: '7rem',
  },
  'w-32': {
    width: '8rem',
  },
  'w-36': {
    width: '9rem',
  },
  'w-40': {
    width: '10rem',
  },
  'w-44': {
    width: '11rem',
  },
  'w-48': {
    width: '12rem',
  },
  'w-52': {
    width: '13rem',
  },
  'w-56': {
    width: '14rem',
  },
  'w-60': {
    width: '15rem',
  },
  'w-64': {
    width: '16rem',
  },
  'w-72': {
    width: '18rem',
  },
  'w-80': {
    width: '20rem',
  },
  'w-96': {
    width: '24rem',
  },
  'w-auto': {
    width: 'auto',
  },
  'w-px': {
    width: '1px',
  },
  'w-0\\.5': {
    width: '0.125rem',
  },
  'w-1\\.5': {
    width: '0.375rem',
  },
  'w-2\\.5': {
    width: '0.625rem',
  },
  'w-3\\.5': {
    width: '0.875rem',
  },
  'w-1\\/2': {
    width: '50%',
  },
  'w-1\\/3': {
    width: '33.333333%',
  },
  'w-2\\/3': {
    width: '66.666667%',
  },
  'w-1\\/4': {
    width: '25%',
  },
  'w-2\\/4': {
    width: '50%',
  },
  'w-3\\/4': {
    width: '75%',
  },
  'w-1\\/5': {
    width: '20%',
  },
  'w-2\\/5': {
    width: '40%',
  },
  'w-3\\/5': {
    width: '60%',
  },
  'w-4\\/5': {
    width: '80%',
  },
  'w-1\\/6': {
    width: '16.666667%',
  },
  'w-2\\/6': {
    width: '33.333333%',
  },
  'w-3\\/6': {
    width: '50%',
  },
  'w-4\\/6': {
    width: '66.666667%',
  },
  'w-5\\/6': {
    width: '83.333333%',
  },
  'w-1\\/12': {
    width: '8.333333%',
  },
  'w-2\\/12': {
    width: '16.666667%',
  },
  'w-3\\/12': {
    width: '25%',
  },
  'w-4\\/12': {
    width: '33.333333%',
  },
  'w-5\\/12': {
    width: '41.666667%',
  },
  'w-6\\/12': {
    width: '50%',
  },
  'w-7\\/12': {
    width: '58.333333%',
  },
  'w-8\\/12': {
    width: '66.666667%',
  },
  'w-9\\/12': {
    width: '75%',
  },
  'w-10\\/12': {
    width: '83.333333%',
  },
  'w-11\\/12': {
    width: '91.666667%',
  },
  'w-full': {
    width: '100%',
  },
  'w-screen': {
    width: '100vw',
  },
  'w-min': {
    //width: ["-webkit-min-content", "-moz-min-content", "min-content"],
    width: 'min-content',
  },
  'w-max': {
    //width: ["-webkit-max-content", "-moz-max-content", "max-content"],
    width: 'max-content',
  },
  'min-w-0': {
    minWidth: '0px',
  },
  'min-w-full': {
    minWidth: '100%',
  },
  'min-w-min': {
    //minWidth: ["-webkit-min-content", "-moz-min-content", "min-content"],
    minWidth: 'min-content',
  },
  'min-w-max': {
    //minWidth: ["-webkit-max-content", "-moz-max-content", "max-content"],
    minWidth: 'max-content',
  },
  'max-w-0': {
    maxWidth: '0rem',
  },
  'max-w-none': {
    maxWidth: 'none',
  },
  'max-w-xs': {
    maxWidth: '20rem',
  },
  'max-w-sm': {
    maxWidth: '24rem',
  },
  'max-w-md': {
    maxWidth: '28rem',
  },
  'max-w-lg': {
    maxWidth: '32rem',
  },
  'max-w-xl': {
    maxWidth: '36rem',
  },
  'max-w-2xl': {
    maxWidth: '42rem',
  },
  'max-w-3xl': {
    maxWidth: '48rem',
  },
  'max-w-4xl': {
    maxWidth: '56rem',
  },
  'max-w-5xl': {
    maxWidth: '64rem',
  },
  'max-w-6xl': {
    maxWidth: '72rem',
  },
  'max-w-7xl': {
    maxWidth: '80rem',
  },
  'max-w-full': {
    maxWidth: '100%',
  },
  'max-w-min': {
    //maxWidth: ["-webkit-min-content", "-moz-min-content", "min-content"],
    maxWidth: 'min-content',
  },
  'max-w-max': {
    //maxWidth: ["-webkit-max-content", "-moz-max-content", "max-content"],
    maxWidth: 'max-content',
  },
  'max-w-prose': {
    maxWidth: '65ch',
  },
  'max-w-screen-sm': {
    maxWidth: '640px',
  },
  'max-w-screen-md': {
    maxWidth: '768px',
  },
  'max-w-screen-lg': {
    maxWidth: '1024px',
  },
  'max-w-screen-xl': {
    maxWidth: '1280px',
  },
  'max-w-screen-2xl': {
    maxWidth: '1536px',
  },
  'flex-row': {
    flexDirection: 'row',
  },
  'flex-1': {
    flex: '1 1 0%',
  },
  'flex-auto': {
    flex: '1 1 auto',
  },
  'flex-initial': {
    flex: '0 1 auto',
  },
  'flex-none': {
    flex: 'none',
  },
  'flex-shrink-0': {
    flexShrink: '0',
  },
  'flex-shrink': {
    flexShrink: '1',
  },
  'flex-grow-0': {
    flexGrow: '0',
  },
  'flex-grow': {
    flexGrow: '1',
  },
  'table-auto': {
    tableLayout: 'auto',
  },
  'table-fixed': {
    tableLayout: 'fixed',
  },
  'border-collapse': {
    borderCollapse: 'collapse',
  },
  'border-separate': {
    borderCollapse: 'separate',
  },
  'origin-center': {
    transformOrigin: 'center',
  },
  'origin-top': {
    transformOrigin: 'top',
  },
  'origin-top-right': {
    transformOrigin: 'top right',
  },
  'origin-right': {
    transformOrigin: 'right',
  },
  'origin-bottom-right': {
    transformOrigin: 'bottom right',
  },
  'origin-bottom': {
    transformOrigin: 'bottom',
  },
  'origin-bottom-left': {
    transformOrigin: 'bottom left',
  },
  'origin-left': {
    transformOrigin: 'left',
  },
  'origin-top-left': {
    transformOrigin: 'top left',
  },
  transform: {
    '-TwTranslateX': '0',
    '-TwTranslateY': '0',
    '-TwRotate': '0',
    '-TwSkewX': '0',
    '-TwSkewY': '0',
    '-TwScaleX': '1',
    '-TwScaleY': '1',
    transform:
      'translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
  },
  'transform-gpu': {
    '-TwTranslateX': '0',
    '-TwTranslateY': '0',
    '-TwRotate': '0',
    '-TwSkewX': '0',
    '-TwSkewY': '0',
    '-TwScaleX': '1',
    '-TwScaleY': '1',
    transform:
      'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))',
  },
  'transform-none': {
    transform: 'none',
  },
  'translate-x-0': {
    '-TwTranslateX': '0px',
  },
  'translate-x-1': {
    '-TwTranslateX': '0.25rem',
  },
  'translate-x-2': {
    '-TwTranslateX': '0.5rem',
  },
  'translate-x-3': {
    '-TwTranslateX': '0.75rem',
  },
  'translate-x-4': {
    '-TwTranslateX': '1rem',
  },
  'translate-x-5': {
    '-TwTranslateX': '1.25rem',
  },
  'translate-x-6': {
    '-TwTranslateX': '1.5rem',
  },
  'translate-x-7': {
    '-TwTranslateX': '1.75rem',
  },
  'translate-x-8': {
    '-TwTranslateX': '2rem',
  },
  'translate-x-9': {
    '-TwTranslateX': '2.25rem',
  },
  'translate-x-10': {
    '-TwTranslateX': '2.5rem',
  },
  'translate-x-11': {
    '-TwTranslateX': '2.75rem',
  },
  'translate-x-12': {
    '-TwTranslateX': '3rem',
  },
  'translate-x-14': {
    '-TwTranslateX': '3.5rem',
  },
  'translate-x-16': {
    '-TwTranslateX': '4rem',
  },
  'translate-x-20': {
    '-TwTranslateX': '5rem',
  },
  'translate-x-24': {
    '-TwTranslateX': '6rem',
  },
  'translate-x-28': {
    '-TwTranslateX': '7rem',
  },
  'translate-x-32': {
    '-TwTranslateX': '8rem',
  },
  'translate-x-36': {
    '-TwTranslateX': '9rem',
  },
  'translate-x-40': {
    '-TwTranslateX': '10rem',
  },
  'translate-x-44': {
    '-TwTranslateX': '11rem',
  },
  'translate-x-48': {
    '-TwTranslateX': '12rem',
  },
  'translate-x-52': {
    '-TwTranslateX': '13rem',
  },
  'translate-x-56': {
    '-TwTranslateX': '14rem',
  },
  'translate-x-60': {
    '-TwTranslateX': '15rem',
  },
  'translate-x-64': {
    '-TwTranslateX': '16rem',
  },
  'translate-x-72': {
    '-TwTranslateX': '18rem',
  },
  'translate-x-80': {
    '-TwTranslateX': '20rem',
  },
  'translate-x-96': {
    '-TwTranslateX': '24rem',
  },
  'translate-x-px': {
    '-TwTranslateX': '1px',
  },
  'translate-x-0\\.5': {
    '-TwTranslateX': '0.125rem',
  },
  'translate-x-1\\.5': {
    '-TwTranslateX': '0.375rem',
  },
  'translate-x-2\\.5': {
    '-TwTranslateX': '0.625rem',
  },
  'translate-x-3\\.5': {
    '-TwTranslateX': '0.875rem',
  },
  '-translate-x-0': {
    '-TwTranslateX': '0px',
  },
  '-translate-x-1': {
    '-TwTranslateX': '-0.25rem',
  },
  '-translate-x-2': {
    '-TwTranslateX': '-0.5rem',
  },
  '-translate-x-3': {
    '-TwTranslateX': '-0.75rem',
  },
  '-translate-x-4': {
    '-TwTranslateX': '-1rem',
  },
  '-translate-x-5': {
    '-TwTranslateX': '-1.25rem',
  },
  '-translate-x-6': {
    '-TwTranslateX': '-1.5rem',
  },
  '-translate-x-7': {
    '-TwTranslateX': '-1.75rem',
  },
  '-translate-x-8': {
    '-TwTranslateX': '-2rem',
  },
  '-translate-x-9': {
    '-TwTranslateX': '-2.25rem',
  },
  '-translate-x-10': {
    '-TwTranslateX': '-2.5rem',
  },
  '-translate-x-11': {
    '-TwTranslateX': '-2.75rem',
  },
  '-translate-x-12': {
    '-TwTranslateX': '-3rem',
  },
  '-translate-x-14': {
    '-TwTranslateX': '-3.5rem',
  },
  '-translate-x-16': {
    '-TwTranslateX': '-4rem',
  },
  '-translate-x-20': {
    '-TwTranslateX': '-5rem',
  },
  '-translate-x-24': {
    '-TwTranslateX': '-6rem',
  },
  '-translate-x-28': {
    '-TwTranslateX': '-7rem',
  },
  '-translate-x-32': {
    '-TwTranslateX': '-8rem',
  },
  '-translate-x-36': {
    '-TwTranslateX': '-9rem',
  },
  '-translate-x-40': {
    '-TwTranslateX': '-10rem',
  },
  '-translate-x-44': {
    '-TwTranslateX': '-11rem',
  },
  '-translate-x-48': {
    '-TwTranslateX': '-12rem',
  },
  '-translate-x-52': {
    '-TwTranslateX': '-13rem',
  },
  '-translate-x-56': {
    '-TwTranslateX': '-14rem',
  },
  '-translate-x-60': {
    '-TwTranslateX': '-15rem',
  },
  '-translate-x-64': {
    '-TwTranslateX': '-16rem',
  },
  '-translate-x-72': {
    '-TwTranslateX': '-18rem',
  },
  '-translate-x-80': {
    '-TwTranslateX': '-20rem',
  },
  '-translate-x-96': {
    '-TwTranslateX': '-24rem',
  },
  '-translate-x-px': {
    '-TwTranslateX': '-1px',
  },
  '-translate-x-0\\.5': {
    '-TwTranslateX': '-0.125rem',
  },
  '-translate-x-1\\.5': {
    '-TwTranslateX': '-0.375rem',
  },
  '-translate-x-2\\.5': {
    '-TwTranslateX': '-0.625rem',
  },
  '-translate-x-3\\.5': {
    '-TwTranslateX': '-0.875rem',
  },
  'translate-x-1\\/2': {
    '-TwTranslateX': '50%',
  },
  'translate-x-1\\/3': {
    '-TwTranslateX': '33.333333%',
  },
  'translate-x-2\\/3': {
    '-TwTranslateX': '66.666667%',
  },
  'translate-x-1\\/4': {
    '-TwTranslateX': '25%',
  },
  'translate-x-2\\/4': {
    '-TwTranslateX': '50%',
  },
  'translate-x-3\\/4': {
    '-TwTranslateX': '75%',
  },
  'translate-x-full': {
    '-TwTranslateX': '100%',
  },
  '-translate-x-1\\/2': {
    '-TwTranslateX': '-50%',
  },
  '-translate-x-1\\/3': {
    '-TwTranslateX': '-33.333333%',
  },
  '-translate-x-2\\/3': {
    '-TwTranslateX': '-66.666667%',
  },
  '-translate-x-1\\/4': {
    '-TwTranslateX': '-25%',
  },
  '-translate-x-2\\/4': {
    '-TwTranslateX': '-50%',
  },
  '-translate-x-3\\/4': {
    '-TwTranslateX': '-75%',
  },
  '-translate-x-full': {
    '-TwTranslateX': '-100%',
  },
  'translate-y-0': {
    '-TwTranslateY': '0px',
  },
  'translate-y-1': {
    '-TwTranslateY': '0.25rem',
  },
  'translate-y-2': {
    '-TwTranslateY': '0.5rem',
  },
  'translate-y-3': {
    '-TwTranslateY': '0.75rem',
  },
  'translate-y-4': {
    '-TwTranslateY': '1rem',
  },
  'translate-y-5': {
    '-TwTranslateY': '1.25rem',
  },
  'translate-y-6': {
    '-TwTranslateY': '1.5rem',
  },
  'translate-y-7': {
    '-TwTranslateY': '1.75rem',
  },
  'translate-y-8': {
    '-TwTranslateY': '2rem',
  },
  'translate-y-9': {
    '-TwTranslateY': '2.25rem',
  },
  'translate-y-10': {
    '-TwTranslateY': '2.5rem',
  },
  'translate-y-11': {
    '-TwTranslateY': '2.75rem',
  },
  'translate-y-12': {
    '-TwTranslateY': '3rem',
  },
  'translate-y-14': {
    '-TwTranslateY': '3.5rem',
  },
  'translate-y-16': {
    '-TwTranslateY': '4rem',
  },
  'translate-y-20': {
    '-TwTranslateY': '5rem',
  },
  'translate-y-24': {
    '-TwTranslateY': '6rem',
  },
  'translate-y-28': {
    '-TwTranslateY': '7rem',
  },
  'translate-y-32': {
    '-TwTranslateY': '8rem',
  },
  'translate-y-36': {
    '-TwTranslateY': '9rem',
  },
  'translate-y-40': {
    '-TwTranslateY': '10rem',
  },
  'translate-y-44': {
    '-TwTranslateY': '11rem',
  },
  'translate-y-48': {
    '-TwTranslateY': '12rem',
  },
  'translate-y-52': {
    '-TwTranslateY': '13rem',
  },
  'translate-y-56': {
    '-TwTranslateY': '14rem',
  },
  'translate-y-60': {
    '-TwTranslateY': '15rem',
  },
  'translate-y-64': {
    '-TwTranslateY': '16rem',
  },
  'translate-y-72': {
    '-TwTranslateY': '18rem',
  },
  'translate-y-80': {
    '-TwTranslateY': '20rem',
  },
  'translate-y-96': {
    '-TwTranslateY': '24rem',
  },
  'translate-y-px': {
    '-TwTranslateY': '1px',
  },
  'translate-y-0\\.5': {
    '-TwTranslateY': '0.125rem',
  },
  'translate-y-1\\.5': {
    '-TwTranslateY': '0.375rem',
  },
  'translate-y-2\\.5': {
    '-TwTranslateY': '0.625rem',
  },
  'translate-y-3\\.5': {
    '-TwTranslateY': '0.875rem',
  },
  '-translate-y-0': {
    '-TwTranslateY': '0px',
  },
  '-translate-y-1': {
    '-TwTranslateY': '-0.25rem',
  },
  '-translate-y-2': {
    '-TwTranslateY': '-0.5rem',
  },
  '-translate-y-3': {
    '-TwTranslateY': '-0.75rem',
  },
  '-translate-y-4': {
    '-TwTranslateY': '-1rem',
  },
  '-translate-y-5': {
    '-TwTranslateY': '-1.25rem',
  },
  '-translate-y-6': {
    '-TwTranslateY': '-1.5rem',
  },
  '-translate-y-7': {
    '-TwTranslateY': '-1.75rem',
  },
  '-translate-y-8': {
    '-TwTranslateY': '-2rem',
  },
  '-translate-y-9': {
    '-TwTranslateY': '-2.25rem',
  },
  '-translate-y-10': {
    '-TwTranslateY': '-2.5rem',
  },
  '-translate-y-11': {
    '-TwTranslateY': '-2.75rem',
  },
  '-translate-y-12': {
    '-TwTranslateY': '-3rem',
  },
  '-translate-y-14': {
    '-TwTranslateY': '-3.5rem',
  },
  '-translate-y-16': {
    '-TwTranslateY': '-4rem',
  },
  '-translate-y-20': {
    '-TwTranslateY': '-5rem',
  },
  '-translate-y-24': {
    '-TwTranslateY': '-6rem',
  },
  '-translate-y-28': {
    '-TwTranslateY': '-7rem',
  },
  '-translate-y-32': {
    '-TwTranslateY': '-8rem',
  },
  '-translate-y-36': {
    '-TwTranslateY': '-9rem',
  },
  '-translate-y-40': {
    '-TwTranslateY': '-10rem',
  },
  '-translate-y-44': {
    '-TwTranslateY': '-11rem',
  },
  '-translate-y-48': {
    '-TwTranslateY': '-12rem',
  },
  '-translate-y-52': {
    '-TwTranslateY': '-13rem',
  },
  '-translate-y-56': {
    '-TwTranslateY': '-14rem',
  },
  '-translate-y-60': {
    '-TwTranslateY': '-15rem',
  },
  '-translate-y-64': {
    '-TwTranslateY': '-16rem',
  },
  '-translate-y-72': {
    '-TwTranslateY': '-18rem',
  },
  '-translate-y-80': {
    '-TwTranslateY': '-20rem',
  },
  '-translate-y-96': {
    '-TwTranslateY': '-24rem',
  },
  '-translate-y-px': {
    '-TwTranslateY': '-1px',
  },
  '-translate-y-0\\.5': {
    '-TwTranslateY': '-0.125rem',
  },
  '-translate-y-1\\.5': {
    '-TwTranslateY': '-0.375rem',
  },
  '-translate-y-2\\.5': {
    '-TwTranslateY': '-0.625rem',
  },
  '-translate-y-3\\.5': {
    '-TwTranslateY': '-0.875rem',
  },
  'translate-y-1\\/2': {
    '-TwTranslateY': '50%',
  },
  'translate-y-1\\/3': {
    '-TwTranslateY': '33.333333%',
  },
  'translate-y-2\\/3': {
    '-TwTranslateY': '66.666667%',
  },
  'translate-y-1\\/4': {
    '-TwTranslateY': '25%',
  },
  'translate-y-2\\/4': {
    '-TwTranslateY': '50%',
  },
  'translate-y-3\\/4': {
    '-TwTranslateY': '75%',
  },
  'translate-y-full': {
    '-TwTranslateY': '100%',
  },
  '-translate-y-1\\/2': {
    '-TwTranslateY': '-50%',
  },
  '-translate-y-1\\/3': {
    '-TwTranslateY': '-33.333333%',
  },
  '-translate-y-2\\/3': {
    '-TwTranslateY': '-66.666667%',
  },
  '-translate-y-1\\/4': {
    '-TwTranslateY': '-25%',
  },
  '-translate-y-2\\/4': {
    '-TwTranslateY': '-50%',
  },
  '-translate-y-3\\/4': {
    '-TwTranslateY': '-75%',
  },
  '-translate-y-full': {
    '-TwTranslateY': '-100%',
  },
  'hover\\:translate-x-0:hover': {
    '&:hover': {
      '-TwTranslateX': '0px',
    },
  },
  'hover\\:translate-x-1:hover': {
    '&:hover': {
      '-TwTranslateX': '0.25rem',
    },
  },
  'hover\\:translate-x-2:hover': {
    '&:hover': {
      '-TwTranslateX': '0.5rem',
    },
  },
  'hover\\:translate-x-3:hover': {
    '&:hover': {
      '-TwTranslateX': '0.75rem',
    },
  },
  'hover\\:translate-x-4:hover': {
    '&:hover': {
      '-TwTranslateX': '1rem',
    },
  },
  'hover\\:translate-x-5:hover': {
    '&:hover': {
      '-TwTranslateX': '1.25rem',
    },
  },
  'hover\\:translate-x-6:hover': {
    '&:hover': {
      '-TwTranslateX': '1.5rem',
    },
  },
  'hover\\:translate-x-7:hover': {
    '&:hover': {
      '-TwTranslateX': '1.75rem',
    },
  },
  'hover\\:translate-x-8:hover': {
    '&:hover': {
      '-TwTranslateX': '2rem',
    },
  },
  'hover\\:translate-x-9:hover': {
    '&:hover': {
      '-TwTranslateX': '2.25rem',
    },
  },
  'hover\\:translate-x-10:hover': {
    '&:hover': {
      '-TwTranslateX': '2.5rem',
    },
  },
  'hover\\:translate-x-11:hover': {
    '&:hover': {
      '-TwTranslateX': '2.75rem',
    },
  },
  'hover\\:translate-x-12:hover': {
    '&:hover': {
      '-TwTranslateX': '3rem',
    },
  },
  'hover\\:translate-x-14:hover': {
    '&:hover': {
      '-TwTranslateX': '3.5rem',
    },
  },
  'hover\\:translate-x-16:hover': {
    '&:hover': {
      '-TwTranslateX': '4rem',
    },
  },
  'hover\\:translate-x-20:hover': {
    '&:hover': {
      '-TwTranslateX': '5rem',
    },
  },
  'hover\\:translate-x-24:hover': {
    '&:hover': {
      '-TwTranslateX': '6rem',
    },
  },
  'hover\\:translate-x-28:hover': {
    '&:hover': {
      '-TwTranslateX': '7rem',
    },
  },
  'hover\\:translate-x-32:hover': {
    '&:hover': {
      '-TwTranslateX': '8rem',
    },
  },
  'hover\\:translate-x-36:hover': {
    '&:hover': {
      '-TwTranslateX': '9rem',
    },
  },
  'hover\\:translate-x-40:hover': {
    '&:hover': {
      '-TwTranslateX': '10rem',
    },
  },
  'hover\\:translate-x-44:hover': {
    '&:hover': {
      '-TwTranslateX': '11rem',
    },
  },
  'hover\\:translate-x-48:hover': {
    '&:hover': {
      '-TwTranslateX': '12rem',
    },
  },
  'hover\\:translate-x-52:hover': {
    '&:hover': {
      '-TwTranslateX': '13rem',
    },
  },
  'hover\\:translate-x-56:hover': {
    '&:hover': {
      '-TwTranslateX': '14rem',
    },
  },
  'hover\\:translate-x-60:hover': {
    '&:hover': {
      '-TwTranslateX': '15rem',
    },
  },
  'hover\\:translate-x-64:hover': {
    '&:hover': {
      '-TwTranslateX': '16rem',
    },
  },
  'hover\\:translate-x-72:hover': {
    '&:hover': {
      '-TwTranslateX': '18rem',
    },
  },
  'hover\\:translate-x-80:hover': {
    '&:hover': {
      '-TwTranslateX': '20rem',
    },
  },
  'hover\\:translate-x-96:hover': {
    '&:hover': {
      '-TwTranslateX': '24rem',
    },
  },
  'hover\\:translate-x-px:hover': {
    '&:hover': {
      '-TwTranslateX': '1px',
    },
  },
  'hover\\:translate-x-0\\.5:hover': {
    '&:hover': {
      '-TwTranslateX': '0.125rem',
    },
  },
  'hover\\:translate-x-1\\.5:hover': {
    '&:hover': {
      '-TwTranslateX': '0.375rem',
    },
  },
  'hover\\:translate-x-2\\.5:hover': {
    '&:hover': {
      '-TwTranslateX': '0.625rem',
    },
  },
  'hover\\:translate-x-3\\.5:hover': {
    '&:hover': {
      '-TwTranslateX': '0.875rem',
    },
  },
  'hover\\:-translate-x-0:hover': {
    '&:hover': {
      '-TwTranslateX': '0px',
    },
  },
  'hover\\:-translate-x-1:hover': {
    '&:hover': {
      '-TwTranslateX': '-0.25rem',
    },
  },
  'hover\\:-translate-x-2:hover': {
    '&:hover': {
      '-TwTranslateX': '-0.5rem',
    },
  },
  'hover\\:-translate-x-3:hover': {
    '&:hover': {
      '-TwTranslateX': '-0.75rem',
    },
  },
  'hover\\:-translate-x-4:hover': {
    '&:hover': {
      '-TwTranslateX': '-1rem',
    },
  },
  'hover\\:-translate-x-5:hover': {
    '&:hover': {
      '-TwTranslateX': '-1.25rem',
    },
  },
  'hover\\:-translate-x-6:hover': {
    '&:hover': {
      '-TwTranslateX': '-1.5rem',
    },
  },
  'hover\\:-translate-x-7:hover': {
    '&:hover': {
      '-TwTranslateX': '-1.75rem',
    },
  },
  'hover\\:-translate-x-8:hover': {
    '&:hover': {
      '-TwTranslateX': '-2rem',
    },
  },
  'hover\\:-translate-x-9:hover': {
    '&:hover': {
      '-TwTranslateX': '-2.25rem',
    },
  },
  'hover\\:-translate-x-10:hover': {
    '&:hover': {
      '-TwTranslateX': '-2.5rem',
    },
  },
  'hover\\:-translate-x-11:hover': {
    '&:hover': {
      '-TwTranslateX': '-2.75rem',
    },
  },
  'hover\\:-translate-x-12:hover': {
    '&:hover': {
      '-TwTranslateX': '-3rem',
    },
  },
  'hover\\:-translate-x-14:hover': {
    '&:hover': {
      '-TwTranslateX': '-3.5rem',
    },
  },
  'hover\\:-translate-x-16:hover': {
    '&:hover': {
      '-TwTranslateX': '-4rem',
    },
  },
  'hover\\:-translate-x-20:hover': {
    '&:hover': {
      '-TwTranslateX': '-5rem',
    },
  },
  'hover\\:-translate-x-24:hover': {
    '&:hover': {
      '-TwTranslateX': '-6rem',
    },
  },
  'hover\\:-translate-x-28:hover': {
    '&:hover': {
      '-TwTranslateX': '-7rem',
    },
  },
  'hover\\:-translate-x-32:hover': {
    '&:hover': {
      '-TwTranslateX': '-8rem',
    },
  },
  'hover\\:-translate-x-36:hover': {
    '&:hover': {
      '-TwTranslateX': '-9rem',
    },
  },
  'hover\\:-translate-x-40:hover': {
    '&:hover': {
      '-TwTranslateX': '-10rem',
    },
  },
  'hover\\:-translate-x-44:hover': {
    '&:hover': {
      '-TwTranslateX': '-11rem',
    },
  },
  'hover\\:-translate-x-48:hover': {
    '&:hover': {
      '-TwTranslateX': '-12rem',
    },
  },
  'hover\\:-translate-x-52:hover': {
    '&:hover': {
      '-TwTranslateX': '-13rem',
    },
  },
  'hover\\:-translate-x-56:hover': {
    '&:hover': {
      '-TwTranslateX': '-14rem',
    },
  },
  'hover\\:-translate-x-60:hover': {
    '&:hover': {
      '-TwTranslateX': '-15rem',
    },
  },
  'hover\\:-translate-x-64:hover': {
    '&:hover': {
      '-TwTranslateX': '-16rem',
    },
  },
  'hover\\:-translate-x-72:hover': {
    '&:hover': {
      '-TwTranslateX': '-18rem',
    },
  },
  'hover\\:-translate-x-80:hover': {
    '&:hover': {
      '-TwTranslateX': '-20rem',
    },
  },
  'hover\\:-translate-x-96:hover': {
    '&:hover': {
      '-TwTranslateX': '-24rem',
    },
  },
  'hover\\:-translate-x-px:hover': {
    '&:hover': {
      '-TwTranslateX': '-1px',
    },
  },
  'hover\\:-translate-x-0\\.5:hover': {
    '&:hover': {
      '-TwTranslateX': '-0.125rem',
    },
  },
  'hover\\:-translate-x-1\\.5:hover': {
    '&:hover': {
      '-TwTranslateX': '-0.375rem',
    },
  },
  'hover\\:-translate-x-2\\.5:hover': {
    '&:hover': {
      '-TwTranslateX': '-0.625rem',
    },
  },
  'hover\\:-translate-x-3\\.5:hover': {
    '&:hover': {
      '-TwTranslateX': '-0.875rem',
    },
  },
  'hover\\:translate-x-1\\/2:hover': {
    '&:hover': {
      '-TwTranslateX': '50%',
    },
  },
  'hover\\:translate-x-1\\/3:hover': {
    '&:hover': {
      '-TwTranslateX': '33.333333%',
    },
  },
  'hover\\:translate-x-2\\/3:hover': {
    '&:hover': {
      '-TwTranslateX': '66.666667%',
    },
  },
  'hover\\:translate-x-1\\/4:hover': {
    '&:hover': {
      '-TwTranslateX': '25%',
    },
  },
  'hover\\:translate-x-2\\/4:hover': {
    '&:hover': {
      '-TwTranslateX': '50%',
    },
  },
  'hover\\:translate-x-3\\/4:hover': {
    '&:hover': {
      '-TwTranslateX': '75%',
    },
  },
  'hover\\:translate-x-full:hover': {
    '&:hover': {
      '-TwTranslateX': '100%',
    },
  },
  'hover\\:-translate-x-1\\/2:hover': {
    '&:hover': {
      '-TwTranslateX': '-50%',
    },
  },
  'hover\\:-translate-x-1\\/3:hover': {
    '&:hover': {
      '-TwTranslateX': '-33.333333%',
    },
  },
  'hover\\:-translate-x-2\\/3:hover': {
    '&:hover': {
      '-TwTranslateX': '-66.666667%',
    },
  },
  'hover\\:-translate-x-1\\/4:hover': {
    '&:hover': {
      '-TwTranslateX': '-25%',
    },
  },
  'hover\\:-translate-x-2\\/4:hover': {
    '&:hover': {
      '-TwTranslateX': '-50%',
    },
  },
  'hover\\:-translate-x-3\\/4:hover': {
    '&:hover': {
      '-TwTranslateX': '-75%',
    },
  },
  'hover\\:-translate-x-full:hover': {
    '&:hover': {
      '-TwTranslateX': '-100%',
    },
  },
  'hover\\:translate-y-0:hover': {
    '&:hover': {
      '-TwTranslateY': '0px',
    },
  },
  'hover\\:translate-y-1:hover': {
    '&:hover': {
      '-TwTranslateY': '0.25rem',
    },
  },
  'hover\\:translate-y-2:hover': {
    '&:hover': {
      '-TwTranslateY': '0.5rem',
    },
  },
  'hover\\:translate-y-3:hover': {
    '&:hover': {
      '-TwTranslateY': '0.75rem',
    },
  },
  'hover\\:translate-y-4:hover': {
    '&:hover': {
      '-TwTranslateY': '1rem',
    },
  },
  'hover\\:translate-y-5:hover': {
    '&:hover': {
      '-TwTranslateY': '1.25rem',
    },
  },
  'hover\\:translate-y-6:hover': {
    '&:hover': {
      '-TwTranslateY': '1.5rem',
    },
  },
  'hover\\:translate-y-7:hover': {
    '&:hover': {
      '-TwTranslateY': '1.75rem',
    },
  },
  'hover\\:translate-y-8:hover': {
    '&:hover': {
      '-TwTranslateY': '2rem',
    },
  },
  'hover\\:translate-y-9:hover': {
    '&:hover': {
      '-TwTranslateY': '2.25rem',
    },
  },
  'hover\\:translate-y-10:hover': {
    '&:hover': {
      '-TwTranslateY': '2.5rem',
    },
  },
  'hover\\:translate-y-11:hover': {
    '&:hover': {
      '-TwTranslateY': '2.75rem',
    },
  },
  'hover\\:translate-y-12:hover': {
    '&:hover': {
      '-TwTranslateY': '3rem',
    },
  },
  'hover\\:translate-y-14:hover': {
    '&:hover': {
      '-TwTranslateY': '3.5rem',
    },
  },
  'hover\\:translate-y-16:hover': {
    '&:hover': {
      '-TwTranslateY': '4rem',
    },
  },
  'hover\\:translate-y-20:hover': {
    '&:hover': {
      '-TwTranslateY': '5rem',
    },
  },
  'hover\\:translate-y-24:hover': {
    '&:hover': {
      '-TwTranslateY': '6rem',
    },
  },
  'hover\\:translate-y-28:hover': {
    '&:hover': {
      '-TwTranslateY': '7rem',
    },
  },
  'hover\\:translate-y-32:hover': {
    '&:hover': {
      '-TwTranslateY': '8rem',
    },
  },
  'hover\\:translate-y-36:hover': {
    '&:hover': {
      '-TwTranslateY': '9rem',
    },
  },
  'hover\\:translate-y-40:hover': {
    '&:hover': {
      '-TwTranslateY': '10rem',
    },
  },
  'hover\\:translate-y-44:hover': {
    '&:hover': {
      '-TwTranslateY': '11rem',
    },
  },
  'hover\\:translate-y-48:hover': {
    '&:hover': {
      '-TwTranslateY': '12rem',
    },
  },
  'hover\\:translate-y-52:hover': {
    '&:hover': {
      '-TwTranslateY': '13rem',
    },
  },
  'hover\\:translate-y-56:hover': {
    '&:hover': {
      '-TwTranslateY': '14rem',
    },
  },
  'hover\\:translate-y-60:hover': {
    '&:hover': {
      '-TwTranslateY': '15rem',
    },
  },
  'hover\\:translate-y-64:hover': {
    '&:hover': {
      '-TwTranslateY': '16rem',
    },
  },
  'hover\\:translate-y-72:hover': {
    '&:hover': {
      '-TwTranslateY': '18rem',
    },
  },
  'hover\\:translate-y-80:hover': {
    '&:hover': {
      '-TwTranslateY': '20rem',
    },
  },
  'hover\\:translate-y-96:hover': {
    '&:hover': {
      '-TwTranslateY': '24rem',
    },
  },
  'hover\\:translate-y-px:hover': {
    '&:hover': {
      '-TwTranslateY': '1px',
    },
  },
  'hover\\:translate-y-0\\.5:hover': {
    '&:hover': {
      '-TwTranslateY': '0.125rem',
    },
  },
  'hover\\:translate-y-1\\.5:hover': {
    '&:hover': {
      '-TwTranslateY': '0.375rem',
    },
  },
  'hover\\:translate-y-2\\.5:hover': {
    '&:hover': {
      '-TwTranslateY': '0.625rem',
    },
  },
  'hover\\:translate-y-3\\.5:hover': {
    '&:hover': {
      '-TwTranslateY': '0.875rem',
    },
  },
  'hover\\:-translate-y-0:hover': {
    '&:hover': {
      '-TwTranslateY': '0px',
    },
  },
  'hover\\:-translate-y-1:hover': {
    '&:hover': {
      '-TwTranslateY': '-0.25rem',
    },
  },
  'hover\\:-translate-y-2:hover': {
    '&:hover': {
      '-TwTranslateY': '-0.5rem',
    },
  },
  'hover\\:-translate-y-3:hover': {
    '&:hover': {
      '-TwTranslateY': '-0.75rem',
    },
  },
  'hover\\:-translate-y-4:hover': {
    '&:hover': {
      '-TwTranslateY': '-1rem',
    },
  },
  'hover\\:-translate-y-5:hover': {
    '&:hover': {
      '-TwTranslateY': '-1.25rem',
    },
  },
  'hover\\:-translate-y-6:hover': {
    '&:hover': {
      '-TwTranslateY': '-1.5rem',
    },
  },
  'hover\\:-translate-y-7:hover': {
    '&:hover': {
      '-TwTranslateY': '-1.75rem',
    },
  },
  'hover\\:-translate-y-8:hover': {
    '&:hover': {
      '-TwTranslateY': '-2rem',
    },
  },
  'hover\\:-translate-y-9:hover': {
    '&:hover': {
      '-TwTranslateY': '-2.25rem',
    },
  },
  'hover\\:-translate-y-10:hover': {
    '&:hover': {
      '-TwTranslateY': '-2.5rem',
    },
  },
  'hover\\:-translate-y-11:hover': {
    '&:hover': {
      '-TwTranslateY': '-2.75rem',
    },
  },
  'hover\\:-translate-y-12:hover': {
    '&:hover': {
      '-TwTranslateY': '-3rem',
    },
  },
  'hover\\:-translate-y-14:hover': {
    '&:hover': {
      '-TwTranslateY': '-3.5rem',
    },
  },
  'hover\\:-translate-y-16:hover': {
    '&:hover': {
      '-TwTranslateY': '-4rem',
    },
  },
  'hover\\:-translate-y-20:hover': {
    '&:hover': {
      '-TwTranslateY': '-5rem',
    },
  },
  'hover\\:-translate-y-24:hover': {
    '&:hover': {
      '-TwTranslateY': '-6rem',
    },
  },
  'hover\\:-translate-y-28:hover': {
    '&:hover': {
      '-TwTranslateY': '-7rem',
    },
  },
  'hover\\:-translate-y-32:hover': {
    '&:hover': {
      '-TwTranslateY': '-8rem',
    },
  },
  'hover\\:-translate-y-36:hover': {
    '&:hover': {
      '-TwTranslateY': '-9rem',
    },
  },
  'hover\\:-translate-y-40:hover': {
    '&:hover': {
      '-TwTranslateY': '-10rem',
    },
  },
  'hover\\:-translate-y-44:hover': {
    '&:hover': {
      '-TwTranslateY': '-11rem',
    },
  },
  'hover\\:-translate-y-48:hover': {
    '&:hover': {
      '-TwTranslateY': '-12rem',
    },
  },
  'hover\\:-translate-y-52:hover': {
    '&:hover': {
      '-TwTranslateY': '-13rem',
    },
  },
  'hover\\:-translate-y-56:hover': {
    '&:hover': {
      '-TwTranslateY': '-14rem',
    },
  },
  'hover\\:-translate-y-60:hover': {
    '&:hover': {
      '-TwTranslateY': '-15rem',
    },
  },
  'hover\\:-translate-y-64:hover': {
    '&:hover': {
      '-TwTranslateY': '-16rem',
    },
  },
  'hover\\:-translate-y-72:hover': {
    '&:hover': {
      '-TwTranslateY': '-18rem',
    },
  },
  'hover\\:-translate-y-80:hover': {
    '&:hover': {
      '-TwTranslateY': '-20rem',
    },
  },
  'hover\\:-translate-y-96:hover': {
    '&:hover': {
      '-TwTranslateY': '-24rem',
    },
  },
  'hover\\:-translate-y-px:hover': {
    '&:hover': {
      '-TwTranslateY': '-1px',
    },
  },
  'hover\\:-translate-y-0\\.5:hover': {
    '&:hover': {
      '-TwTranslateY': '-0.125rem',
    },
  },
  'hover\\:-translate-y-1\\.5:hover': {
    '&:hover': {
      '-TwTranslateY': '-0.375rem',
    },
  },
  'hover\\:-translate-y-2\\.5:hover': {
    '&:hover': {
      '-TwTranslateY': '-0.625rem',
    },
  },
  'hover\\:-translate-y-3\\.5:hover': {
    '&:hover': {
      '-TwTranslateY': '-0.875rem',
    },
  },
  'hover\\:translate-y-1\\/2:hover': {
    '&:hover': {
      '-TwTranslateY': '50%',
    },
  },
  'hover\\:translate-y-1\\/3:hover': {
    '&:hover': {
      '-TwTranslateY': '33.333333%',
    },
  },
  'hover\\:translate-y-2\\/3:hover': {
    '&:hover': {
      '-TwTranslateY': '66.666667%',
    },
  },
  'hover\\:translate-y-1\\/4:hover': {
    '&:hover': {
      '-TwTranslateY': '25%',
    },
  },
  'hover\\:translate-y-2\\/4:hover': {
    '&:hover': {
      '-TwTranslateY': '50%',
    },
  },
  'hover\\:translate-y-3\\/4:hover': {
    '&:hover': {
      '-TwTranslateY': '75%',
    },
  },
  'hover\\:translate-y-full:hover': {
    '&:hover': {
      '-TwTranslateY': '100%',
    },
  },
  'hover\\:-translate-y-1\\/2:hover': {
    '&:hover': {
      '-TwTranslateY': '-50%',
    },
  },
  'hover\\:-translate-y-1\\/3:hover': {
    '&:hover': {
      '-TwTranslateY': '-33.333333%',
    },
  },
  'hover\\:-translate-y-2\\/3:hover': {
    '&:hover': {
      '-TwTranslateY': '-66.666667%',
    },
  },
  'hover\\:-translate-y-1\\/4:hover': {
    '&:hover': {
      '-TwTranslateY': '-25%',
    },
  },
  'hover\\:-translate-y-2\\/4:hover': {
    '&:hover': {
      '-TwTranslateY': '-50%',
    },
  },
  'hover\\:-translate-y-3\\/4:hover': {
    '&:hover': {
      '-TwTranslateY': '-75%',
    },
  },
  'hover\\:-translate-y-full:hover': {
    '&:hover': {
      '-TwTranslateY': '-100%',
    },
  },
  'focus\\:translate-x-0:focus': {
    '&:focus': {
      '-TwTranslateX': '0px',
    },
  },
  'focus\\:translate-x-1:focus': {
    '&:focus': {
      '-TwTranslateX': '0.25rem',
    },
  },
  'focus\\:translate-x-2:focus': {
    '&:focus': {
      '-TwTranslateX': '0.5rem',
    },
  },
  'focus\\:translate-x-3:focus': {
    '&:focus': {
      '-TwTranslateX': '0.75rem',
    },
  },
  'focus\\:translate-x-4:focus': {
    '&:focus': {
      '-TwTranslateX': '1rem',
    },
  },
  'focus\\:translate-x-5:focus': {
    '&:focus': {
      '-TwTranslateX': '1.25rem',
    },
  },
  'focus\\:translate-x-6:focus': {
    '&:focus': {
      '-TwTranslateX': '1.5rem',
    },
  },
  'focus\\:translate-x-7:focus': {
    '&:focus': {
      '-TwTranslateX': '1.75rem',
    },
  },
  'focus\\:translate-x-8:focus': {
    '&:focus': {
      '-TwTranslateX': '2rem',
    },
  },
  'focus\\:translate-x-9:focus': {
    '&:focus': {
      '-TwTranslateX': '2.25rem',
    },
  },
  'focus\\:translate-x-10:focus': {
    '&:focus': {
      '-TwTranslateX': '2.5rem',
    },
  },
  'focus\\:translate-x-11:focus': {
    '&:focus': {
      '-TwTranslateX': '2.75rem',
    },
  },
  'focus\\:translate-x-12:focus': {
    '&:focus': {
      '-TwTranslateX': '3rem',
    },
  },
  'focus\\:translate-x-14:focus': {
    '&:focus': {
      '-TwTranslateX': '3.5rem',
    },
  },
  'focus\\:translate-x-16:focus': {
    '&:focus': {
      '-TwTranslateX': '4rem',
    },
  },
  'focus\\:translate-x-20:focus': {
    '&:focus': {
      '-TwTranslateX': '5rem',
    },
  },
  'focus\\:translate-x-24:focus': {
    '&:focus': {
      '-TwTranslateX': '6rem',
    },
  },
  'focus\\:translate-x-28:focus': {
    '&:focus': {
      '-TwTranslateX': '7rem',
    },
  },
  'focus\\:translate-x-32:focus': {
    '&:focus': {
      '-TwTranslateX': '8rem',
    },
  },
  'focus\\:translate-x-36:focus': {
    '&:focus': {
      '-TwTranslateX': '9rem',
    },
  },
  'focus\\:translate-x-40:focus': {
    '&:focus': {
      '-TwTranslateX': '10rem',
    },
  },
  'focus\\:translate-x-44:focus': {
    '&:focus': {
      '-TwTranslateX': '11rem',
    },
  },
  'focus\\:translate-x-48:focus': {
    '&:focus': {
      '-TwTranslateX': '12rem',
    },
  },
  'focus\\:translate-x-52:focus': {
    '&:focus': {
      '-TwTranslateX': '13rem',
    },
  },
  'focus\\:translate-x-56:focus': {
    '&:focus': {
      '-TwTranslateX': '14rem',
    },
  },
  'focus\\:translate-x-60:focus': {
    '&:focus': {
      '-TwTranslateX': '15rem',
    },
  },
  'focus\\:translate-x-64:focus': {
    '&:focus': {
      '-TwTranslateX': '16rem',
    },
  },
  'focus\\:translate-x-72:focus': {
    '&:focus': {
      '-TwTranslateX': '18rem',
    },
  },
  'focus\\:translate-x-80:focus': {
    '&:focus': {
      '-TwTranslateX': '20rem',
    },
  },
  'focus\\:translate-x-96:focus': {
    '&:focus': {
      '-TwTranslateX': '24rem',
    },
  },
  'focus\\:translate-x-px:focus': {
    '&:focus': {
      '-TwTranslateX': '1px',
    },
  },
  'focus\\:translate-x-0\\.5:focus': {
    '&:focus': {
      '-TwTranslateX': '0.125rem',
    },
  },
  'focus\\:translate-x-1\\.5:focus': {
    '&:focus': {
      '-TwTranslateX': '0.375rem',
    },
  },
  'focus\\:translate-x-2\\.5:focus': {
    '&:focus': {
      '-TwTranslateX': '0.625rem',
    },
  },
  'focus\\:translate-x-3\\.5:focus': {
    '&:focus': {
      '-TwTranslateX': '0.875rem',
    },
  },
  'focus\\:-translate-x-0:focus': {
    '&:focus': {
      '-TwTranslateX': '0px',
    },
  },
  'focus\\:-translate-x-1:focus': {
    '&:focus': {
      '-TwTranslateX': '-0.25rem',
    },
  },
  'focus\\:-translate-x-2:focus': {
    '&:focus': {
      '-TwTranslateX': '-0.5rem',
    },
  },
  'focus\\:-translate-x-3:focus': {
    '&:focus': {
      '-TwTranslateX': '-0.75rem',
    },
  },
  'focus\\:-translate-x-4:focus': {
    '&:focus': {
      '-TwTranslateX': '-1rem',
    },
  },
  'focus\\:-translate-x-5:focus': {
    '&:focus': {
      '-TwTranslateX': '-1.25rem',
    },
  },
  'focus\\:-translate-x-6:focus': {
    '&:focus': {
      '-TwTranslateX': '-1.5rem',
    },
  },
  'focus\\:-translate-x-7:focus': {
    '&:focus': {
      '-TwTranslateX': '-1.75rem',
    },
  },
  'focus\\:-translate-x-8:focus': {
    '&:focus': {
      '-TwTranslateX': '-2rem',
    },
  },
  'focus\\:-translate-x-9:focus': {
    '&:focus': {
      '-TwTranslateX': '-2.25rem',
    },
  },
  'focus\\:-translate-x-10:focus': {
    '&:focus': {
      '-TwTranslateX': '-2.5rem',
    },
  },
  'focus\\:-translate-x-11:focus': {
    '&:focus': {
      '-TwTranslateX': '-2.75rem',
    },
  },
  'focus\\:-translate-x-12:focus': {
    '&:focus': {
      '-TwTranslateX': '-3rem',
    },
  },
  'focus\\:-translate-x-14:focus': {
    '&:focus': {
      '-TwTranslateX': '-3.5rem',
    },
  },
  'focus\\:-translate-x-16:focus': {
    '&:focus': {
      '-TwTranslateX': '-4rem',
    },
  },
  'focus\\:-translate-x-20:focus': {
    '&:focus': {
      '-TwTranslateX': '-5rem',
    },
  },
  'focus\\:-translate-x-24:focus': {
    '&:focus': {
      '-TwTranslateX': '-6rem',
    },
  },
  'focus\\:-translate-x-28:focus': {
    '&:focus': {
      '-TwTranslateX': '-7rem',
    },
  },
  'focus\\:-translate-x-32:focus': {
    '&:focus': {
      '-TwTranslateX': '-8rem',
    },
  },
  'focus\\:-translate-x-36:focus': {
    '&:focus': {
      '-TwTranslateX': '-9rem',
    },
  },
  'focus\\:-translate-x-40:focus': {
    '&:focus': {
      '-TwTranslateX': '-10rem',
    },
  },
  'focus\\:-translate-x-44:focus': {
    '&:focus': {
      '-TwTranslateX': '-11rem',
    },
  },
  'focus\\:-translate-x-48:focus': {
    '&:focus': {
      '-TwTranslateX': '-12rem',
    },
  },
  'focus\\:-translate-x-52:focus': {
    '&:focus': {
      '-TwTranslateX': '-13rem',
    },
  },
  'focus\\:-translate-x-56:focus': {
    '&:focus': {
      '-TwTranslateX': '-14rem',
    },
  },
  'focus\\:-translate-x-60:focus': {
    '&:focus': {
      '-TwTranslateX': '-15rem',
    },
  },
  'focus\\:-translate-x-64:focus': {
    '&:focus': {
      '-TwTranslateX': '-16rem',
    },
  },
  'focus\\:-translate-x-72:focus': {
    '&:focus': {
      '-TwTranslateX': '-18rem',
    },
  },
  'focus\\:-translate-x-80:focus': {
    '&:focus': {
      '-TwTranslateX': '-20rem',
    },
  },
  'focus\\:-translate-x-96:focus': {
    '&:focus': {
      '-TwTranslateX': '-24rem',
    },
  },
  'focus\\:-translate-x-px:focus': {
    '&:focus': {
      '-TwTranslateX': '-1px',
    },
  },
  'focus\\:-translate-x-0\\.5:focus': {
    '&:focus': {
      '-TwTranslateX': '-0.125rem',
    },
  },
  'focus\\:-translate-x-1\\.5:focus': {
    '&:focus': {
      '-TwTranslateX': '-0.375rem',
    },
  },
  'focus\\:-translate-x-2\\.5:focus': {
    '&:focus': {
      '-TwTranslateX': '-0.625rem',
    },
  },
  'focus\\:-translate-x-3\\.5:focus': {
    '&:focus': {
      '-TwTranslateX': '-0.875rem',
    },
  },
  'focus\\:translate-x-1\\/2:focus': {
    '&:focus': {
      '-TwTranslateX': '50%',
    },
  },
  'focus\\:translate-x-1\\/3:focus': {
    '&:focus': {
      '-TwTranslateX': '33.333333%',
    },
  },
  'focus\\:translate-x-2\\/3:focus': {
    '&:focus': {
      '-TwTranslateX': '66.666667%',
    },
  },
  'focus\\:translate-x-1\\/4:focus': {
    '&:focus': {
      '-TwTranslateX': '25%',
    },
  },
  'focus\\:translate-x-2\\/4:focus': {
    '&:focus': {
      '-TwTranslateX': '50%',
    },
  },
  'focus\\:translate-x-3\\/4:focus': {
    '&:focus': {
      '-TwTranslateX': '75%',
    },
  },
  'focus\\:translate-x-full:focus': {
    '&:focus': {
      '-TwTranslateX': '100%',
    },
  },
  'focus\\:-translate-x-1\\/2:focus': {
    '&:focus': {
      '-TwTranslateX': '-50%',
    },
  },
  'focus\\:-translate-x-1\\/3:focus': {
    '&:focus': {
      '-TwTranslateX': '-33.333333%',
    },
  },
  'focus\\:-translate-x-2\\/3:focus': {
    '&:focus': {
      '-TwTranslateX': '-66.666667%',
    },
  },
  'focus\\:-translate-x-1\\/4:focus': {
    '&:focus': {
      '-TwTranslateX': '-25%',
    },
  },
  'focus\\:-translate-x-2\\/4:focus': {
    '&:focus': {
      '-TwTranslateX': '-50%',
    },
  },
  'focus\\:-translate-x-3\\/4:focus': {
    '&:focus': {
      '-TwTranslateX': '-75%',
    },
  },
  'focus\\:-translate-x-full:focus': {
    '&:focus': {
      '-TwTranslateX': '-100%',
    },
  },
  'focus\\:translate-y-0:focus': {
    '&:focus': {
      '-TwTranslateY': '0px',
    },
  },
  'focus\\:translate-y-1:focus': {
    '&:focus': {
      '-TwTranslateY': '0.25rem',
    },
  },
  'focus\\:translate-y-2:focus': {
    '&:focus': {
      '-TwTranslateY': '0.5rem',
    },
  },
  'focus\\:translate-y-3:focus': {
    '&:focus': {
      '-TwTranslateY': '0.75rem',
    },
  },
  'focus\\:translate-y-4:focus': {
    '&:focus': {
      '-TwTranslateY': '1rem',
    },
  },
  'focus\\:translate-y-5:focus': {
    '&:focus': {
      '-TwTranslateY': '1.25rem',
    },
  },
  'focus\\:translate-y-6:focus': {
    '&:focus': {
      '-TwTranslateY': '1.5rem',
    },
  },
  'focus\\:translate-y-7:focus': {
    '&:focus': {
      '-TwTranslateY': '1.75rem',
    },
  },
  'focus\\:translate-y-8:focus': {
    '&:focus': {
      '-TwTranslateY': '2rem',
    },
  },
  'focus\\:translate-y-9:focus': {
    '&:focus': {
      '-TwTranslateY': '2.25rem',
    },
  },
  'focus\\:translate-y-10:focus': {
    '&:focus': {
      '-TwTranslateY': '2.5rem',
    },
  },
  'focus\\:translate-y-11:focus': {
    '&:focus': {
      '-TwTranslateY': '2.75rem',
    },
  },
  'focus\\:translate-y-12:focus': {
    '&:focus': {
      '-TwTranslateY': '3rem',
    },
  },
  'focus\\:translate-y-14:focus': {
    '&:focus': {
      '-TwTranslateY': '3.5rem',
    },
  },
  'focus\\:translate-y-16:focus': {
    '&:focus': {
      '-TwTranslateY': '4rem',
    },
  },
  'focus\\:translate-y-20:focus': {
    '&:focus': {
      '-TwTranslateY': '5rem',
    },
  },
  'focus\\:translate-y-24:focus': {
    '&:focus': {
      '-TwTranslateY': '6rem',
    },
  },
  'focus\\:translate-y-28:focus': {
    '&:focus': {
      '-TwTranslateY': '7rem',
    },
  },
  'focus\\:translate-y-32:focus': {
    '&:focus': {
      '-TwTranslateY': '8rem',
    },
  },
  'focus\\:translate-y-36:focus': {
    '&:focus': {
      '-TwTranslateY': '9rem',
    },
  },
  'focus\\:translate-y-40:focus': {
    '&:focus': {
      '-TwTranslateY': '10rem',
    },
  },
  'focus\\:translate-y-44:focus': {
    '&:focus': {
      '-TwTranslateY': '11rem',
    },
  },
  'focus\\:translate-y-48:focus': {
    '&:focus': {
      '-TwTranslateY': '12rem',
    },
  },
  'focus\\:translate-y-52:focus': {
    '&:focus': {
      '-TwTranslateY': '13rem',
    },
  },
  'focus\\:translate-y-56:focus': {
    '&:focus': {
      '-TwTranslateY': '14rem',
    },
  },
  'focus\\:translate-y-60:focus': {
    '&:focus': {
      '-TwTranslateY': '15rem',
    },
  },
  'focus\\:translate-y-64:focus': {
    '&:focus': {
      '-TwTranslateY': '16rem',
    },
  },
  'focus\\:translate-y-72:focus': {
    '&:focus': {
      '-TwTranslateY': '18rem',
    },
  },
  'focus\\:translate-y-80:focus': {
    '&:focus': {
      '-TwTranslateY': '20rem',
    },
  },
  'focus\\:translate-y-96:focus': {
    '&:focus': {
      '-TwTranslateY': '24rem',
    },
  },
  'focus\\:translate-y-px:focus': {
    '&:focus': {
      '-TwTranslateY': '1px',
    },
  },
  'focus\\:translate-y-0\\.5:focus': {
    '&:focus': {
      '-TwTranslateY': '0.125rem',
    },
  },
  'focus\\:translate-y-1\\.5:focus': {
    '&:focus': {
      '-TwTranslateY': '0.375rem',
    },
  },
  'focus\\:translate-y-2\\.5:focus': {
    '&:focus': {
      '-TwTranslateY': '0.625rem',
    },
  },
  'focus\\:translate-y-3\\.5:focus': {
    '&:focus': {
      '-TwTranslateY': '0.875rem',
    },
  },
  'focus\\:-translate-y-0:focus': {
    '&:focus': {
      '-TwTranslateY': '0px',
    },
  },
  'focus\\:-translate-y-1:focus': {
    '&:focus': {
      '-TwTranslateY': '-0.25rem',
    },
  },
  'focus\\:-translate-y-2:focus': {
    '&:focus': {
      '-TwTranslateY': '-0.5rem',
    },
  },
  'focus\\:-translate-y-3:focus': {
    '&:focus': {
      '-TwTranslateY': '-0.75rem',
    },
  },
  'focus\\:-translate-y-4:focus': {
    '&:focus': {
      '-TwTranslateY': '-1rem',
    },
  },
  'focus\\:-translate-y-5:focus': {
    '&:focus': {
      '-TwTranslateY': '-1.25rem',
    },
  },
  'focus\\:-translate-y-6:focus': {
    '&:focus': {
      '-TwTranslateY': '-1.5rem',
    },
  },
  'focus\\:-translate-y-7:focus': {
    '&:focus': {
      '-TwTranslateY': '-1.75rem',
    },
  },
  'focus\\:-translate-y-8:focus': {
    '&:focus': {
      '-TwTranslateY': '-2rem',
    },
  },
  'focus\\:-translate-y-9:focus': {
    '&:focus': {
      '-TwTranslateY': '-2.25rem',
    },
  },
  'focus\\:-translate-y-10:focus': {
    '&:focus': {
      '-TwTranslateY': '-2.5rem',
    },
  },
  'focus\\:-translate-y-11:focus': {
    '&:focus': {
      '-TwTranslateY': '-2.75rem',
    },
  },
  'focus\\:-translate-y-12:focus': {
    '&:focus': {
      '-TwTranslateY': '-3rem',
    },
  },
  'focus\\:-translate-y-14:focus': {
    '&:focus': {
      '-TwTranslateY': '-3.5rem',
    },
  },
  'focus\\:-translate-y-16:focus': {
    '&:focus': {
      '-TwTranslateY': '-4rem',
    },
  },
  'focus\\:-translate-y-20:focus': {
    '&:focus': {
      '-TwTranslateY': '-5rem',
    },
  },
  'focus\\:-translate-y-24:focus': {
    '&:focus': {
      '-TwTranslateY': '-6rem',
    },
  },
  'focus\\:-translate-y-28:focus': {
    '&:focus': {
      '-TwTranslateY': '-7rem',
    },
  },
  'focus\\:-translate-y-32:focus': {
    '&:focus': {
      '-TwTranslateY': '-8rem',
    },
  },
  'focus\\:-translate-y-36:focus': {
    '&:focus': {
      '-TwTranslateY': '-9rem',
    },
  },
  'focus\\:-translate-y-40:focus': {
    '&:focus': {
      '-TwTranslateY': '-10rem',
    },
  },
  'focus\\:-translate-y-44:focus': {
    '&:focus': {
      '-TwTranslateY': '-11rem',
    },
  },
  'focus\\:-translate-y-48:focus': {
    '&:focus': {
      '-TwTranslateY': '-12rem',
    },
  },
  'focus\\:-translate-y-52:focus': {
    '&:focus': {
      '-TwTranslateY': '-13rem',
    },
  },
  'focus\\:-translate-y-56:focus': {
    '&:focus': {
      '-TwTranslateY': '-14rem',
    },
  },
  'focus\\:-translate-y-60:focus': {
    '&:focus': {
      '-TwTranslateY': '-15rem',
    },
  },
  'focus\\:-translate-y-64:focus': {
    '&:focus': {
      '-TwTranslateY': '-16rem',
    },
  },
  'focus\\:-translate-y-72:focus': {
    '&:focus': {
      '-TwTranslateY': '-18rem',
    },
  },
  'focus\\:-translate-y-80:focus': {
    '&:focus': {
      '-TwTranslateY': '-20rem',
    },
  },
  'focus\\:-translate-y-96:focus': {
    '&:focus': {
      '-TwTranslateY': '-24rem',
    },
  },
  'focus\\:-translate-y-px:focus': {
    '&:focus': {
      '-TwTranslateY': '-1px',
    },
  },
  'focus\\:-translate-y-0\\.5:focus': {
    '&:focus': {
      '-TwTranslateY': '-0.125rem',
    },
  },
  'focus\\:-translate-y-1\\.5:focus': {
    '&:focus': {
      '-TwTranslateY': '-0.375rem',
    },
  },
  'focus\\:-translate-y-2\\.5:focus': {
    '&:focus': {
      '-TwTranslateY': '-0.625rem',
    },
  },
  'focus\\:-translate-y-3\\.5:focus': {
    '&:focus': {
      '-TwTranslateY': '-0.875rem',
    },
  },
  'focus\\:translate-y-1\\/2:focus': {
    '&:focus': {
      '-TwTranslateY': '50%',
    },
  },
  'focus\\:translate-y-1\\/3:focus': {
    '&:focus': {
      '-TwTranslateY': '33.333333%',
    },
  },
  'focus\\:translate-y-2\\/3:focus': {
    '&:focus': {
      '-TwTranslateY': '66.666667%',
    },
  },
  'focus\\:translate-y-1\\/4:focus': {
    '&:focus': {
      '-TwTranslateY': '25%',
    },
  },
  'focus\\:translate-y-2\\/4:focus': {
    '&:focus': {
      '-TwTranslateY': '50%',
    },
  },
  'focus\\:translate-y-3\\/4:focus': {
    '&:focus': {
      '-TwTranslateY': '75%',
    },
  },
  'focus\\:translate-y-full:focus': {
    '&:focus': {
      '-TwTranslateY': '100%',
    },
  },
  'focus\\:-translate-y-1\\/2:focus': {
    '&:focus': {
      '-TwTranslateY': '-50%',
    },
  },
  'focus\\:-translate-y-1\\/3:focus': {
    '&:focus': {
      '-TwTranslateY': '-33.333333%',
    },
  },
  'focus\\:-translate-y-2\\/3:focus': {
    '&:focus': {
      '-TwTranslateY': '-66.666667%',
    },
  },
  'focus\\:-translate-y-1\\/4:focus': {
    '&:focus': {
      '-TwTranslateY': '-25%',
    },
  },
  'focus\\:-translate-y-2\\/4:focus': {
    '&:focus': {
      '-TwTranslateY': '-50%',
    },
  },
  'focus\\:-translate-y-3\\/4:focus': {
    '&:focus': {
      '-TwTranslateY': '-75%',
    },
  },
  'focus\\:-translate-y-full:focus': {
    '&:focus': {
      '-TwTranslateY': '-100%',
    },
  },
  'rotate-0': {
    '-TwRotate': '0deg',
  },
  'rotate-1': {
    '-TwRotate': '1deg',
  },
  'rotate-2': {
    '-TwRotate': '2deg',
  },
  'rotate-3': {
    '-TwRotate': '3deg',
  },
  'rotate-6': {
    '-TwRotate': '6deg',
  },
  'rotate-12': {
    '-TwRotate': '12deg',
  },
  'rotate-45': {
    '-TwRotate': '45deg',
  },
  'rotate-90': {
    '-TwRotate': '90deg',
  },
  'rotate-180': {
    '-TwRotate': '180deg',
  },
  '-rotate-180': {
    '-TwRotate': '-180deg',
  },
  '-rotate-90': {
    '-TwRotate': '-90deg',
  },
  '-rotate-45': {
    '-TwRotate': '-45deg',
  },
  '-rotate-12': {
    '-TwRotate': '-12deg',
  },
  '-rotate-6': {
    '-TwRotate': '-6deg',
  },
  '-rotate-3': {
    '-TwRotate': '-3deg',
  },
  '-rotate-2': {
    '-TwRotate': '-2deg',
  },
  '-rotate-1': {
    '-TwRotate': '-1deg',
  },
  'hover\\:rotate-0:hover': {
    '&:hover': {
      '-TwRotate': '0deg',
    },
  },
  'hover\\:rotate-1:hover': {
    '&:hover': {
      '-TwRotate': '1deg',
    },
  },
  'hover\\:rotate-2:hover': {
    '&:hover': {
      '-TwRotate': '2deg',
    },
  },
  'hover\\:rotate-3:hover': {
    '&:hover': {
      '-TwRotate': '3deg',
    },
  },
  'hover\\:rotate-6:hover': {
    '&:hover': {
      '-TwRotate': '6deg',
    },
  },
  'hover\\:rotate-12:hover': {
    '&:hover': {
      '-TwRotate': '12deg',
    },
  },
  'hover\\:rotate-45:hover': {
    '&:hover': {
      '-TwRotate': '45deg',
    },
  },
  'hover\\:rotate-90:hover': {
    '&:hover': {
      '-TwRotate': '90deg',
    },
  },
  'hover\\:rotate-180:hover': {
    '&:hover': {
      '-TwRotate': '180deg',
    },
  },
  'hover\\:-rotate-180:hover': {
    '&:hover': {
      '-TwRotate': '-180deg',
    },
  },
  'hover\\:-rotate-90:hover': {
    '&:hover': {
      '-TwRotate': '-90deg',
    },
  },
  'hover\\:-rotate-45:hover': {
    '&:hover': {
      '-TwRotate': '-45deg',
    },
  },
  'hover\\:-rotate-12:hover': {
    '&:hover': {
      '-TwRotate': '-12deg',
    },
  },
  'hover\\:-rotate-6:hover': {
    '&:hover': {
      '-TwRotate': '-6deg',
    },
  },
  'hover\\:-rotate-3:hover': {
    '&:hover': {
      '-TwRotate': '-3deg',
    },
  },
  'hover\\:-rotate-2:hover': {
    '&:hover': {
      '-TwRotate': '-2deg',
    },
  },
  'hover\\:-rotate-1:hover': {
    '&:hover': {
      '-TwRotate': '-1deg',
    },
  },
  'focus\\:rotate-0:focus': {
    '&:focus': {
      '-TwRotate': '0deg',
    },
  },
  'focus\\:rotate-1:focus': {
    '&:focus': {
      '-TwRotate': '1deg',
    },
  },
  'focus\\:rotate-2:focus': {
    '&:focus': {
      '-TwRotate': '2deg',
    },
  },
  'focus\\:rotate-3:focus': {
    '&:focus': {
      '-TwRotate': '3deg',
    },
  },
  'focus\\:rotate-6:focus': {
    '&:focus': {
      '-TwRotate': '6deg',
    },
  },
  'focus\\:rotate-12:focus': {
    '&:focus': {
      '-TwRotate': '12deg',
    },
  },
  'focus\\:rotate-45:focus': {
    '&:focus': {
      '-TwRotate': '45deg',
    },
  },
  'focus\\:rotate-90:focus': {
    '&:focus': {
      '-TwRotate': '90deg',
    },
  },
  'focus\\:rotate-180:focus': {
    '&:focus': {
      '-TwRotate': '180deg',
    },
  },
  'focus\\:-rotate-180:focus': {
    '&:focus': {
      '-TwRotate': '-180deg',
    },
  },
  'focus\\:-rotate-90:focus': {
    '&:focus': {
      '-TwRotate': '-90deg',
    },
  },
  'focus\\:-rotate-45:focus': {
    '&:focus': {
      '-TwRotate': '-45deg',
    },
  },
  'focus\\:-rotate-12:focus': {
    '&:focus': {
      '-TwRotate': '-12deg',
    },
  },
  'focus\\:-rotate-6:focus': {
    '&:focus': {
      '-TwRotate': '-6deg',
    },
  },
  'focus\\:-rotate-3:focus': {
    '&:focus': {
      '-TwRotate': '-3deg',
    },
  },
  'focus\\:-rotate-2:focus': {
    '&:focus': {
      '-TwRotate': '-2deg',
    },
  },
  'focus\\:-rotate-1:focus': {
    '&:focus': {
      '-TwRotate': '-1deg',
    },
  },
  'skew-x-0': {
    '-TwSkewX': '0deg',
  },
  'skew-x-1': {
    '-TwSkewX': '1deg',
  },
  'skew-x-2': {
    '-TwSkewX': '2deg',
  },
  'skew-x-3': {
    '-TwSkewX': '3deg',
  },
  'skew-x-6': {
    '-TwSkewX': '6deg',
  },
  'skew-x-12': {
    '-TwSkewX': '12deg',
  },
  '-skew-x-12': {
    '-TwSkewX': '-12deg',
  },
  '-skew-x-6': {
    '-TwSkewX': '-6deg',
  },
  '-skew-x-3': {
    '-TwSkewX': '-3deg',
  },
  '-skew-x-2': {
    '-TwSkewX': '-2deg',
  },
  '-skew-x-1': {
    '-TwSkewX': '-1deg',
  },
  'skew-y-0': {
    '-TwSkewY': '0deg',
  },
  'skew-y-1': {
    '-TwSkewY': '1deg',
  },
  'skew-y-2': {
    '-TwSkewY': '2deg',
  },
  'skew-y-3': {
    '-TwSkewY': '3deg',
  },
  'skew-y-6': {
    '-TwSkewY': '6deg',
  },
  'skew-y-12': {
    '-TwSkewY': '12deg',
  },
  '-skew-y-12': {
    '-TwSkewY': '-12deg',
  },
  '-skew-y-6': {
    '-TwSkewY': '-6deg',
  },
  '-skew-y-3': {
    '-TwSkewY': '-3deg',
  },
  '-skew-y-2': {
    '-TwSkewY': '-2deg',
  },
  '-skew-y-1': {
    '-TwSkewY': '-1deg',
  },
  'hover\\:skew-x-0:hover': {
    '&:hover': {
      '-TwSkewX': '0deg',
    },
  },
  'hover\\:skew-x-1:hover': {
    '&:hover': {
      '-TwSkewX': '1deg',
    },
  },
  'hover\\:skew-x-2:hover': {
    '&:hover': {
      '-TwSkewX': '2deg',
    },
  },
  'hover\\:skew-x-3:hover': {
    '&:hover': {
      '-TwSkewX': '3deg',
    },
  },
  'hover\\:skew-x-6:hover': {
    '&:hover': {
      '-TwSkewX': '6deg',
    },
  },
  'hover\\:skew-x-12:hover': {
    '&:hover': {
      '-TwSkewX': '12deg',
    },
  },
  'hover\\:-skew-x-12:hover': {
    '&:hover': {
      '-TwSkewX': '-12deg',
    },
  },
  'hover\\:-skew-x-6:hover': {
    '&:hover': {
      '-TwSkewX': '-6deg',
    },
  },
  'hover\\:-skew-x-3:hover': {
    '&:hover': {
      '-TwSkewX': '-3deg',
    },
  },
  'hover\\:-skew-x-2:hover': {
    '&:hover': {
      '-TwSkewX': '-2deg',
    },
  },
  'hover\\:-skew-x-1:hover': {
    '&:hover': {
      '-TwSkewX': '-1deg',
    },
  },
  'hover\\:skew-y-0:hover': {
    '&:hover': {
      '-TwSkewY': '0deg',
    },
  },
  'hover\\:skew-y-1:hover': {
    '&:hover': {
      '-TwSkewY': '1deg',
    },
  },
  'hover\\:skew-y-2:hover': {
    '&:hover': {
      '-TwSkewY': '2deg',
    },
  },
  'hover\\:skew-y-3:hover': {
    '&:hover': {
      '-TwSkewY': '3deg',
    },
  },
  'hover\\:skew-y-6:hover': {
    '&:hover': {
      '-TwSkewY': '6deg',
    },
  },
  'hover\\:skew-y-12:hover': {
    '&:hover': {
      '-TwSkewY': '12deg',
    },
  },
  'hover\\:-skew-y-12:hover': {
    '&:hover': {
      '-TwSkewY': '-12deg',
    },
  },
  'hover\\:-skew-y-6:hover': {
    '&:hover': {
      '-TwSkewY': '-6deg',
    },
  },
  'hover\\:-skew-y-3:hover': {
    '&:hover': {
      '-TwSkewY': '-3deg',
    },
  },
  'hover\\:-skew-y-2:hover': {
    '&:hover': {
      '-TwSkewY': '-2deg',
    },
  },
  'hover\\:-skew-y-1:hover': {
    '&:hover': {
      '-TwSkewY': '-1deg',
    },
  },
  'focus\\:skew-x-0:focus': {
    '&:focus': {
      '-TwSkewX': '0deg',
    },
  },
  'focus\\:skew-x-1:focus': {
    '&:focus': {
      '-TwSkewX': '1deg',
    },
  },
  'focus\\:skew-x-2:focus': {
    '&:focus': {
      '-TwSkewX': '2deg',
    },
  },
  'focus\\:skew-x-3:focus': {
    '&:focus': {
      '-TwSkewX': '3deg',
    },
  },
  'focus\\:skew-x-6:focus': {
    '&:focus': {
      '-TwSkewX': '6deg',
    },
  },
  'focus\\:skew-x-12:focus': {
    '&:focus': {
      '-TwSkewX': '12deg',
    },
  },
  'focus\\:-skew-x-12:focus': {
    '&:focus': {
      '-TwSkewX': '-12deg',
    },
  },
  'focus\\:-skew-x-6:focus': {
    '&:focus': {
      '-TwSkewX': '-6deg',
    },
  },
  'focus\\:-skew-x-3:focus': {
    '&:focus': {
      '-TwSkewX': '-3deg',
    },
  },
  'focus\\:-skew-x-2:focus': {
    '&:focus': {
      '-TwSkewX': '-2deg',
    },
  },
  'focus\\:-skew-x-1:focus': {
    '&:focus': {
      '-TwSkewX': '-1deg',
    },
  },
  'focus\\:skew-y-0:focus': {
    '&:focus': {
      '-TwSkewY': '0deg',
    },
  },
  'focus\\:skew-y-1:focus': {
    '&:focus': {
      '-TwSkewY': '1deg',
    },
  },
  'focus\\:skew-y-2:focus': {
    '&:focus': {
      '-TwSkewY': '2deg',
    },
  },
  'focus\\:skew-y-3:focus': {
    '&:focus': {
      '-TwSkewY': '3deg',
    },
  },
  'focus\\:skew-y-6:focus': {
    '&:focus': {
      '-TwSkewY': '6deg',
    },
  },
  'focus\\:skew-y-12:focus': {
    '&:focus': {
      '-TwSkewY': '12deg',
    },
  },
  'focus\\:-skew-y-12:focus': {
    '&:focus': {
      '-TwSkewY': '-12deg',
    },
  },
  'focus\\:-skew-y-6:focus': {
    '&:focus': {
      '-TwSkewY': '-6deg',
    },
  },
  'focus\\:-skew-y-3:focus': {
    '&:focus': {
      '-TwSkewY': '-3deg',
    },
  },
  'focus\\:-skew-y-2:focus': {
    '&:focus': {
      '-TwSkewY': '-2deg',
    },
  },
  'focus\\:-skew-y-1:focus': {
    '&:focus': {
      '-TwSkewY': '-1deg',
    },
  },
  'scale-0': {
    '-TwScaleX': '0',
    '-TwScaleY': '0',
  },
  'scale-50': {
    '-TwScaleX': '5',
    '-TwScaleY': '5',
  },
  'scale-75': {
    '-TwScaleX': '75',
    '-TwScaleY': '75',
  },
  'scale-90': {
    '-TwScaleX': '9',
    '-TwScaleY': '9',
  },
  'scale-95': {
    '-TwScaleX': '95',
    '-TwScaleY': '95',
  },
  'scale-100': {
    '-TwScaleX': '1',
    '-TwScaleY': '1',
  },
  'scale-105': {
    '-TwScaleX': '1.05',
    '-TwScaleY': '1.05',
  },
  'scale-110': {
    '-TwScaleX': '1.1',
    '-TwScaleY': '1.1',
  },
  'scale-125': {
    '-TwScaleX': '1.25',
    '-TwScaleY': '1.25',
  },
  'scale-150': {
    '-TwScaleX': '1.5',
    '-TwScaleY': '1.5',
  },
  'hover\\:scale-0:hover': {
    '&:hover': {
      '-TwScaleX': '0',
      '-TwScaleY': '0',
    },
  },
  'hover\\:scale-50:hover': {
    '&:hover': {
      '-TwScaleX': '5',
      '-TwScaleY': '5',
    },
  },
  'hover\\:scale-75:hover': {
    '&:hover': {
      '-TwScaleX': '75',
      '-TwScaleY': '75',
    },
  },
  'hover\\:scale-90:hover': {
    '&:hover': {
      '-TwScaleX': '9',
      '-TwScaleY': '9',
    },
  },
  'hover\\:scale-95:hover': {
    '&:hover': {
      '-TwScaleX': '95',
      '-TwScaleY': '95',
    },
  },
  'hover\\:scale-100:hover': {
    '&:hover': {
      '-TwScaleX': '1',
      '-TwScaleY': '1',
    },
  },
  'hover\\:scale-105:hover': {
    '&:hover': {
      '-TwScaleX': '1.05',
      '-TwScaleY': '1.05',
    },
  },
  'hover\\:scale-110:hover': {
    '&:hover': {
      '-TwScaleX': '1.1',
      '-TwScaleY': '1.1',
    },
  },
  'hover\\:scale-125:hover': {
    '&:hover': {
      '-TwScaleX': '1.25',
      '-TwScaleY': '1.25',
    },
  },
  'hover\\:scale-150:hover': {
    '&:hover': {
      '-TwScaleX': '1.5',
      '-TwScaleY': '1.5',
    },
  },
  'focus\\:scale-0:focus': {
    '&:focus': {
      '-TwScaleX': '0',
      '-TwScaleY': '0',
    },
  },
  'focus\\:scale-50:focus': {
    '&:focus': {
      '-TwScaleX': '5',
      '-TwScaleY': '5',
    },
  },
  'focus\\:scale-75:focus': {
    '&:focus': {
      '-TwScaleX': '75',
      '-TwScaleY': '75',
    },
  },
  'focus\\:scale-90:focus': {
    '&:focus': {
      '-TwScaleX': '9',
      '-TwScaleY': '9',
    },
  },
  'focus\\:scale-95:focus': {
    '&:focus': {
      '-TwScaleX': '95',
      '-TwScaleY': '95',
    },
  },
  'focus\\:scale-100:focus': {
    '&:focus': {
      '-TwScaleX': '1',
      '-TwScaleY': '1',
    },
  },
  'focus\\:scale-105:focus': {
    '&:focus': {
      '-TwScaleX': '1.05',
      '-TwScaleY': '1.05',
    },
  },
  'focus\\:scale-110:focus': {
    '&:focus': {
      '-TwScaleX': '1.1',
      '-TwScaleY': '1.1',
    },
  },
  'focus\\:scale-125:focus': {
    '&:focus': {
      '-TwScaleX': '1.25',
      '-TwScaleY': '1.25',
    },
  },
  'focus\\:scale-150:focus': {
    '&:focus': {
      '-TwScaleX': '1.5',
      '-TwScaleY': '1.5',
    },
  },
  'scale-x-0': {
    '-TwScaleX': '0',
  },
  'scale-x-50': {
    '-TwScaleX': '5',
  },
  'scale-x-75': {
    '-TwScaleX': '75',
  },
  'scale-x-90': {
    '-TwScaleX': '9',
  },
  'scale-x-95': {
    '-TwScaleX': '95',
  },
  'scale-x-100': {
    '-TwScaleX': '1',
  },
  'scale-x-105': {
    '-TwScaleX': '1.05',
  },
  'scale-x-110': {
    '-TwScaleX': '1.1',
  },
  'scale-x-125': {
    '-TwScaleX': '1.25',
  },
  'scale-x-150': {
    '-TwScaleX': '1.5',
  },
  'scale-y-0': {
    '-TwScaleY': '0',
  },
  'scale-y-50': {
    '-TwScaleY': '5',
  },
  'scale-y-75': {
    '-TwScaleY': '75',
  },
  'scale-y-90': {
    '-TwScaleY': '9',
  },
  'scale-y-95': {
    '-TwScaleY': '95',
  },
  'scale-y-100': {
    '-TwScaleY': '1',
  },
  'scale-y-105': {
    '-TwScaleY': '1.05',
  },
  'scale-y-110': {
    '-TwScaleY': '1.1',
  },
  'scale-y-125': {
    '-TwScaleY': '1.25',
  },
  'scale-y-150': {
    '-TwScaleY': '1.5',
  },
  'hover\\:scale-x-0:hover': {
    '&:hover': {
      '-TwScaleX': '0',
    },
  },
  'hover\\:scale-x-50:hover': {
    '&:hover': {
      '-TwScaleX': '5',
    },
  },
  'hover\\:scale-x-75:hover': {
    '&:hover': {
      '-TwScaleX': '75',
    },
  },
  'hover\\:scale-x-90:hover': {
    '&:hover': {
      '-TwScaleX': '9',
    },
  },
  'hover\\:scale-x-95:hover': {
    '&:hover': {
      '-TwScaleX': '95',
    },
  },
  'hover\\:scale-x-100:hover': {
    '&:hover': {
      '-TwScaleX': '1',
    },
  },
  'hover\\:scale-x-105:hover': {
    '&:hover': {
      '-TwScaleX': '1.05',
    },
  },
  'hover\\:scale-x-110:hover': {
    '&:hover': {
      '-TwScaleX': '1.1',
    },
  },
  'hover\\:scale-x-125:hover': {
    '&:hover': {
      '-TwScaleX': '1.25',
    },
  },
  'hover\\:scale-x-150:hover': {
    '&:hover': {
      '-TwScaleX': '1.5',
    },
  },
  'hover\\:scale-y-0:hover': {
    '&:hover': {
      '-TwScaleY': '0',
    },
  },
  'hover\\:scale-y-50:hover': {
    '&:hover': {
      '-TwScaleY': '5',
    },
  },
  'hover\\:scale-y-75:hover': {
    '&:hover': {
      '-TwScaleY': '75',
    },
  },
  'hover\\:scale-y-90:hover': {
    '&:hover': {
      '-TwScaleY': '9',
    },
  },
  'hover\\:scale-y-95:hover': {
    '&:hover': {
      '-TwScaleY': '95',
    },
  },
  'hover\\:scale-y-100:hover': {
    '&:hover': {
      '-TwScaleY': '1',
    },
  },
  'hover\\:scale-y-105:hover': {
    '&:hover': {
      '-TwScaleY': '1.05',
    },
  },
  'hover\\:scale-y-110:hover': {
    '&:hover': {
      '-TwScaleY': '1.1',
    },
  },
  'hover\\:scale-y-125:hover': {
    '&:hover': {
      '-TwScaleY': '1.25',
    },
  },
  'hover\\:scale-y-150:hover': {
    '&:hover': {
      '-TwScaleY': '1.5',
    },
  },
  'focus\\:scale-x-0:focus': {
    '&:focus': {
      '-TwScaleX': '0',
    },
  },
  'focus\\:scale-x-50:focus': {
    '&:focus': {
      '-TwScaleX': '5',
    },
  },
  'focus\\:scale-x-75:focus': {
    '&:focus': {
      '-TwScaleX': '75',
    },
  },
  'focus\\:scale-x-90:focus': {
    '&:focus': {
      '-TwScaleX': '9',
    },
  },
  'focus\\:scale-x-95:focus': {
    '&:focus': {
      '-TwScaleX': '95',
    },
  },
  'focus\\:scale-x-100:focus': {
    '&:focus': {
      '-TwScaleX': '1',
    },
  },
  'focus\\:scale-x-105:focus': {
    '&:focus': {
      '-TwScaleX': '1.05',
    },
  },
  'focus\\:scale-x-110:focus': {
    '&:focus': {
      '-TwScaleX': '1.1',
    },
  },
  'focus\\:scale-x-125:focus': {
    '&:focus': {
      '-TwScaleX': '1.25',
    },
  },
  'focus\\:scale-x-150:focus': {
    '&:focus': {
      '-TwScaleX': '1.5',
    },
  },
  'focus\\:scale-y-0:focus': {
    '&:focus': {
      '-TwScaleY': '0',
    },
  },
  'focus\\:scale-y-50:focus': {
    '&:focus': {
      '-TwScaleY': '5',
    },
  },
  'focus\\:scale-y-75:focus': {
    '&:focus': {
      '-TwScaleY': '75',
    },
  },
  'focus\\:scale-y-90:focus': {
    '&:focus': {
      '-TwScaleY': '9',
    },
  },
  'focus\\:scale-y-95:focus': {
    '&:focus': {
      '-TwScaleY': '95',
    },
  },
  'focus\\:scale-y-100:focus': {
    '&:focus': {
      '-TwScaleY': '1',
    },
  },
  'focus\\:scale-y-105:focus': {
    '&:focus': {
      '-TwScaleY': '1.05',
    },
  },
  'focus\\:scale-y-110:focus': {
    '&:focus': {
      '-TwScaleY': '1.1',
    },
  },
  'focus\\:scale-y-125:focus': {
    '&:focus': {
      '-TwScaleY': '1.25',
    },
  },
  'focus\\:scale-y-150:focus': {
    '&:focus': {
      '-TwScaleY': '1.5',
    },
  },
  '@keyframes spin': {
    to: {
      transform: 'rotate(360deg)',
    },
  },
  '@keyframes ping': {
    '75%, 100%': {
      transform: 'scale(2)',
      opacity: '0',
    },
  },
  '@keyframes pulse': {
    '50%': {
      opacity: '5',
    },
  },
  '@keyframes bounce': {
    '0%, 100%': {
      transform: 'translateY(-25%)',
      WebkitAnimationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
      animationTimingFunction: 'cubic-bezier(0.8,0,1,1)',
    },
    '50%': {
      transform: 'none',
      WebkitAnimationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
      animationTimingFunction: 'cubic-bezier(0,0,0.2,1)',
    },
  },
  'animate-none': {
    WebkitAnimation: 'none',
    animation: 'none',
  },
  'animate-spin': {
    WebkitAnimation: `$spin 1s linear infinite`,
    animation: `$spin 1s linear infinite`,
  },
  'animate-ping': {
    WebkitAnimation: `$ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
    animation: `$ping 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
  },
  'animate-pulse': {
    WebkitAnimation: `$pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
    animation: `$pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
  },
  'animate-bounce': {
    WebkitAnimation: `$bounce 1s infinite`,
    animation: `$bounce 1s infinite`,
  },
  'cursor-auto': {
    cursor: 'auto',
  },
  'cursor-default': {
    cursor: 'default',
  },
  'cursor-pointer': {
    cursor: 'pointer',
  },
  'cursor-wait': {
    cursor: 'wait',
  },
  'cursor-text': {
    cursor: 'text',
  },
  'cursor-move': {
    cursor: 'move',
  },
  'cursor-help': {
    cursor: 'help',
  },
  'cursor-not-allowed': {
    cursor: 'not-allowed',
  },
}));
