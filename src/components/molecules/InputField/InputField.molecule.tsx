import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import InputText from '../../atoms/InputText/InputText.atom';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function InputField({ label, error, ...props }: Props) {
  return (
    <div>
      <h6>{label}</h6>
      {/* Disabled prop spreading rule because we're making a generic component that'll 
        accept all manner of props attributed for input element
      */}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <InputText {...props} />
      {error && <div>{error}</div>}
    </div>
  );
}
