
import users from '../../../pages/api/users'
import * as types from '../../constants/actionTypes'
import { useToasts } from 'react-toast-notifications'

const {addToast} = useToasts()

// Dashboard
export const fetchUserReport = userId => ({
    type: types.FETCH_REPORT_BY_USER,
    userId
})



// USERS
export const fetchUsersBegin = () => ({
    type: types.FETCH_USERS_BEGIN
});

export const receiveUsers = users => ({
    type: types.RECEIVE_USERS,
    users
})

export const getAllUsers = () => dispatch => {
    dispatch(fetchUsersBegin());
    users.getUsers(users => {
        dispatch(receiveUsers(users));
        return users;
    })
}
export const fetchSingleUser = userId => ({
    type: types.FETCH_SINGLE_USER,
    userId
})

export const addUser = (user) => (dispatch) => {
    if (users.addUser(user) == "success"){
        dispatch({
            type: types.ADD_USER,
            user
        })
    dispatch(getAllUsers())
    addToast("User Added Successfully", { appearance: 'success' })
    }else addToast("Unable to add user", { appearance: 'error' })
        
}

export const deleteUser = user_id => (dispatch) => {
    if (users.deleteUser(user) == "success"){
    dispatch({
        type: types.REMOVE_USER,
        user_id
    })
    addToast("User Deleted !",{appearance: 'success'})
    }else addToast("Unable to delete user", { appearance: 'error' })
};