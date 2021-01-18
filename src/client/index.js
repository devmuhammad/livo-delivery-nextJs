import React, {Component,Fragment, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import Layout from '../layout'


const Client = () => {


    return (
        <Fragment>
            <Layout>
                {/* <span>Hello there !</span> */}
                {/* <Switch>
                    <Route path={"/"}  exact component={Dashboard}/>
                    <Route path={"/admin/questionnaire"} component={Questionnaire}/>
                    
                </Switch> */}
            </Layout>
        </Fragment>
    );
}

export default Client;