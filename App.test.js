import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './src/App';

describe('App', () => {
    test('renders home page', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <App />
            </MemoryRouter>
        );

        const homeElement = screen.getByText(/Home/i);
        expect(homeElement).toBeInTheDocument();
    });

    test('renders bookings page', () => {
        render(
            <MemoryRouter initialEntries={['/bookings']}>
                <App />
            </MemoryRouter>
        );

        const bookingsElement = screen.getByText(/Bookings/i);
        expect(bookingsElement).toBeInTheDocument();
    });

    test('renders confirmed booking page', () => {
        render(
            <MemoryRouter initialEntries={['/bookings/confirmed']}>
                <App />
            </MemoryRouter>
        );

        const confirmedBookingElement = screen.getByText(/Confirmed Booking/i);
        expect(confirmedBookingElement).toBeInTheDocument();
    });

    test('renders not found page', () => {
        render(
            <MemoryRouter initialEntries={['/nonexistent']}>
                <App />
            </MemoryRouter>
        );

        const notFoundElement = screen.getByText(/Page Not Found/i);
        expect(notFoundElement).toBeInTheDocument();
    });

    test('renders under construction page', () => {
        render(
            <MemoryRouter initialEntries={['/construction']}>
                <App />
            </MemoryRouter>
        );

        const underConstructionElement = screen.getByText(/Under Construction/i);
        expect(underConstructionElement).toBeInTheDocument();
    });
});
