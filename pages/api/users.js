/*
* Mocking client-server processing
*/
import { apiResolver } from 'next/dist/next-server/server/api-utils'
import data from './data.json'

const TIMEOUT = 100

export default {
    getUsers: (cb, timeout) => setTimeout(() => cb(data.users), timeout || TIMEOUT),
//    buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
    addUser: (user) => {
        // call my api
        return "success"
    },
    deleteUser: (userId) => {
        return "success"
    }
}