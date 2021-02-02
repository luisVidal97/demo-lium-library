import React from 'react';
import {
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { ButtonPage } from '../components/ButtonPage';
import { InputNumberPage } from '../components/InputNumberPage';
import { InputTextPage } from '../components/InputTextPage';
import { SelectInputPage } from '../components/SelectInputPage';
import { AutocompletePage } from '../components/AutocompletePage';
import { GettingStartPage } from '../components/GettingStartPage';
import { SideBar } from '../components/SideBar';
import { Navbar } from '../components/Navbar';

export const NavigationRouter = () => {
    return (
        <div className="routers__main-content">
            <SideBar />
            <div className="routers__secondary-content">
                <Navbar />
                <Switch>
                    <Route exact path='/api/button' component={ButtonPage}/>
                    <Route exact path='/api/input-number' component={InputNumberPage}/>
                    <Route exact path='/api/input-text' component={InputTextPage}/>
                    <Route exact path='/api/select' component={SelectInputPage}/>
                    <Route exact path='/api/autocomplete' component={AutocompletePage}/>
                    <Route exact path='/api/getting-start' component={GettingStartPage}/>
                    <Redirect to='/api/getting-start'/>
                </Switch>
            </div>
        </div>
    )
}
