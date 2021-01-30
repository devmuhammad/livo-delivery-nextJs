
import users from '../../../pages/api/users'
import auth from '../../../pages/api/auth'
import orders from '../../../pages/api/orders'
import dashboard from '../../../pages/api/dashboard'
import * as types from '../../constants/actionTypes'
import {useRouter} from 'next/router'
import { toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// AUTHENTICATION

export const login = (loginDet) => dispatch => {

   auth.tryLogin(loginDet).then( activeUser => {

   if(activeUser){
       dispatch(loginStatus(true))
       dispatch(currentUser(activeUser))
       dispatch(userType(activeUser.accountType))

        // router.replace('/')
        window.location.href = '/'
        toast.success('Success ! Welcome back')
        return activeUser
   }else return toast.error("Invalid Email/Password")

})

}

export const loginStatus = (isLoggedIn) => dispatch => {
    dispatch({
        type:types.IS_LOGGEDIN,
        isLoggedIn
    })

}

export const currentUser = (user) => dispatch => {
    let {password, ...currUser} = user
    dispatch({
        type: types.CURRENT_USER,
        currUser
    })
}

export const userType = (userType) => dispatch => {
    dispatch ({
        type: types.CURRENT_USER_TYPE,
        userType
    })
}

export const logout = () => dispatch => {
    dispatch ({
        type: types.LOGOUT
    })
}


// DASHBOARD
export const fetchUserReport = (userId) => dispatch => {
    
    dispatch({type: types.FETCH_REPORT_BY_USER,
    userId
    })
   
}

export const receiveReports = reports => ({
    type: types.GET_ALL_REPORTS,
    reports
})

export const getAllReports = () => dispatch => {
    dashboard.getAllReports(reports => {
        
        dispatch(receiveReports(reports))
        return reports
    })
    
}



// USERS
export const fetchUsersBegin = () => ({
    type: types.FETCH_USERS_BEGIN
});

export const receiveUsers = users => ({
    type: types.RECEIVE_USERS,
    users
})

export const getAllUsers = () => dispatch => {
    // return (dispatch) => {
    dispatch(fetchUsersBegin());
    users.getUsers(users => {
        dispatch(receiveUsers(users));
        return users;
    })
// }
}
export const fetchSingleUser =  userId => dispatch => {

    dispatch({
        type: types.FETCH_SINGLE_USER,
        userId
})
}

export const addUser = (user) => (dispatch) => {

    if (users.addUser(user) == "success"){
        dispatch({
            type: types.ADD_USER,
            user
        })
    // dispatch(getAllUsers())
        Toast({appearance:"success", message:"User Added Successfully"})
    
    }else Toast({appearance:"error", message:"Unable to add user"})
        
}

export const deleteUser = user_id => (dispatch) => {
    const {addToast} = useToasts()

    if (users.deleteUser(user) == "success"){
    dispatch({
        type: types.REMOVE_USER,
        userId
    })
    
        Toast({appearance:"success", message:"User Deleted !"})
    }else Toast({appearance:"error", message:"Unable to delete user"})
    
};


// ORDERS
export const receiveOrders = orders => ({
    type: types.GET_ALL_ORDERS,
    orders
})

export const getAllOrders = () => dispatch => {
    orders.getAllOrders(orders => {
        
        dispatch(receiveOrders(orders))
        return orders
    })
    
}