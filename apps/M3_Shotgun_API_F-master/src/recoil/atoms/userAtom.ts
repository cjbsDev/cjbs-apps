import {atom} from 'recoil';

export const userInfoAtom = atom({
  key: 'userInfoAtom',
  default: {
    userEmail: '',
    userName: '',
    userLevel: '',
  },
});
