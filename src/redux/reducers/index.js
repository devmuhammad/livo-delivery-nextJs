import { combineReducers } from 'redux';

// Import custom components
import dashboardReducer from './dashboard';



const rootReducer = combineReducers({
    dashboard: dashboardReducer,
    
});

export default rootReducer;