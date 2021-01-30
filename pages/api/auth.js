/*
* Mocking client-server processing
*/
import {users} from './data.js'

const TIMEOUT = 100

export default {
   tryLogin: async( details) => {
       const activeUser = await users.find(user => details.email === user.email && details.password === user.password)

       if (activeUser){
           return activeUser
       }
   },
}