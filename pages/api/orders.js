/*
* Mocking client-server processing
*/
import {orders} from './data.js'

const TIMEOUT = 100

export default {
   getAllOrders: (cb, timeout) => setTimeout(() => cb(orders), timeout || TIMEOUT),
}