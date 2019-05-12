import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBar() {
    return(
        <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Smart Home</span>
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
