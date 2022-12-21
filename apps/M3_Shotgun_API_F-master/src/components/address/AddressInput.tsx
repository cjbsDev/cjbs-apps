import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// web.cjs is required for IE11 support
import {useSpring, animated} from 'react-spring';
import {styled} from '@mui/system';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import RadioBoxList from '@src/components/radiobox/RadioBoxList';
import MyIcon from '@public/fonts/icon';
import SelectAutoWidth from '@src/components/select/SelectAutoWidth';
import axios from 'axios';
import {getToken} from '@hooks/token/useToken';
import {Alert, AlertTitle, TextField} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import {SelectChangeEvent} from '@mui/material/Select';
import {AdapterDayjs} from '@mui/x-date-pickers/AdapterDayjs';
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import {useDaumPostcodePopup} from 'react-daum-postcode';
import {useTranslation} from 'next-i18next';
import {phone, removeHypen} from '@src/util/Format';
import {isEmail} from '@src/util/Valid';
import Router from 'next/router';

const InputText = styled(TextField)`
  height: 42px;
  width: 100%;
  margin-right: 12px;
`;

const AddressInput = ({index, selectAddressIndex, joinInstitute, joinInstituteHandleChange}) => {
  //Postcode
  const openPostcode = useDaumPostcodePopup();

  const onClickAddress = (type, index) => {
    console.log('type', type);
    console.log('index', index);

    const postcodeHandleComplete = (data) => {
      let fullAddress = data.address;
      let extraAddress = '';

      if (data.addressType === 'R') {
        if (data.bname !== '') {
          extraAddress += data.bname;
        }
        if (data.buildingName !== '') {
          extraAddress += extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
        }
        fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
      }
      //  //0 이면 책임기관 주소
      //   selectAddressIndex.type === 0 && setAddress(fullAddress)
      //1 이면 참여기관 주소
      selectAddressIndex.type === 1 && joinInstituteHandleChange(selectAddressIndex.index, 'address', fullAddress);
    };

    //    setSelectAddressIndex({type, index})
    openPostcode({onComplete: postcodeHandleComplete});
  };

  return (
    <InputText
      label='기관주소'
      onClick={() => onClickAddress(1, index)}
      inputProps={{readOnly: true}}
      value={joinInstitute[index].address}
      onChange={(e) => joinInstituteHandleChange(index, 'address', e.target.value)}
    />
  );
};

export default AddressInput;
