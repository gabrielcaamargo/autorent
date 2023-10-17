import carBackground from '../../assets/images/car-background.svg';
import velocimeter from '../../assets/images/icons/velocimeter.svg';
import calendar from '../../assets/images/icons/calendar.svg';
import blob from '../../assets/images/icons/blob.svg';

export function Car() {
  return (
    <div className='max-w-[342px] rounded-lg overflow-hidden shadow-[0px_2px_5px_0px_rgba(0,0,0,0.25)]'>
      <header className="max-h-28">
        <img src={carBackground} alt="Car" />
      </header>

      <div className='pt-2 px-2 pb-3'>
        <div>
          <p className='font-bold text-2xl'>Alfa Romeo 4C</p>
          <span className='text-gray-600 font-bold'>Alfa Romeo</span>
        </div>

        <div className='mt-2'>
          <p className='font-bold'>Porto Alegre/RS</p>
          <span className='text-emerald-500 font-medium'>DISPONÍVEL</span>
        </div>

        <div className='mt-5'>
          <div className='flex items-center gap-1 text-gray-600'>
            <img src={velocimeter} alt="Velocímetro" />
            <strong>Velocidade máxima:</strong>
            <p>258km/h</p>
          </div>

          <div className='flex items-center gap-1 text-gray-600'>
            <img src={calendar} alt="Ano" />
            <strong>Ano:</strong>
            <p>2023</p>
          </div>

          <div className='flex items-center gap-1 text-gray-600'>
            <img src={blob} alt="Combustível" />
            <strong>Combustível:</strong>
            <p>Gasolina</p>
          </div>
        </div>

        <div className='flex justify-end mt-12'>
          <button className='bg-carmesim-500 text-white rounded-sm px-5 font-bold ease-in duration-150 hover:bg-carmesim-600'>
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}
