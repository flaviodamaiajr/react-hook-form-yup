import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { FieldLabel } from './components/FieldLabel'

const validationSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  age: yup.number().positive().min(18).typeError('Age must be a number').required('Age is required'),
});

const App = () => {
  const { handleSubmit, control, reset, formState: { errors } } = useForm({
    defaultValues: {
      name: "Flávio"
    },
    resolver: yupResolver(validationSchema),
    mode: 'onBlur'
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const handleClear = () => {
    reset();
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FieldLabel
              label="Name"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors[field.name]?.message}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FieldLabel
              label="Email"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors[field.name]?.message}
            />
          )}
        />

        <Controller
          name="age"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <FieldLabel
              label="Age"
              name={field.name}
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
              error={errors[field.name]?.message}
            />
          )}
        />
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <button type="submit" className='btn btn-primary'>Save</button>
          <button type="button" className='btn btn-warning' onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default App;
