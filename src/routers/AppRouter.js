import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { HomePage } from '../components/HomePage';
import { NavigationRouter } from './NavigationRouter';

export const AppRouter = () => {
    return (
        <Router>
          <div>
            <Switch>
                <Route path='/api' component={NavigationRouter}/>
                <Route exact path='/' component={HomePage}/>
                <Redirect to='/'/>
            </Switch>
          </div>
        </Router>
      );
    }
