import { Routes, Route } from 'react-router-dom';

import { Home } from '../views/Home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}
