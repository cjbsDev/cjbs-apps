import { Box } from "@mui/system"
import { styled } from "@mui/material"
import { purple } from "@mui/material/colors"
import Item from "@src/components/Item"
import React from "react"
import TextWithIcon from "@src/components/molecules/text/TextWithIcon"

interface DataProps {
    icon : string,
    iconSize : number,
    iconColor : string,
    text : string,
    count : number,
}

interface TopDashboardProps {
    data : Array<DataProps>,
}

const LeftFlexBox = styled(Box)`
    display: flex;
    height: 100%;
    align-items: center;
    width: 200px;
`

const RightFlexBox = styled(LeftFlexBox)`
    justify-content: flex-end;
    width: 100%;
`
const SpaceBox = styled(Box)`
    display: flex;
    justify-content: flex-end;
    margin: 0px 30px;
`

const Text = styled(TextWithIcon.Text)`
    color: white;
`

const textColorStyle = {
    color: 'white'
}

const textStyle = {
    ...textColorStyle,
    marginLeft : '5px',
    marginRight : '8px',
    fontSize: '14px',
    lineHeight: '22px',
    letterSpacing: '-0.5px',
}


const TopDashboard = function({data}: TopDashboardProps) {
    console.log("############## data", data);
    
    return (
        <TextWithIcon >
            <LeftFlexBox>
                <Box sx={{marginRight:'8px'}}>
                    <TextWithIcon.Icon icon={'bar-chart-fill'} size={24} color={'white'} />
                </Box>
                <Box>
                    <TextWithIcon.Text variant="subtitle1">Sample Now</TextWithIcon.Text>
                </Box>
            </LeftFlexBox>
            <RightFlexBox>
                <Box sx={{display:'flex', justifyContent:'flex-end'}}>
                {
                    data.map((item, i) => (
                        <React.Fragment key={i}>
                            <Box>
                                <SpaceBox>
                                    <TextWithIcon.Icon icon={item.icon} size={24} color={'white'} />
                                    <TextWithIcon.Text sx={textStyle} variant="body1">{item.text}</TextWithIcon.Text>
                                    <TextWithIcon.Text variant="subtitle1">{item.count}</TextWithIcon.Text>
                                </SpaceBox>
                            </Box>
                            {
                                i+1 !== data.length && 
                                <Box>
                                    <TextWithIcon.Text variant="body1">|</TextWithIcon.Text>
                                </Box>
                            }
                        </React.Fragment>
                    ))
                }
                </Box>
            </RightFlexBox>
        </TextWithIcon>
    )
}

export default TopDashboard