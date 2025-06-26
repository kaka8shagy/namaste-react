import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from '../Header';
import appStore from '../../utils/appStore';

describe('Header Component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
    });

    it('should load Header component with list and listitem', () => {
        const list = screen.getByRole('list');
        expect(list).toBeInTheDocument();

        const listItems = screen.getAllByRole('listitem');
        expect(listItems.length).toBe(8);
    });

    it('should change login button to logout', () => {
        const loginButton = screen.getByRole('button', { name: 'Login' });
        fireEvent.click(loginButton);
        const logoutButton = screen.getByRole('button', { name: 'Logout' });
        expect(logoutButton).toHaveTextContent('Logout');
    });
});