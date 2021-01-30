/*
* Mocking client-server processing
*/
import {users} from './data.js'

const TIMEOUT = 100

export default {
    getUsers: (cb, timeout) => setTimeout(() => cb(users), timeout || TIMEOUT),
//    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
    addUser: (user) => {
        // call my api
        return "success"
    },
    deleteUser: (userId) => {
        return "success"
    }
}