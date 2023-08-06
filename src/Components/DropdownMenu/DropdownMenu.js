import React from "react";
import './DropdownMenu.scss';

import { dropdownConfig } from "./dropdownConfig";

export const DropdownMenu = ({ handleOnClickSubMenu }) => {

    return (
        <div className="dropdown">
            {
                dropdownConfig.map(({ Icon, label, hasSubMenu, key }) =>
                    <div 
                    className="dropdown__item"
                    onClick={() => handleOnClickSubMenu(hasSubMenu, key)}
                    >
                        <Icon />
                        <span>{label}</span>
                    </div>
                )
            }
        </div>
    );
};
