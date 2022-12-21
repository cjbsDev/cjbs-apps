import React, {useEffect} from 'react';
import {useRecoilState} from 'recoil';
import {userInfoAtom} from '@src/recoil/atoms/userAtom';
import useSWR from 'swr';
import {fetcher} from '@components/fnc/fetcher';
import {AccBox} from '@styles/styledComp';
import CustomLoader from '@components/comp/CustomLoader';

const useUserInfo = () => {
  const [userInfo, setUserInfo] = useRecoilState(userInfoAtom);
  const {data, error, mutate} = useSWR('/user/info', fetcher, {
    // suspense: true,
  });

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
};

export default useUserInfo;
