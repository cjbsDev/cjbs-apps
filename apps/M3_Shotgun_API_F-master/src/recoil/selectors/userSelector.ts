import {selector} from 'recoil';
import axios from 'axios';
import {userInfoAtom} from '@src/recoil/atoms/userAtom';

interface Interface {
  id: number;
}

export const currentUserNameQuery = selector({
  key: 'currentUserNameQuery',
  get: async ({get}) => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    // console.log('???????', response.data);
    return response.data;
  },
});
