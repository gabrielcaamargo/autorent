import { createPortal } from 'react-dom';
import { HashLoader } from 'react-spinners';

export function Loader() {
  return createPortal(
    <div className='fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50'>
      <div className='text-white'>
        <HashLoader color="#AA1515" />
      </div>
    </div>,
    document.getElementById('loader') as HTMLElement
  );
}
