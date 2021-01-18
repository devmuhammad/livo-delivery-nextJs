
import React, {Fragment} from 'react';
// import '../styles/base.css';
import App from './_app';
// import * as serviceWorker from '../src/serviceWorker';
import ReactDOM from 'react-dom'
import { useRouter } from 'next/router'

import {BrowserRouter as Router , Route, Switch } from 'react-router-dom';
import Admin from '../src/admin'
import Warehouse from '../src/warehouse'
import Client from  '../src/client'

 const Index = () => {

  const router = useRouter()

  return (<React.StrictMode>
    <Router>
    
    <Switch>
        <Route path={"/admin"} exact component={Admin} />
        <Route path={"/warehouse"} exact component={Warehouse}/>
        <Route path={"/"} component={Client}/>
    </Switch>
    
  </Router>
  </React.StrictMode>
  
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
