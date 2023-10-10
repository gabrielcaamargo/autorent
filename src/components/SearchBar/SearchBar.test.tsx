import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SearchBar } from '.';
import { LocationContext } from '../../contexts/LocationContext';

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom');
  return {
    ...original,
    createPortal: (node: HTMLElement) => node
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

  it('should render SearchBar', () => {
    const locationContextValue = {
      selectedState: 'RS',
      setSelectedState: jest.fn(),
      selectedCity: 'Porto Alegre',
      setSelectedCity: jest.fn(),
    };

    const queryClient = new QueryClient();

    render(
      <QueryClientProvider client={queryClient}>
        <LocationContext.Provider value={locationContextValue}>
          <SearchBar />
        </LocationContext.Provider>
      </QueryClientProvider>,
      { container }
    );
  });
});
