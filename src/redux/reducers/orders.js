import {
     GET_ALL_ORDERS,
    } from "../../constants/actionTypes";


    const initialState = {
        orders: [],
        order_details: []
    };

    const dashboardReducer = (state = initialState, action) => {
        switch (action.type) {
            
            case GET_ALL_ORDERS:
                return { ...state,
                    orders: action.orders };
            
            default:
                return {...state};
        }
    };
    export default dashboardReducer;