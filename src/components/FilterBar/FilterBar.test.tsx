import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { FilterProvider } from '../../contexts/FilterProvider';
import { FilterBar } from '.';
import { userEvent } from '@testing-library/user-event';
import { FilterModal } from '../FilterModal';

describe('Filter Bar component', function() {
  const handleCloseModalMock = jest.fn();

  const renderFilterBar = () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <FilterProvider>
          <FilterBar />
        </FilterProvider>
      </QueryClientProvider>
    );
  };

  const renderFilterModal = () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <FilterProvider>
          <FilterModal onClose={handleCloseModalMock} open={true} title='Modal Test'/>
        </FilterProvider>
      </QueryClientProvider>
    );
  };
  it('should render filter bar', function() {
    renderFilterBar();
  });

  it('should open modal on advanced filters button gets clicked', function() {
    renderFilterBar();

    const filter = screen.getByTestId('filter-modal');

    userEvent.click(filter);

    renderFilterModal();

    expect(screen.getByTestId('advanced-filter-modal')).toBeInTheDocument();
  });
});
