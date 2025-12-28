import { ServiceError } from "../types/enums/service-error.enum.js";
import { ValidationErrorField } from '../types/validation-error-field.type.js';

export function createErrorObject(serviceError: ServiceError, message: string, details: ValidationErrorField[] = []) {
  return {
    errorType: serviceError,
    message,
    details: [...details],
  };
}
