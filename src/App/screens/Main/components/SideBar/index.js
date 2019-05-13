import React from 'react';
import logo from '../../../../assets/logo-with-text.png';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss'

function SideBar() {
    return(
        <div className="mdl-layout__drawer">
        <NavLink to="/">
            <img className={styles.img}src={logo} />
        </NavLink>
        <span className="mdl-layout-title"></span>
            <nav className="mdl-navigation">
                <NavLink
                    className="mdl-navigation__link"
                    activeClassName="mdl-navigation__link--current"
                    to="/dispositives"
                >
                    Dispositives
                </NavLink>
                <NavLink
                    className="mdl-navigation__link"
                    activeClassName="mdl-navigation__link--current"
                    to="/rooms"
                >
                    Rooms
                </NavLink>
                <NavLink
                    className="mdl-navigation__link"
                    activeClassName="mdl-navigation__link--current"
                    to="/routines"
                >
                    Routines
                </NavLink>
            </nav>
        </div>
    );
}

export default SideBar;
