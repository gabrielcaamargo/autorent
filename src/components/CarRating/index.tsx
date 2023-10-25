interface ICarRatingProps {
  name: string;
  recommends: boolean;
  message: string;
}

export function CarRating({ name, recommends, message }: ICarRatingProps) {
  return (
    <div>
      <header>
        <strong className="text-gray-900">{name} - </strong>
        <span
          className={`${recommends ? 'text-green-500' : 'text-carmesim-500'}`}
        >
          {recommends ? 'RECOMENDA' : 'NÃO RECOMENDA'}
        </span>
      </header>

      <p>{message}</p>
    </div>
  );
}
