import getTokenPayload from './getTokenPayload'
import dayjs from 'dayjs'
const verifyToken = (token) => {

    if(!token) return false

    const payload = getTokenPayload(token)
    console.log('exp -> ', payload.iat);
    const now = dayjs( payload.iat)
  
    return true

}

export default verifyToken