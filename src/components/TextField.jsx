import React from 'react';
import { Controller } from 'react-hook-form';

export const TextField = ({ label, name, placeholder, error, onChange, onBlur, value, control, ...rest }) => {
    return (
        <div className={`form-group pt-2 ${error ? 'has-error' : ''}`}>
            <label>{label}</label>
            <Controller
                name={name}
                control={control}
                render={({ field }) => (
                    <div>
                        <input
                            className={`form-control ${error ? 'is-invalid' : ''}`}
                            type="text"
                            id={field.name}
                            name={field.name}
                            placeholder={placeholder}
                            value={field.value}
                            onChange={field.onChange}
                            onBlur={field.onBlur}
                            {...rest}
                        />
                        {error ?
                            <div className="invalid-feedback">
                                * {error}
                            </div>
                            : null}
                    </div>
                )}
            />
        </div>
    );
};
