/* eslint-disable no-unused-vars */
import React from 'react';
import {
  Control,
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  RegisterOptions,
  UseFormStateReturn,
} from 'react-hook-form';

interface RenderProps {
  field: ControllerRenderProps;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<any>;
  value: any;
}

export type RenderFieldProps = {
  name: string;
  defaultValue?: any;
  control?: Control;
  render: (props: RenderProps) => React.ReactElement;
  rules?: RegisterOptions;
};

const RenderField: React.FC<RenderFieldProps> = (props) => {
  return (
    <Controller
      name={props.name}
      control={props.control}
      defaultValue={props.defaultValue}
      rules={props?.rules}
      render={({ field, fieldState, formState }) => {
        return props.render({
          field,
          fieldState,
          formState,
          value: field.value,
        });
      }}
    />
  );
};

export default RenderField;
