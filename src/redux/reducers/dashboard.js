import {
    FETCH_REPORT_BY_USER, GET_ALL_REPORTS,
    } from "../../constants/actionTypes";


    const initialState = {
        reports: [],
        report_details: []
    };

    const dashboardReducer = (state = initialState, action) => {
        switch (action.type) {
            case FETCH_REPORT_BY_USER:
                
                // if (state.reports.findIndex(report => report.userId === action.userId) !== -1) {
                // const singleItem = state.reports.reduce((dashAcc, report) => {
                //     return report
                // }, [])
                    return { ...state,
                        report_details: state.reports[0] };
                    // }
            case GET_ALL_REPORTS:
                return { ...state,
                    reports: action.reports };
            
            default:
                return {...state};
        }
    };
    export default dashboardReducer;