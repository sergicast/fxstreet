import React from "react";
import './styles.scss';
import { HeaderMenu, SideMenu, RightSection } from '../../components';

/**
 * Component layout of App.
 * @param {Object} props - The component props.
 * @param {React.ReactElement} props.children - Main component.
 * @returns {React.ReactElement}
 */
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
