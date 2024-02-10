import axios from 'axios';
import { DateTime } from 'luxon';

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

// prismaで日時設定うまくできないので表示側で吸収する
export const toJst = (date: string): DateTime =>
  DateTime.fromJSDate(new Date(date)).setZone('Asia/Tokyo');

export const toDate = (date: string): string => {
  return toJst(date).toFormat('yyyy/MM/dd');
};
export const toTime = (date: string): string => {
  return toJst(date).toFormat('TT');
};
export const toDateTime = (date: string): string => {
  return toJst(date).toFormat('yyyy/MM/dd TT');
};
