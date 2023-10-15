import { useCallback, useRef, useContext } from 'react';

import { FilterContext } from '../../contexts/FilterProvider';

import { IModal } from '../../types/interfaces/IModal';
import { Modal } from '../Modal';

import { Slider } from 'antd';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

export function FilterModal({ open, onClose, title }: IModal) {
  const { setPriceRange, setBrand, setYear } = useContext(FilterContext);

  const sliderRef = useRef(0);

  const createSearchFilterSchema = z.object({
    brand: z.string()
      .nonempty('A marca é obrigatória')
      .min(3, 'Deve conter no mínimo 3 caracteres')
      .max(20, 'Deve conter no máximo 25 caracteres')
      .transform(brand => {
        return brand.trim().split(' ').map(word => {
          return word[0].toLocaleUpperCase().concat(word.substring(1));
        }).join(' ');
      }),
    year: z.string()
      .nonempty('O ano é obrigatório')
      .max(4, 'Deve conter no máximo 4 dígitos')
      .min(4, 'Deve conter no mínimo 4 dígitos').
      transform(year => parseInt(year))
  });

  type CreateSearchFilterData = z.infer<typeof createSearchFilterSchema>;

  const { register, handleSubmit, formState: { errors } } = useForm<CreateSearchFilterData>({
    resolver: zodResolver(createSearchFilterSchema)
  });


  const handleUpdatePriceRange = useCallback((price: number) => sliderRef.current = price, []);

  const createFilter = useCallback((event: CreateSearchFilterData) => {
    setPriceRange(sliderRef.current);
    setBrand(event.brand);
    setYear(event.year);
    onClose();
  }, []);

  return (
    <Modal
      title={title}
      open={open}
      onClose={onClose}
    >
      <div className='flex flex-col'>
        <span className='font-bold text-base mb-2'>Preço da diária</span>
        <Slider max={2500} onChange={handleUpdatePriceRange} />
        <div className='flex items-center justify-between'>
          <span className='font-bold text-sm text-gray-600'>R$0</span>
          <span className='font-bold text-sm text-gray-600'>R$2.500</span>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(createFilter)}
      >
        <div className='flex items-center gap-5 flex-1 mt-4'>
          <div className='w-full min-h-[90px]'>
            <input
              placeholder='Marca'
              className="w-full border-transparent ease-in duration-200 border-2 rounded px-4 py-3 text-base shadow-[1px_1px_4px_0px_rgba(0,0,0,0.25)] placeholder:font-bold placeholder:text-gray-600 focus:border-carmesim-500"
              {...register('brand')}
            />
            {errors.brand && <span className='text-carmesim-500'>{errors.brand.message}</span>}
          </div>

          <div className='w-full min-h-[90px]'>
            <input
              placeholder='Ano'
              type='number'
              className="w-full border-transparent ease-in duration-200 border-2 rounded px-4 py-3 text-base shadow-[1px_1px_4px_0px_rgba(0,0,0,0.25)] placeholder:font-bold placeholder:text-gray-600 focus:border-carmesim-500"
              {...register('year')}
            />
            {errors.year && <span className='text-carmesim-500'>{errors.year.message}</span>}
          </div>
        </div>

        <div className='w-full flex items-center gap-4 justify-end mt-6'>
          <button className='bg-white text-carmesim-500 border border-carmesim-500 text-base rounded px-4 py-1'>Cancelar</button>
          <button className='bg-carmesim-500 text-white font-bold text-base rounded px-4 py-1' type='submit'>Filtrar</button>
        </div>
      </form>
    </Modal>
  );
}
