import { cn } from "@/lib/utils";
import { FC } from "react";
import ErrorMessage from "./ErrorMessage";

export interface FormFieldRenderProps {
  name: string;
  label: string | React.ReactElement;
  labelProps?: React.DetailedHTMLProps<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  >;
  containerClassName?: string;
  render: ({ name }: { name: string }) => React.ReactElement | React.ReactNode;
}

const FormFieldRender: FC<FormFieldRenderProps> = ({
  name,
  render,
  label,
  containerClassName,
  labelProps,
}) => {
  return (
    <div className={cn("flex flex-col", containerClassName)}>
      <label className='w-full mb-1 font-semibold' htmlFor={name} {...labelProps}>
        {label}
      </label>
      {render({ name })}
      <ErrorMessage name={name} />
    </div>
  );
};

export default FormFieldRender;
