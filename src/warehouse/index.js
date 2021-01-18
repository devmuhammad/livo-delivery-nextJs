
import React, {Component,Fragment, useEffect} from 'react';
import { Switch, Route } from "react-router-dom";
import Layout from '../layout'

const Warehouse = () => {


    return (
        <Fragment>
            <Layout>
                <Switch>
                    <Route path={"/warehouse"}  exact component={Dashboard}/>
                    {/* <Route path={"/admin/questionnaire"} component={Questionnaire}/> */}
                    
                </Switch>
            </Layout>
        </Fragment>
    );
}

export default Warehouse