import React from "react";
import './styles.scss';
import { HeaderMenu, SideMenu, RightSection } from '../../components';

export const Layout = ({children}) => {
    return (
        <div className="layout">
            <HeaderMenu /> 
            <SideMenu />   
            <main>{children}</main>
            <RightSection /> 
        </div>
    );
};
