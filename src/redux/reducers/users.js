import {
    FETCH_SINGLE_USER,
    RECEIVE_USERS,
    ADD_USER,
    REMOVE_USER
    } from "../../constants/actionTypes";

    const initialState = {
        users: [],
        userDetails: [],
        
    };

    const userReducer = (state = initialState, action) => {
        switch (action.type) {
            case RECEIVE_USERS:
                return { ...state,
                    users: action.users };
            case FETCH_SINGLE_USER:
                if (state.users.findIndex(user => user.id === action.userId) !== -1) {
                    const singleItem = state.users.reduce((userAcc, user) => {
                        return user
                    }, [])
                    return { ...state,
                        userDetails: singleItem };
                }
            case ADD_USER:
                
                return { ...state, users: [...state.users, action.user] }
            case REMOVE_USER:
                return {
                    users: state.users.filter(usr => usr.id !== action.userId)
                    }
        
            default:
                return {...state};
        }
    };
    export default userReducer;