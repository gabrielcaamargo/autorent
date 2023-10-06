import { render, screen, fireEvent } from '@testing-library/react';
import { Header } from '.';

describe('Header component', function () {
  it('should render app logo', function () {
    render(<Header />);

    screen.getByTestId('logo');
  });

  it('should redirect the user when clicking on logo', function () {
    render(<Header />);
    const logo = screen.getByTestId('logo');
    const baseUrl = 'http://localhost/';
    fireEvent.click(logo);

    expect(window.location.href).toEqual(baseUrl);
  });

  it('should render user actions buttons', function () {
    render(<Header />);
    screen.getByTestId('sign-up');
    screen.getByTestId('login');
  });
});
