import axios from 'axios';
import { useCallback ,useState } from 'react';

const useAjax = () => {

  const todoAPI = 'https://husam278-api-server.herokuapp.com/api/todo';
  const handler = (url, method, body) => {
    return axios({
      method: method,
      url: url,
      data: body
    }).then(data => data.data)
  }

  return [handler,todoAPI]
 
};

export default useAjax;