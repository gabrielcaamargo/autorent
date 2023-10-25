interface IRenterInfoProps {
  image: string;
}

export function RenterInfo({ image }: IRenterInfoProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex gap-2">
        <img src={image} alt="Renter profile" className="rounded-full" />
        <div className="flex flex-col">
          <strong>John Doe</strong>
          <span>Anunciante há 5 anos</span>
        </div>
      </div>

      <a
        href="/"
        className="bg-carmesim-500 text-white rounded-sm px-5 py-1 font-bold ease-in duration-150 hover:bg-carmesim-600"
      >
        Visitar perfil
      </a>
    </div>
  );
}
