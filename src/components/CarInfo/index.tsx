import velocimeter from '../../assets/images/icons/velocimeter.svg';
import calendar from '../../assets/images/icons/calendar.svg';
import blob from '../../assets/images/icons/blob.svg';

interface ICarInfoProps {
  name: string;
  brand: string;
  location: string;
  maxSpeed: number;
  releaseYear: string;
  dailyPrice: number;
  fuel: 'Gasolina' | 'Álcool' | 'Flex';
  isAvailable: boolean;
  unavailableUntil?: string;
}

export function CarInfo({
  name,
  brand,
  location,
  maxSpeed,
  releaseYear,
  fuel,
  dailyPrice,
  isAvailable,
  unavailableUntil,
}: ICarInfoProps) {
  return (
    <div className="pt-8 px-9">
      <h1 className="font-bold text-3xl">{name}</h1>
      <strong className="text-xl text-gray-500">{brand}</strong>
      <strong className="text-carmesim-500 block mt-4">{location}</strong>

      <div className="flex flex-col mt-3">
        <div className="flex">
          <img src={velocimeter} alt="Velocimeter" width={24} />
          <strong className="text-gray-900">Veloc. máx:</strong>
          <span className="ml-2">{maxSpeed}km/h</span>
        </div>

        <div className="flex">
          <img src={calendar} alt="Calendar" width={24} />
          <strong className="text-gray-900">Ano:</strong>
          <span className="ml-2">{releaseYear}</span>
        </div>

        <div className="flex">
          <img src={blob} alt="Blob" width={24} />
          <strong className="text-gray-900">Combustível:</strong>
          <span className="ml-2">{fuel}</span>
        </div>
      </div>

      <div className="mt-4 flex flex-col">
        {!isAvailable ? (
          <span className="text-carmesim-500 uppercase font-medium">
            Indisponível até {unavailableUntil}
          </span>
        ) : (
          <span className="text-green-500 uppercase font-medium">
            Disponível
          </span>
        )}

        <div className="flex flex-col gap-4 mt-4">
          <span className="text-base font-bold text-gray-900">
            R${dailyPrice}/dia
          </span>

          <button
            className="bg-carmesim-500 text-white rounded-sm px-5 py-2 font-bold ease-in duration-150 disabled:bg-gray-900 hover:bg-carmesim-600"
            disabled={!isAvailable}
          >
            Reservar
          </button>
        </div>
      </div>
    </div>
  );
}
