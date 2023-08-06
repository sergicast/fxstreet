import React from "react";
import { render, screen } from '@testing-library/react';
import { TellUsWhy } from '../';

describe('TellUsWhy component', () => {
    const handleClick = jest.fn();

    beforeEach(() => {
        render(<TellUsWhy handleOnBack={handleClick} />);
    });

    it('renders items correctly', () => {
        const title = screen.getByText('Tell us why:');
        expect(title).toBeInTheDocument();
        const noAuthorInput = screen.getByDisplayValue('noAuthor');
        expect(noAuthorInput).toBeInTheDocument();
    });
});
