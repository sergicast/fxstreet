import React from "react";
import './SideMenu.scss';
import fxstreetLogo from '../../assets/img/logo.svg';
import { Link } from "react-router-dom";

/**
 * Left menu component.
 * @returns {React.ReactElement}
 */
export const SideMenu = () => {
    return (
        <nav className="sidemenu">
            <Link to='/'><img src={fxstreetLogo} alt='fxstreet logo' /></Link>
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
            </ul>
        </nav>
    );
};
