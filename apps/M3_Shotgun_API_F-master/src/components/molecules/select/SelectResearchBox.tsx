import React, {useState, useMemo, useEffect, ChangeEvent, ReactElement} from 'react';
import SubjectSelectBox, {SubjectSelectBoxProps} from '@src/components/atoms/selectbox/SubjectSelectBox';
import {Grid, Box, Button, Typography, TextField, Container, InputAdornment} from '@mui/material';
import { Btn } from '@src/components/button/Btn';
import { styled } from '@mui/styles';


const ButtonBox = styled(Box)({
    marginTop:'25px'
});



const SelectResearchBox = function({data, value, onChange, openViewModal} : SubjectSelectBoxProps, ){
    return (
    <Box>
        <Box height={'77px'}>
            <SubjectSelectBox  data={data} value={value} onChange={onChange} />
        </Box>
        <ButtonBox width={'100%'}>
            <Btn
                label={'연구정보'}
                size={'small'}
                variant={'outlined'}
                // sx={{color: 'gray', borderColor: 'gray'}}
                color={'secondary'}
                sx={{width:'100%', color:'black'}}
                onClick={()=>openViewModal(value)}
            />
        </ButtonBox>
    </Box>    
    )


}

export default SelectResearchBox