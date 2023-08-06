import React from "react";
import './HeaderMenu.scss';

import { ReactComponent as LogoMobile } from '../../assets/img/logo-mobile.svg';

/**
 * Header component.
 * @returns {React.ReactElement}
 */
export const HeaderMenu = () => {
    return (
        <header className="header">
            <LogoMobile />
            <div className="header__section_one"></div>
            <div className="header__section_two"></div>
            <div className="header__section_three"></div>
            <div className="header__section_four"></div>
        </header>
    );
};
