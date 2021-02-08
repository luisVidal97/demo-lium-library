import React from 'react';
import {
    Switch,
    Route,
    Redirect,
    useHistory ,
  } from "react-router-dom";
import { LandingPage } from '../components/demo/LandingPage';
import { LoginPage } from '../components/demo/LoginPage';
import { RegisterPage } from '../components/demo/RegisterPage';

import { Button } from 'lium-react-ui-library';
import { CustomRouter } from './CustomRouter';
import { useSelector } from 'react-redux';

export const DemoRouter = () => {


    const history = useHistory();
    const demo = useSelector(state => state.demo);


    const handleClick = () => {
        history.push("/api/getting-started");
    }


    return (
        <div>
            <div style={{ margin: '30px'}}>
                <Button text="Go to the Documentation" border="strong" onClick={ handleClick } />
            </div>
            <Switch >

                <CustomRouter path='/demo/landing-page' component={LandingPage} isAuthenticated={demo.logged}/>               
                <Route path='/demo/login' component={LoginPage} />
                <Route path='/demo/register' component={RegisterPage} />
                <Redirect to='/demo/login'/>
            </Switch>
           
        </div>
    );
}



