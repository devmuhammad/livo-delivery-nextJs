import {
    IS_LOGGEDIN, CURRENT_USER,CURRENT_USER_TYPE,LOGOUT
    } from "../../constants/actionTypes";


    const initialState = {
        currentUser: [],
        isLoggedIn: false,
        userType: ''
    };

    const authReducer = (state = initialState, action) => {
        switch (action.type) {
            case IS_LOGGEDIN:
                
                    return { ...state,
                        isLoggedIn: action.isLoggedIn };
            case CURRENT_USER:
                return { ...state,
                    currentUser: action.currUser };
            
            case CURRENT_USER_TYPE:
                return { ...state,
                    userType: action.userType };

            case LOGOUT:
                return {...state,
                    currUser: initialState.currUser,
                    userType: initialState.userType,
                    isLoggedIn: initialState.isLoggedIn,

                }
            default:
                return {...state};
        }
    };
    export default authReducer;