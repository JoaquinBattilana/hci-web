import React from 'react';
import { NavLink } from 'react-router-dom';

function SideBar() {
    return(
        <div className="mdl-layout__drawer">
        <span className="mdl-layout-title">Title</span>
            <nav className="mdl-navigation">
                <NavLink
                    className="mdl-navigation__link"
                    activeClassName="mdl-navigation__link--current"
                    to="/dispositives"
                >
                    Dispositivos
                </NavLink>
                <NavLink
                    className="mdl-navigation__link"
                    activeClassName="mdl-navigation__link--current"
                    to="/rooms"
                >
                    Habitaciones
                </NavLink>
                <NavLink
                    className="mdl-navigation__link"
                    activeClassName="mdl-navigation__link--current"
                    to="/routines"
                >
                    Rutinas
                </NavLink>
            </nav>
        </div>
    );
}

export default SideBar;
