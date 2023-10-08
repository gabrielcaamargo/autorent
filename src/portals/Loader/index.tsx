import { createPortal } from 'react-dom';
import { ThreeBody } from '@uiball/loaders';

export function Loader() {
  return createPortal(
    <div className='fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50'>
      <div className='text-white'>
        <ThreeBody
          size={55}
          speed={1}
          color="#AA1515"
        />
      </div>
    </div>,
    document.getElementById('loader') as HTMLElement
  );
}
