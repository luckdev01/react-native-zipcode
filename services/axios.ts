import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '',
  headers: {
    Authorization: '',
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const errorMessage =
      error.response.status === 406
        ? error?.response?.data?.message || ''
        : error.response.status === 400
        ? 'Invalid Request'
        : error.response.status === 401
        ? 'Access Denied'
        : error.response.status === 500
        ? 'Server Error'
        : 'Unknown Error';

    if (error.response.status === 401) {
    }

    return Promise.reject(new Error(errorMessage));
  },
);

export const axg = async (url: string, params = {}) => {
  const res = await axiosInstance({
    method: 'get',
    url,
    params,
  });

  return res.data;
};

export const axp = async (url: string, data?: any, params?: any) => {
  const res = await axiosInstance({
    method: 'post',
    url,
    data,
    params,
  });

  return res.data;
};

export const axu = async (url: string, data: any) => {
  const res = await axiosInstance({
    method: 'put',
    url,
    data,
  });

  return res.data;
};

export const axpatch = async (url: string, data: any) => {
  const res = await axiosInstance({
    method: 'patch',
    url,
    data,
  });

  return res.data;
};

export const axd = async (url: string) => {
  const res = await axiosInstance({
    method: 'delete',
    url,
  });

  return res.data;
};

export default axiosInstance;
