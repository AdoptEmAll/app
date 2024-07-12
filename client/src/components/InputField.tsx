import React, { type FC } from "react";
import { type ShelterData } from "../pages/Shelter/ShelterList";

interface InputFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  required?: boolean;
  onChangeCb: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField: FC<InputFieldProps> = (props) => {
  const { label, type, name, placeholder, value, required, onChangeCb } = props;

  return (
    <>
      <label>{label}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChangeCb}
      />
    </>
  );
};

export default InputField;
