import { Box, styled, SxProps, Typography } from "@mui/material"
import { Variant } from "@mui/material/styles/createTypography"
import MyIcon from "@public/fonts/icon"

interface TextVariantProps {
    variant : Variant
    children : string | number
    sx?: SxProps
}

interface IconProps {
    icon : string,
    size : number,
    color : string
}

interface TextWithIcon {
    children : React.ReactChild[]
}

const Wrapper = styled(Box)`
    display: flex;
    width: 100%;
    height: 86px;
    padding: 0px 35px;
    background-image: url('/img/gradation/purpleblue.png');
    background-size: 100% 86px;
    background-repeat : no-repeat;
    border-radius: 4px;
`


const TextWithIcon = ({children} : TextWithIcon) => {
    return (
        <Wrapper>{children}</Wrapper>
    )
}

function Text ({variant, sx, children}: TextVariantProps) {
    return (
        <Typography variant={variant} color={'white'} sx={sx} >{children}</Typography>
    )
}

function Icon ({icon, size, color}: IconProps) {
    return (
        <MyIcon icon={icon} size={size} color={color}/>
    )
}

TextWithIcon.Text = Text
TextWithIcon.Icon = Icon

export default TextWithIcon
