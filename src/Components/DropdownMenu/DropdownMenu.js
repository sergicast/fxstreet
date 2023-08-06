import React from "react";
import './DropdownMenu.scss';

import { dropdownConfig } from "./dropdownConfig";

/**
 * Dropdown menu component.
 * @param {Object} props - The component props.
 * @param {function} props.handleOnClickSubMenu - Function called when a submenu item is clicked.
 * @returns {React.ReactElement}
 */
export const DropdownMenu = ({ handleOnClickSubMenu }) => {

    return (
        <div className="dropdown">
            {
                dropdownConfig.map(({ Icon, label, hasSubMenu, key }) =>
                    <div
                        data-testid="dropdown-item"
                        key={key}
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
