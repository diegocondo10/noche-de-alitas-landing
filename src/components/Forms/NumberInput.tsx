import classNames from 'classnames';
import { InputNumber, InputNumberProps } from 'primereact/inputnumber';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ControllerProps } from './types';

export interface NumberInputProps
  extends Omit<InputNumberProps, 'name' | 'defaultValue'> {
  controller: ControllerProps;
  block?: boolean;
}

const NumberInput: React.FC<NumberInputProps> = (props) => {
  const { controller, block, ...rest } = props;

  return (
    <Controller
      {...controller}
      render={({ field, fieldState, formState }) => {
        return (
          <InputNumber
            // id={field.name}
            {...rest}
            disabled={formState.isSubmitting || rest.disabled}
            className={classNames(rest.className, { 'w-full': block })}
            inputClassName={classNames(rest.inputClassName, {
              'w-full': block,
            })}
            name={field.name}
            value={field.value}
            invalid={fieldState.invalid}
            onChange={(e) => field.onChange(e.value)}
            inputRef={field.ref}
            inputId={field.name}
          />
        );
      }}
    />
  );
};

export default NumberInput;
