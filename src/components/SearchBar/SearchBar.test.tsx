import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchBar } from '.';
import { LocationContext } from '../../contexts/LocationContext';

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node: HTMLElement) => node,
  };
});

describe('SearchBar component', () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });

  afterEach(() => {
    document.body.removeChild(container);
  });

  const locationContextValue = {
    selectedState: 'RS',
    setSelectedState: jest.fn(),
    selectedCity: 'Porto Alegre',
    setSelectedCity: jest.fn(),
  };

  const renderSearchBar = () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <LocationContext.Provider value={locationContextValue}>
          <SearchBar />
        </LocationContext.Provider>
      </QueryClientProvider>,
      { container },
    );
  };

  jest.mock('../../hooks/useGetState', () => {
    return {
      useGetState: () => [['SP', 'RS'], false],
    };
  });

  jest.mock('../../hooks/useGetCity', () => {
    return {
      useGetCity: () => [['Porto Alegre', 'Novo Hamburgo'], false],
    };
  });

  it('should render SearchBar', function () {
    renderSearchBar();

    expect(screen.getByTestId('loader')).toBeInTheDocument();

    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeNull();
      expect(screen.getByTestId('content')).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText('Estado de retirada'),
      ).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText('Cidade de retirada'),
      ).toBeInTheDocument();
    });
  });

  it('should be able to select a state and a city', function () {
    renderSearchBar();

    waitFor(() => {
      expect(screen.getByTestId('loader')).toBeNull();
      userEvent.selectOptions(
        screen.getByPlaceholderText('Estado de retirada'),
        'RS',
      );
      userEvent.selectOptions(
        screen.getByPlaceholderText('Cidade de retirada'),
        'Novo Hamburgo',
      );

      expect(locationContextValue.setSelectedState).toHaveBeenCalledWith('RS');
      expect(locationContextValue.setSelectedCity).toHaveBeenCalledWith(
        'Novo Hamburgo',
      );
    });
  });

  it('should has mobile classes on container', function () {
    renderSearchBar();

    if (window.innerWidth <= 768) {
      const container = screen
        .getByTestId('content')
        .querySelector('max-md:gap-[22px]');

      expect(container).toBeInTheDocument();
    }
  });
});
