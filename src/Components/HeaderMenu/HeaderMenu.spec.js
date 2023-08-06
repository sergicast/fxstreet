import React from "react";
import { render, screen } from '@testing-library/react';
import { HeaderMenu } from '../';

describe('HeaderMenu component', () => {

    let containersDiv;

    beforeEach(() => {
        render(<HeaderMenu />);
        containersDiv = screen.getAllByTestId('div');
    });

    it('render correct number of items', () => {
        expect(containersDiv).toHaveLength(4);
    });
});
