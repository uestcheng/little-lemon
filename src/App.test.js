import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
    test('renders home page', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        const homeElement = screen.getAllByText(/Home/i);
        expect(homeElement[0]).toBeInTheDocument();
    });

    test('renders bookings page', () => {
        render(
            <BrowserRouter>
                <App />
            </BrowserRouter>
        );

        const bookingsElement = screen.getAllByText(/Reservations/i);
        expect(bookingsElement[0]).toBeInTheDocument();
    });

    // Add more tests for other components/pages as needed
});
