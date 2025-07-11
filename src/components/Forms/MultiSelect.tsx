import classNames from 'classnames';
import {
  MultiSelect as PrimeMultiSelect,
  MultiSelectProps as PrimeMultiSelectProps,
} from 'primereact/multiselect';
import React from 'react';
import { Controller } from 'react-hook-form';
import { ControllerProps } from './types';

export interface MultiSelectProps extends Omit<PrimeMultiSelectProps, 'name' | 'defaultValue'> {
  controller: ControllerProps;
  block?: boolean;
}

const MultiSelect: React.FC<MultiSelectProps> = (props) => {
  const { controller, block, ...rest } = props;

  return (
    <Controller
      {...controller}
      render={({ field, fieldState, formState }) => (
        <React.Fragment>
          <PrimeMultiSelect
            id={field.name}
            className={classNames(rest.className, { 'w-full': block })}
            invalid={fieldState.invalid}
            value={field.value}
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            placeholder="SELECCIONAR"
            emptyMessage="Sin resultados"
            emptyFilterMessage="Sin resultados"
            filterPlaceholder="BUSCAR..."
            resetFilterOnHide
            // focusInputRef={field.ref}
            filterInputAutoFocus
            {...rest}
            disabled={formState.isSubmitting || rest.disabled || rest.loading}
          />
        </React.Fragment>
      )}
    />
  );
};

export default MultiSelect;
