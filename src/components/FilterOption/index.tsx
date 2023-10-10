interface FilterOptionProps {
  label: string;
  isActive?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}

export function FilterOption({ label, isActive, icon, onClick }: FilterOptionProps) {
  return (
    <button
      className={`font-bold text-lg px-3 ease-in duration-150 ${isActive ? 'bg-carmesim-500 text-white hover:bg-carmesim-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-300'} rounded flex items-center gap-2`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}
