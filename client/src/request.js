import axios from 'axios';

const request = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/api`,
  headers: {
    Authorization: `bearer ${process.env.REACT_APP_API_TOKEN}`,
  },
});

export default request;
