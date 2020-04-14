import React, { Component } from 'react'
import './style.css'

class Header extends Component{
    render(){
        return(
            <div className="header">
                <nav className="navbar navbar-light bg-light">
                <div className="d-flex justify-content-center align-items-center m-4 gaNavbarLogo-holder">
                <img className="img-fluid" id="gaNavbarLogo" src="../../assets/images/logo.png" alt="MyLogo"/>
                <div className="d-flex m-4 align-items-center ga-user-infor-holder">
                    <div className="mx-2 gaUserName-holder">
                    <span>Welcome, <span id="gaUserName">User</span></span>
                    </div>
                    <div className="mx-2 sign-out">
                    <button className="btn btn-primary" id="gaSignOut">Sign Out</button>
                    </div>
                </div>
                </div>
                </nav>

            </div>
        )
    }
}

export default Header