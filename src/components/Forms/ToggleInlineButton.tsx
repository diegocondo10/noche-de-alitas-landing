import { SelectButton } from 'primereact/selectbutton';
import { FC } from 'react';
import RenderField from './RenderField';
import { ControllerProps } from './types';

export interface ToggleInlineButtonProps {
  controller: ControllerProps;
  options: any[];
}

const ToggleInlineButton: FC<ToggleInlineButtonProps> = ({ controller, options }) => {
  return (
    <RenderField
      {...controller}
      render={({ value, field, fieldState, formState }) => (
        <SelectButton
          id={field.name}
          name={field.name}
          onChange={field.onChange}
          value={value}
          invalid={fieldState.invalid}
          options={options}
          disabled={formState.isSubmitting}
        />
      )}
    />
  );
};

export default ToggleInlineButton;
