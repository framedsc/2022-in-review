const IMAGESAPI = 'https://raw.githubusercontent.com/originalnicodrgitbot/hall-of-framed-db/main/shotsdb.json';
const AUTHORSAPI = 'https://raw.githubusercontent.com/originalnicodrgitbot/hall-of-framed-db/main/authorsdb.json';
const axios = require('axios');
const timestamp = (new Date()).getTime();

export const getHofImages = () => axios.get(`${IMAGESAPI}?timestamp=${timestamp}`);
export const getHofAuthors = () => axios.get(`${AUTHORSAPI}?timestamp=${timestamp}`);
export const getSysImages = () => axios.get(`sysdb.json?timestamp=${timestamp}`);

//https://raw.githubusercontent.com/originalnicodrgitbot/hall-of-framed-db/main/authorsdb.json
