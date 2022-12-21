import {atom} from 'recoil';

export const uploadModalAtom = atom({
  key: 'uploadModalAtom',
  default: false,
});

export const pairedUploadModalAtom = atom({
  key: 'pairedUploadModalAtom',
  default: false,
});

export const engnModalAtom = atom({
  key: 'engnModalAtom',
  default: false,
});

export const analysisStatusModalAtom = atom({
  key: 'analysisStatusModalAtom',
  default: false,
});

export const refreshStateAtom = atom({
  key: 'refreshStateAtom',
  default: false,
});

export const snackAlertAtom = atom({
  key: 'snackAlertAtom',
  default: false,
});
