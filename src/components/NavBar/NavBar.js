import React, { Component } from 'react';
import CartWidget from './CartWidget';
import NavButtons from './NavButtons';



export default class NavBar extends React.Component {

    render() {

        return (
            <div className="navBar">
                <div className="navName">
                    <img className="logo" src="https://image.flaticon.com/icons/png/128/2727/2727202.png" />
                    <h1> Retrogames </h1>
                </div>
                
                <NavButtons />
                <CartWidget />
                
            </div>



        );
    }
}