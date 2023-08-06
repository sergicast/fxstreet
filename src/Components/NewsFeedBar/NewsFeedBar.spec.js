import React from "react";
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { NewsFeedBar } from '../';

describe('NewsFeedBar component', () => {

    beforeEach(() => {
        render(<NewsFeedBar />);
    });
    
    it('render correct options in a Select', () => {
        const optionOne = screen.getByDisplayValue('All');
        expect(optionOne).toBeInTheDocument();
        expect(optionOne).toHaveLength(3);
    });
    
    it('test if changing option to be displayed corretly', () => {
        const selectElement = screen.getByTestId('select');

        userEvent.selectOptions(selectElement, '2');
        expect(screen.getByText('One')).toBeInTheDocument();

        userEvent.selectOptions(selectElement, '3');
        expect(screen.getByText('Two')).toBeInTheDocument();
    });
});
