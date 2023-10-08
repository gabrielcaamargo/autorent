import { DatePicker, Select } from 'antd';
import { useGetState } from '../../hooks/useGetState';

export function SearchBar() {
  const [states, isLoading] = useGetState();

  const { RangePicker } = DatePicker;
  const dateFormat = 'DD/MM/YYYY';

  if (isLoading || !Array.isArray(states)) {
    return (
      <div className='absolute h-full w-full flex items-center justify-center'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className='p-5 flex items-center gap-[38px] shadow-[0_6px_8px_0_rgba(0,0,0,0.1)]'>
      <RangePicker size='large' className='w-[372px] shadow-[0_1px_4px_0_rgba(0,0,0,0.1)]' format={dateFormat} />
      <div className='flex items-center gap-[22px]'>
        <Select
          className='w-[256px]'
          size='large'
          placeholder='Estado de retirada'
          options={states.map((location) => ({ label: location.nome, value: location.sigla }))}
        />
        <Select
          className='w-[256px]'
          size='large'
          placeholder='Cidade de retirada'
          options={states.map((location) => ({ label: location.nome, value: location.sigla }))}
          disabled
        />
      </div>
    </div>
  );
}
