export interface Button {
  label: string;
  hidden?: boolean;
  disabled?: boolean;
  action?: () => void;
}
