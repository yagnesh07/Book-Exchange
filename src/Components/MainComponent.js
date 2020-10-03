import React, { Component } from 'react';
import NavbarPage from './NavbarPage';
import HomePage from './HomePage';
import ProductPage from './ProductPage';
import FooterPage from './FooterPage';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component{
    render(){
        return(
            <div>
                <NavbarPage />
                <Switch>
                    <Route path = '/home' component = {HomePage}/>
                    <Route exact path = '/product' component = {ProductPage} />
                    <Redirect to = '/home' />
                </Switch>
                <FooterPage />
            </div>
        );
    }
}
export default Main;