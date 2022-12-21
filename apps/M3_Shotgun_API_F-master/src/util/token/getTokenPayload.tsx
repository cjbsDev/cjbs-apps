function decodePayload(payload){

    const base64Url = payload.split('.')[1];
    const base64 = base64Url.replace('-', '+').replace('_', '/');
  
    return JSON.parse(window.atob(base64)); 		
};

export default decodePayload