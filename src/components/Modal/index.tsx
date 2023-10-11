import { Modal as AntModal } from 'antd';
import { IModal } from '../../types/Modal';

export function Modal({ open, onCancel, title, children }: IModal) {
  return (
    <AntModal
      open={open}
      onCancel={onCancel}
      width={624}
      footer={null}
    >
      <div className='pt-4 px-4 pb-1 flex flex-col'>
        <strong className='text-carmesim-500 text-3xl mb-4'>{title}</strong>
        {children}
      </div>
    </AntModal>
  );
}
