import React, {Component,Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from '../layout'
import Dashboard from './views/dashboard'
import Orders from './views/orders'

const Client = () => {


    return (
        <Fragment>
            <Layout screens={

                <Router>
                    <Switch>
                    <Route path={"/"}  exact component={Dashboard}/>
                    <Route path={"/orders"} component={Orders}/>
                    </Switch>
                    
                </Router>
            } >
                
            </Layout>
        </Fragment>
    );
}

export default Client;