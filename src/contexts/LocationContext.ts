import { createContext } from 'react';

interface ILocationContext {
  selectedState: string;
  setSelectedState: (setState: string) => void;

  selectedCity: string;
  setSelectedCity: (setState: string) => void;
}

export const LocationContext = createContext<ILocationContext | null>(
  null,
) as React.Context<ILocationContext>;
