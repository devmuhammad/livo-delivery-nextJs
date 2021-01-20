import React, {Component,Fragment, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from '../layout'
import Dashboard from './views/dashboard'

const Client = () => {


    return (
        <Fragment>
            <Layout screens={

                <Router>
                    
                    <Route path={"/"}  exact component={Dashboard}/>
                        {/* <Route path={"/admin/questionnaire"} component={Questionnaire}/> */}
                        
                    
                </Router>
            } >
                
            </Layout>
        </Fragment>
    );
}

export default Client;