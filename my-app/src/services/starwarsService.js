import axios from 'axios';
import endPoint from './endpoint';
import { successHandler, errorHandler } from './utils';
export const fetchUserService = () => {
    return axios
      .get(endPoint.baseUrl+endPoint.getUsers)
      .then(response => {
        return successHandler(response).then((response) => {
          return response;
        })
      })
      .catch(error => errorHandler(error));
  };