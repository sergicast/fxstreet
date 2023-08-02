import React from "react";
import './SideMenu.scss';
import fxstreetLogo from '../../assets/img/logo.svg';


export const SideMenu = () => {
    return (
        <nav className="sidemenu">
            <img src={fxstreetLogo} alt='between logo' />
            <ul>
                <li>Option 1</li>
                <li>Option 2</li>
                <li>Option 3</li>
                <li>Option 4</li>
            </ul>
        </nav>
    );
};
