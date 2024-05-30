export interface ButtonTypes {
  onClick?: () => void;
  text: string;
}

export interface InputTypes {
  name: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | null | boolean;
}

export interface LoginFormProps {
  showCodeInput: boolean;
  email: string;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailSubmit: () => void;
  code: string;
  handleCodeChange: (value: string) => void;
  showVector: boolean;
  errorMessage: string;
  setCode: (value: React.SetStateAction<string>) => void;
  setShowVector: (value: React.SetStateAction<boolean>) => void;
}

export interface LoginVal {
  email: string;
  code: string;
}

export interface TimeRange {
  start: string | null;
  end: string | null;
}

export interface WeekDayProps {
  day: string;
}
