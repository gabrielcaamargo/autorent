import { useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { LocationContext } from '../../contexts/LocationContext';
import { ConfigProvider } from 'antd';
import { Router } from '../Router';

import ptBr from 'antd/locale/pt_BR';
import { Header } from '../Header';
import { SearchBar } from '../SearchBar';
import { Footer } from '../Footer';

export function App() {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider
        locale={ptBr}
        theme={{
          token: {
            colorPrimary: '#AA1515',
          },
        }}
      >
        <BrowserRouter>
          <LocationContext.Provider
            value={{
              selectedState,
              setSelectedState,
              selectedCity,
              setSelectedCity,
            }}
          >
            <Header />
            <SearchBar />
            <Router />
            {/* <Footer /> */}
          </LocationContext.Provider>
        </BrowserRouter>
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
