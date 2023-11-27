import React, {useContext} from "react";
import * as Routes from './router';
import style from './Navigation.module.css';
import './Navigation.css'
import {AppContext} from "../context/context";
import {Link, useLocation} from "react-router-dom";

function Navigation() {
    const  location = useLocation();
    const context = useContext(AppContext);
    return (
        <div className={style.nav_container}>
            <Link className={'item_nav'} to={`/${Routes.HOME}`}>Home</Link>
            <Link className={'item_nav'} to={`/${Routes.CATEGORY}`}>Category</Link>
            <span>Current page - {location.pathname}</span>
        </div>
    )
}

export default Navigation