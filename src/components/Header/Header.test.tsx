import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Header } from '.';

describe('Header component', function () {
  it('should render app logo', function () {
    const { getByAltText } = render(<Header />);
    expect(getByAltText('Autorent')).toBeInTheDocument();
  });

  it('should redirect the user when clicking on logo', function () {
    const { getByAltText } = render(<Header />);
    const logo = getByAltText('Autorent');
    const baseUrl = 'http://localhost/';
    fireEvent.click(logo);

    expect(window.location.href).toEqual(baseUrl);
  });

  it('should render user actions buttons', function () {
    const { getByText } = render(<Header />);
    expect(getByText('Inscreva-se')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });
});
