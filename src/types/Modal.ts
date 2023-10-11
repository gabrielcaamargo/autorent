export interface IModal {
  open: boolean;
  onCancel: () => void;
  title: string;
  children?: React.ReactNode;
}
