import {atom} from 'recoil';

export const cookieAtom = atom<boolean>({
  key: 'cookieAtom',
  default: false,
});
