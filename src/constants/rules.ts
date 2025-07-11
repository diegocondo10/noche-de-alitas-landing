export const RULE_MESSAGES = {
  REQUIRED: "Este campo es obligatorio",
};

export const NOT_EMPTY_STRING = (message: string = RULE_MESSAGES.REQUIRED) => {
  return (value: any) => {
    if (!value || value?.trim() === "") {
      return message;
    }
    return true;
  };
};
