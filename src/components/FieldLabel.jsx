import React from 'react';

export const FieldLabel = ({ label, name, placeholder, error, onChange, onBlur, value, ...rest }) => {
    return (
        <div className={`form-group pt-2 ${error ? 'has-error' : ''}`}>
            <label>{label}</label>
            <input
                className={`form-control ${error ? 'is-invalid' : ''}`}
                type="text"
                id={name}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...rest}
            />
            {error ?
                <div className="invalid-feedback">
                    * {error}
                </div>
                : null}
        </div>
    );
};
