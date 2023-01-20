import React from 'react';
//import {Background, LoadingText} from '../../../resources/js/Styles';
import Spinner from '../../../resources/img/loading/spinner.svg';
import Image from "next/image"
import styled from "styled-components";

const Background = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.div`
  font: 1rem 'Noto Sans KR';
  text-align: center;
`;

export const Loading = () => {
    return (
        <Background>
            <LoadingText>잠시만 기다려 주세요.</LoadingText>
            <Image src={Spinner} alt="로딩중" width="100%" height="100%" />
        </Background>
    );
};

export default Loading;
