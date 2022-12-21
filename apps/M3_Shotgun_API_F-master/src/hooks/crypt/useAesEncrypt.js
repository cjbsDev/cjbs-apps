import { useState, useEffect } from 'react';
import {AES} from "crypto-js";

const encrypt = (str) => {
    
    const key = `${process.env.NEXT_PUBLIC_EZMX_ID_AES_KEY}`
    const ct = AES.encrypt(str+"", key);

    return ct.toString();
}

function useAesEncrypt(str) {
    const [encryptStr, setEncryptStr] = useState('')

    useEffect(()=> {
      setEncryptStr(encrypt(str))
    }, [])

  return encryptStr;
}

export default useAesEncrypt