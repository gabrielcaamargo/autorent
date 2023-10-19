import { createContext, useState } from 'react';
import { IFilter } from '../types/interfaces/IFilter';

interface IFilterProvider {
  filters: IFilter[];
  setFilters: (setState: IFilter[]) => void;

  priceRange: number;
  setPriceRange: (setState: number) => void;

  brand: string;
  setBrand: (setState: string) => void;

  year: number;
  setYear: (setState: number) => void;
}

export const FilterContext = createContext({} as IFilterProvider);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const currentYear = new Date().getFullYear();

  const [filters, setFilters] = useState<IFilter[]>([]);
  const [priceRange, setPriceRange] = useState<number>(0);
  const [brand, setBrand] = useState<string>('');
  const [year, setYear] = useState<number>(currentYear);

  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        priceRange,
        setPriceRange,
        brand,
        setBrand,
        year,
        setYear,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
