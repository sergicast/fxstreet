import React from "react";
import { render, screen } from '@testing-library/react';
import { RightSection } from '../';

describe('RightSection component', () => {

    let containersDiv;

    beforeEach(() => {
        render(<RightSection />);
        containersDiv = screen.getAllByTestId('div');
    });

    it('render correct number of items', () => {
        expect(containersDiv).toHaveLength(2);
    });
});
