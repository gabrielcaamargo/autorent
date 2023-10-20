import { Routes, Route } from 'react-router-dom';

import { Home } from '../views/Home';
import { Car } from '../views/Car';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/car/:id" element={<Car />} />
    </Routes>
  );
}
