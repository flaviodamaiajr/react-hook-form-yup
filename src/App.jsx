import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { TextField } from './components/TextField'

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
        <TextField label="Name" name="name" placeholder="Enter your name" control={control} error={errors.name?.message} />
        <TextField label="Email" name="email" placeholder="Enter your email" control={control} error={errors.email?.message} />
        <TextField label="Age" name="age" placeholder="Enter your age" control={control} error={errors.age?.message} />
        <div style={{ display: 'flex', flexDirection: 'row', gap: 10 }}>
          <button type="submit" className='btn btn-primary'>Save</button>
          <button type="button" className='btn btn-warning' onClick={handleClear}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default App;
