import React from 'react';
import { Link } from 'react-router-dom';
import { routeNames } from '../router';
import Logo from '../images/Logo.png'

function NavBar(){
    
    return(<div className="menu-header">
        <img src={Logo} alt="Logo" width="93px" height="29px" className="menu-header__logo"/>
            <Link to={routeNames.personalForm.path} className="menu-header__link">{routeNames.personalForm.nameLink}</Link>
            <Link to={routeNames.preview.path} className="menu-header__link">{routeNames.preview.nameLink}</Link>
           </div>
        )
        
}

export default NavBar