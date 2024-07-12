export type AlertTypes = {
  open: boolean;
  message?: string;
  type?: "info" | "error" | "success" | "warning";
};

export type ProjectTypes = {
  name: string;
  shortDetail: string;
  details: string;
  pic: string;
  repo: string;
  demo: string;
};

export type InputTypes = {
  type: string;
  placeholder: string;
  required?: boolean;
  label: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};
