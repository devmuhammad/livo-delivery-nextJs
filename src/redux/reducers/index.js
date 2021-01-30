import { combineReducers } from 'redux';

// Import custom components
import dashboardReducer from './dashboard';
import userReducer from './users'
import authReducer from './auth'
import orderReducer from './orders'


const rootReducer = combineReducers({
    auth: authReducer,
    dashboard: dashboardReducer,
    user: userReducer,
    order: orderReducer,
    // notifications: notificationsReducer(),
});

export default rootReducer;