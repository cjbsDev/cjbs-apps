import React from 'react';
import { useSpring, animated } from 'react-spring';
import Modal from '@mui/material/Modal';
import MyIcon from '@public/fonts/icon';
import Backdrop from '@mui/material/Backdrop';
import {styled} from '@mui/material/styles';
import {Grid, Box, Button, Typography} from '@mui/material';
import GreyChip from '@src/components/molecules/chip/GreyChip';

interface FadeProps {
    children?: React.ReactElement;
    in: boolean;
    onEnter?: () => {};
    onExited?: () => {};
}

const Wrapper = styled(Box)`
  width: 402px;
  height: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
`
const ContentWrapper = styled(Box)`
  padding: 0px 16px 30px 16px;
`

const CrossBtnBox = styled(Box)`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  padding-top: 14px;
`
const ModalGridContainer = styled(Grid)`
  width: 100%;
  height: 172px;
  padding: 0px 14px;
`
const ModalGrid = styled(Grid)`
  width: 100%;
  height: 37.5px;
  border-bottom: 1px solid rgba(134, 142, 149, 0.5);
`
const BtnStyle = styled(Button)`
  width: 100%;
  height: 40px;
  border-radius: 2px;
  background-color: #006ecd;
  color: white;
`
  
const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
        if (open && onEnter) {
            onEnter();
        }
        },
        onRest: () => {
        if (!open && onExited) {
            onExited();
        }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
/job/bdp_dev-react/        {children}
        </animated.div>
    );
});

const ExpermentInfoModal = ({expermentInfo, openModal, closeExpermentInfo}) => {

    return (
        <Modal
            aria-labelledby="spring-modal-title"
            aria-describedby="spring-modal-description"
            open={openModal}
            onClose={closeExpermentInfo}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
        >
            <Fade in={openModal}>
                <Wrapper>
                    <ContentWrapper>
                        <CrossBtnBox >
                        <MyIcon onClick={closeExpermentInfo} icon={'x'} size={24} color={'#000000'}/>
                        </CrossBtnBox>
                        <ModalGridContainer container>
                            <ModalGrid item xs={6}>
                                <Typography variant='body1'> Name</Typography>
                            </ModalGrid>
                            <ModalGrid item xs={6}>
                                <Typography variant='body1'> {expermentInfo && expermentInfo.name}</Typography>
                            </ModalGrid>
                            <ModalGrid item xs={6}>
                                <Typography variant='body1'> Order Number</Typography>
                            </ModalGrid>
                            <ModalGrid item xs={6}>
                                <Typography variant='body1'> {expermentInfo && expermentInfo.number}</Typography>
                            </ModalGrid>
                            <ModalGrid item xs={6}>
                                <Typography variant='body1'> 실험종류</Typography>
                            </ModalGrid>
                            <ModalGrid item xs={6}>
                                <Typography variant='body1'> {expermentInfo && expermentInfo.type}</Typography>
                            </ModalGrid>
                            <ModalGrid item xs={6}>
                                <Typography variant='body1'> Status</Typography>
                            </ModalGrid>
                            <ModalGrid item xs={6}>
                                <GreyChip label={expermentInfo && expermentInfo.status}/>
                            </ModalGrid>
                        </ModalGridContainer>
                        <Box sx={{ display:'flex', justifyContent:'center', mt:'10px', fontWeight:600}}>
                            다운로드 개발 예정
                        </Box>
                    </ContentWrapper>
                    <Box>
                        <BtnStyle onClick={closeExpermentInfo} >확 인</BtnStyle>
                    </Box>
                </Wrapper>
            </Fade>
        </Modal>
    )
}

export default ExpermentInfoModal