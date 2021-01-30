/*
* Mocking client-server processing
*/
import {report} from './data.js'

const TIMEOUT = 100

export default {
   getAllReports: (cb, timeout) => setTimeout(() => cb(report), timeout || TIMEOUT),
//    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}