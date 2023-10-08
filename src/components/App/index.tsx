import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Router } from '../Router';

import ptBr from 'antd/locale/pt_BR';

export function App() {
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
          <Router />
        </BrowserRouter>
      </ConfigProvider>
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>
  );
}
