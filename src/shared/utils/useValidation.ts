import { compose, curryN, has } from 'ramda';

export interface ValidationSchema {
  [key: string]: {
    [key: string]: (value: any) => string | null;
  };
}

export const useValidation = (
  validationSchema: ValidationSchema,
  setError: (field: any, error: string) => void,
  clearError: (field: any) => void,
) => {
  const setErrorIfNeeded = curryN(2, (fieldName: string, error: string | null) => {
    return error ? setError(fieldName, error) : clearError(fieldName);
  });

  const validate = curryN(3, (formName: string, fieldName: string, value: any): void => {
    if (!has(formName, validationSchema)) {
      return;
    }
    if (!has(fieldName, validationSchema[formName])) {
      return;
    }

    const validateField = validationSchema[formName][fieldName];

    compose(setErrorIfNeeded(fieldName), validateField)(value);
  });

  const validateAll = (formName: string | number, values: { [key: string]: any }): boolean => {
    const errors: boolean[] = [];

    const addToErrors = (error: string | null) => {
      if (error) {
        errors.push(!!errors);
      }

      return error;
    };

    Object.entries(values).forEach(([fieldName, value]) => {
      if (!has(formName as string, validationSchema)) {
        return;
      }
      if (!has(fieldName, validationSchema[formName])) {
        return;
      }

      compose(setErrorIfNeeded(fieldName), addToErrors, validationSchema[formName][fieldName])(value);
    });

    return !errors.length;
  };

  return { validate, validateAll };
};
