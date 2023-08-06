import React, { useRef } from "react";
import './DropdownMenu.scss';

import { dropdownConfig } from "./dropdownConfig";

/**
 * Dropdown menu component.
 * @param {Object} props - The component props.
 * @param {function} props.handleOnClickSubMenu - Function called when a submenu item is clicked.
 * @param {function} props.useOutsideDropdown - Hook for capturing click outside that component.
 * @returns {React.ReactElement}
 */
export const DropdownMenu = ({ handleOnClickSubMenu, useOutsideDropdown }) => {
    
    const dropdownRef = useRef(null);
    useOutsideDropdown(dropdownRef);

    return (
        <div className="dropdown">
            {
                dropdownConfig.map(({ Icon, label, hasSubMenu, key }) =>
                    <div
                        ref={dropdownRef}
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
