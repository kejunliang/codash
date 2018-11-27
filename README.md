# Codash

> 一个*Cordova-promisify*库，可配置、易用、可拦截。并包含常用方法，如监听deviceready，物理返回按钮绑定等。

## Docs [TBD]

* cordova-promisify
* deviceReady
* bindBackEvent
* FileDownload
* FileUpload
* toBase64

## Install

```bash
npm install @workplus/codash --save 
```

## Usage

```js
import { Cordova, deviceReady } from '@workplus/codash';

// 实例化
const wp = new Cordova();

// 设置拦截器
wp.interceptors.before.use((config) => {
  return config;
}, err => console.log(err));
wp.interceptors.after.use((response) => {
  return response;
}, err => console.log(err));

// 创建promisify的cordova方法
const authHook = wp.addHook('WorkPlus_Auth');
const getUserTicket = authHook.create('getUserTicket');

const getAccessToken = wp.create('WorkPlus_Auth', 'getAccessToken');

// 调用
deviceReady()
  .then(() => Promise.all([getUserTicket(), getAccessToken()]))
  .then((res) => {})
  .catch((err) => {});

```

## Author

Hejx
