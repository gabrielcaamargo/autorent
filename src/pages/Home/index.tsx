import { FilterBar } from '../../components/FilterBar';
import { FilterProvider } from '../../contexts/FilterProvider';

export function Home() {
  return (
    <FilterProvider>
      <FilterBar />
    </FilterProvider>
  );
}
