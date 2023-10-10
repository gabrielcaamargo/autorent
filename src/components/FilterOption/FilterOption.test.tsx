import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { LocationContext } from '../../contexts/LocationContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FilterOption } from '.';

describe('Filter Option component', function () {
  const locationContextValue = {
    selectedState: 'RS',
    setSelectedState: jest.fn(),
    selectedCity: 'Porto Alegre',
    setSelectedCity: jest.fn(),
  };

  const renderFilterOptions = () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <LocationContext.Provider value={locationContextValue}>
          <FilterOption label='Supercarros' />
        </LocationContext.Provider>
      </QueryClientProvider>
    );
  };
  it('should render component', function () {
    renderFilterOptions();
  });
});
