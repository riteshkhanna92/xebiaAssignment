export const successHandler = res => {
    return Promise.resolve(res.data);
  };
  
  export const errorHandler = error => {
    return Promise.reject(
      error.response 
    );
  };
  