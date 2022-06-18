import { FormikConfig, useFormik } from 'formik';
import React, { useMemo } from 'react';
import InputField from '../../molecules/InputField/InputField.molecule';

type LoginSchema = {
  username: string;
  password: string;
};

interface Props {
  formConfig: FormikConfig<LoginSchema>;
  isLoading: boolean;
}

export default function LoginForm({ formConfig, isLoading }: Props) {
  const { errors, values, handleChange, handleBlur, handleSubmit, isValid } = useFormik(formConfig);

  const disabled = useMemo(() => !isValid || isLoading, [isLoading, isValid]);

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.username}
        value={values.username}
        name="username"
      />
      <InputField
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password}
        type="password"
        name="password"
      />
      <button disabled={disabled} type="submit">
        {isLoading ? 'Loading...' : 'Submit'}
      </button>
    </form>
  );
}
