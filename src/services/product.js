import axios from 'axios';

// create new instance
const Http = axios.create();

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkNvZGVyIn0.B1QyKzKxzpxay1__A8B85ij32rqFoOIAFGDqBmqXhvs';
const API_BASE_URL = 'https://sw-coding-challenge.herokuapp.com/api/v1/'

// set default config
Http.defaults.baseURL = API_BASE_URL;
Http.defaults.headers.common.Accept = 'application/json';
Http.defaults.headers.common.Authorization = `Bearer ${token}`;

export const getProducts = () => {
    return new Promise((resolve, reject) => {
      Http({
      method: 'get',
      url: 'products',
    }).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err)
    })
  });
}

export const getNotifications = () => {
  return new Promise((resolve, reject) => {
    Http({
    method: 'get',
    url: 'notifications',
  }).then((res) => {
    resolve(res);
  }).catch((err) => {
    reject(err)
  })
});
}

