import {atom} from 'recoil';

export const rowInfoAtom = atom({
  key: 'rowInfoAtom',
  default: {
    id: 0,
    originalStrainName: '',
    originalGenusName: '',
    originalTaxonName: '',
    strainBank: '',
    strainName: '',
    synonyms: '',
  },
});
