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

  export const fetchPlanetsService = () => {
    return axios
      .get(endPoint.baseUrl+endPoint.getUsersPlanets)
      .then(response => {
        return successHandler(response).then((response) => {
          return response;
        })
      })
      .catch(error => errorHandler(error));
  };

  export const fetchPlanetDataService = (url) => {
    return axios
      .get(url)
      .then(response => {
        return successHandler(response).then((response) => {
          return response;
        })
      })
      .catch(error => errorHandler(error));
  };