import { render, screen, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { SideMenu } from '../';


const getButtons = () => {
    return {
        buttonOne: screen.getByText('Option 1'),
        buttonTwo: screen.getByText('Option 2')
    };
};

const getLogo = () => {
    return {
        logo: screen.getAllByAltText('fxstreet logo'),
    };
};

describe('SideMenu component', () => {
    let buttons;
    let image;

    beforeEach(() => {
        render(
            <MemoryRouter>
                <SideMenu />
            </MemoryRouter>
        );
        buttons = getButtons();
        image = getLogo();
    });
    afterEach(cleanup);

    it('render the links correctly', () => {

        expect(buttons.buttonOne).toBeInTheDocument();
        expect(buttons.buttonTwo).toBeInTheDocument();
    });

    it('renders logo correctly', () => {
        image.logo.forEach((item) => {
            expect(item).toBeVisible();
        });
    });
});
