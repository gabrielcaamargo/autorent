import { Modal } from 'antd';

interface FilterModalProps {
  open: boolean;
  onCancel: () => void;
  title: string;
  children: React.ReactNode;
}

export function FilterModal({ open, onCancel, title, children }: FilterModalProps) {
  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={null}
      width={624}
    >
      <div className='p-4 flex flex-col'>
        <strong className='text-carmesim-500 text-3xl'>{title}</strong>
        {children}
      </div>
    </Modal>
  );
}
