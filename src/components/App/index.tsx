import { QueryClientProvider, QueryClient } from 'react-query';
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
            colorPrimary: '#AA1515'
          }
        }}
      >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ConfigProvider>
    </QueryClientProvider>
  );
}
