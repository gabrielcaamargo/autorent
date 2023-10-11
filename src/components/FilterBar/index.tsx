import { useState } from 'react';
import { BiFilterAlt } from 'react-icons/bi';
import { FilterOption } from '../FilterOption';
import { FilterModal } from '../FilterModal';

export function FilterBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterOptions = [
    { name: '4x4', isActive: false, id: 1 },
    { name: 'SUV', isActive: false, id: 2 },
    { name: 'Supercarro', isActive: false, id: 3 },
    { name: 'Popular', isActive: false, id: 4 },
    { name: 'Sedans', isActive: false, id: 5 },
    { name: 'Minivans', isActive: false, id: 6 },
    { name: 'Conversíveis', isActive: false, id: 7 },
    { name: 'Elétricos', isActive: false, id: 8 },
    { name: 'Premium', isActive: false, id: 9 },
  ];

  return (
    <div className='mt-4'>
      <div className='w-full max-w-[1284px] mx-auto gap-4 flex items-center justify-center'>
        {
          filterOptions.map(option => (
            <FilterOption
              key={option.id}
              label={option.name}
              isActive={option.isActive}
            />
          ))
        }

        <FilterOption
          label='Todos os filtros'
          icon={<BiFilterAlt color={isModalOpen ? '#FFF' : '#3C3C3C'} />}
          isActive={isModalOpen}
          onClick={() => setIsModalOpen(true)}
        />

        <FilterModal
          open={isModalOpen}
          title='Filtro avançado'
          onCancel={() => setIsModalOpen(false)}
        />
      </div>
    </div>
  );
}
