import {
    FETCH_REPORT_BY_USER,
    } from "../../constants/actionTypes";


    const initialState = {
        reports: [],
        
    };

    const dashboardReducer = (state = initialState, action) => {
        switch (action.type) {
            case FETCH_REPORT_BY_USER:
                if (state.products.findIndex(product => product.id === action.productId) !== -1) {
                    const singleItem = state.products.reduce((itemAcc, product) => {
                        return product
                    }, [])
                    return { ...state,
                        product_details: singleItem };
                }
    
            // case CHANGE_CURRENCY:
            //     return { ...state,
            //         symbol: action.symbol };
            default:
                return state;
        }
    };
    export default dashboardReducer;