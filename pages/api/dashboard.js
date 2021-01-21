/*
* Mocking client-server processing
*/
import data from './data.json'

const TIMEOUT = 100

export default {
   getAllreports: (cb, timeout) => setTimeout(() => cb(data.report), timeout || TIMEOUT),
//    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}