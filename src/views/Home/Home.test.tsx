import '@testing-library/jest-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';
import { Home } from '.';

describe('Home component', function() {
  const renderHome = () => {
    const queryClient = new QueryClient();
    render(
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    );
  };
  it('should render home', function() {
    renderHome();
  });

  it('should render car list', function() {
    renderHome();

    expect(screen.getByTestId('car-list')).toBeInTheDocument();
  });
});
