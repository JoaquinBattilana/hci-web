export const isRequired = value => value ? undefined : "Value is required";

export const minLength = value => value.length >= 8 ? undefined : "Value should at least have 8 characters";

export const maxLength = value => value.length <= 30 ? undefined: "Value should have less than 30 characters";