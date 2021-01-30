
import React, {Fragment} from 'react';
// import * as serviceWorker from '../src/serviceWorker';
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import {useDispatch, useSelector,shallowEqual} from "react-redux";
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify';

import {BrowserRouter as Router , Route, Switch, useHistory } from 'react-router-dom';
import Admin from '../src/admin'
import Warehouse from '../src/warehouse'
import Client from  '../src/client'
import Auth from '../src/auth'

import "react-datepicker/dist/react-datepicker.css";

 const Index = () => {

  
  function MainRoute(){

      const history = useHistory()
    
      const isLoggedIn = useSelector((state) =>  state.auth.isLoggedIn,shallowEqual )
      const acctType = useSelector((state) =>  state.auth.userType,shallowEqual )
      const router = useRouter()

      const [shouldRedirect, setRedirect] = React.useState(false)

      React.useEffect(()=> {
        if(isLoggedIn) setRedirect(true)
      },[])

      React.useEffect(() =>{
      //  router.prefetch('/')
      //  router.prefetch('/auth')
      
      if (isLoggedIn){
                if (acctType == "client" && router.pathname !== '/') {
                  return history.push({pathname: '/'})
                }else if (acctType == "admin" && router.pathname !== '/admin') {
                  return history.push({pathname: '/admin'})
                }else if (acctType == "warehouse" && router.pathname !== '/warehouse') {
                  return history.push({pathname: '/warehouse'})
                }else return history.push({pathname: '/'})

          }else history.push({pathname: '/auth'})
        
        
      },[shouldRedirect])



    return (
        <>
      {/* {!isLoggedIn ?  */}
      <Route path={"/auth"} exact component={Auth} /> 
      <Switch>
          <Route path={"/admin"} exact component={Admin} />
          <Route path={"/warehouse"} exact component={Warehouse}/>
          <Route path={"/"} exact component={Client}/>
          
      </Switch>
      </>
    )
  } 


  return (<Provider store={store}>
            <React.StrictMode>
              
              <Router>
                <ToastContainer />

                <MainRoute />
            </Router>
            </React.StrictMode>
  </Provider>
 )}
 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
export default Index
