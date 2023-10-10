import { useContext } from 'react';
import { DatePicker, Select } from 'antd';
import { LocationContext } from '../../contexts/LocationContext';
import { useGetState } from '../../hooks/useGetState';
import { useGetCity } from '../../hooks/useGetCity';

import { Loader } from '../../portals/Loader';

export function SearchBar() {
  const { selectedState, setSelectedState, selectedCity, setSelectedCity } = useContext(LocationContext);

  const [states, isStateLoading] = useGetState();
  const [cities, isCityLoading] = useGetCity(selectedState);

  const { RangePicker } = DatePicker;
  const dateFormat = 'DD/MM/YYYY';

  if (isStateLoading || isCityLoading || !Array.isArray(states) || !Array.isArray(cities)) {
    return (
      <Loader />
    );
  }

  return (
    <div className='p-5 flex items-center gap-[38px] shadow-[0_6px_8px_0_rgba(0,0,0,0.1)] max-md:gap-[22px]' data-testid="content">
      <RangePicker size='large' className='w-[372px] shadow-[0_1px_4px_0_rgba(0,0,0,0.1)]' format={dateFormat} />
      <div className='flex items-center gap-[22px] max-md:flex-col'>
        <Select
          className='w-[256px] max-md:w-[372px]'
          size='large'
          placeholder='Estado de retirada'
          options={states.map((state) => ({ label: state.nome, value: state.sigla }))}
          value={selectedState === '' ? undefined : selectedState}
          onChange={(state) => setSelectedState(state)}
        />
        <Select
          className='w-[256px] max-md:w-[372px]'
          size='large'
          placeholder='Cidade de retirada'
          options={cities.map((city) => ({ label: city.nome, value: city.nome }))}
          value={selectedCity === '' ? undefined : selectedCity}
          disabled={!selectedState}
          onChange={(city) => setSelectedCity(city)}
        />
      </div>
    </div>
  );
}
