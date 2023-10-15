export interface IModal {
  open: boolean;
  onClose: () => void;
  title: string;
  children?: React.ReactNode;
}
