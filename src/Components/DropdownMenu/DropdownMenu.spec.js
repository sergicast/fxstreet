import React from "react";
import { render, screen } from '@testing-library/react';
import { DropdownMenu } from '../';
import { dropdownConfig } from "./dropdownConfig";

describe('DropdownMenu component', () => {
    const handleClick = jest.fn();
    let dropdownItems;

    beforeEach(() => {
        render(<DropdownMenu handleOnClickSubMenu={handleClick} />);
        dropdownItems = screen.getAllByTestId('dropdown-item');
    });

    it('renders items correctly', () => {

        dropdownConfig.forEach(({ label }) => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });

        expect(dropdownItems instanceof Array).toBe(true);
        expect(dropdownItems).toHaveLength(dropdownConfig.length);
    });
});
