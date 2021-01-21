
import React, {Fragment} from 'react';
// import * as serviceWorker from '../src/serviceWorker';
import { Provider } from 'react-redux';
import store from '../src/redux/store';

import { ToastProvider } from 'react-toast-notifications'
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Admin from '../src/admin'
import Warehouse from '../src/warehouse'
import Client from  '../src/client'

 const Index = () => {


  return (<Provider store={store}>
            <React.StrictMode>
              <Router>
                <Switch>
                  <ToastProvider autoDismiss={true} >
                    <Route path={"/admin"} exact component={Admin} />
                    <Route path={"/warehouse"} exact component={Warehouse}/>
                    <Route path={"/"} component={Client}/>
                  </ToastProvider>
                </Switch>
            </Router>
            </React.StrictMode>
  </Provider>
 )}
 
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
export default Index
