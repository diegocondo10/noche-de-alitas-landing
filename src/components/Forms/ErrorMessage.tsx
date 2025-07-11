import { ErrorMessage as HookErrorMessage } from "@hookform/error-message";
import React from "react";

const ErrorMessage: React.FC<{ name: string }> = ({ name }) => {
  return (
    <HookErrorMessage
      name={name}
      render={({ message }) => <small className='text-red-500 mt-2'>{message}</small>}
    />
  );
};

export default ErrorMessage;
