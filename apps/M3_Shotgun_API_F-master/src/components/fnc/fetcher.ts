import axios from 'axios';
import {GET} from '@src/hooks/api/useAPI';

export const fetcher = (url, token) => GET(url).then(res => {console.log("url1 =>", url);
 return res.data.data});

export const fetcherHUB = (url, token) => GET(url).then(res => {console.log("url2 =>", url) 
return res.data.data.hubInputs});
