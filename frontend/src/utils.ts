import axios from 'axios';

const baseURL = import.meta.env.VITE_API_URL;
export const http = axios.create({ baseURL });
export const sleep = (msec: number = 1000) =>
  new Promise((resolve) => setTimeout(resolve, msec));
export const throttle = function (callback: () => void, interval: number) {
  let lastTime = Date.now() - interval;
  return function () {
    if (lastTime + interval <= Date.now()) {
      lastTime = Date.now();
      callback();
    }
  };
};
