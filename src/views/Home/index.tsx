import { FilterProvider } from '../../contexts/FilterProvider';

import { FilterBar } from '../../components/FilterBar';
import { Car } from '../../components/Car';

export function Home() {
  return (
    <FilterProvider>
      <FilterBar />

      <div className='mt-16 mb-4 px-5'>
        <h1 className='text-3xl font-bold'>
          Principais carros em
          <span className='text-carmesim-500'> Porto Alegre/RS</span>
        </h1>

        <div className='mt-5 grid grid-cols-5 gap-y-6 gap-x-5' data-testid="car-list">
          <Car />
          <Car />
          <Car />
          <Car />
          <Car />
          <Car />
          <Car />
          <Car />
          <Car />
          <Car />
        </div>
      </div>
    </FilterProvider>
  );
}
