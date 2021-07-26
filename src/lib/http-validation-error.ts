import { HttpError } from './http-error';
import Joi from 'joi';

// export interface Validatable<T> {
//     validate(): [ValidationError?, T?];
// }

export class HttpValidationError extends HttpError {
    name: 'ValidationError';
    details: Joi.ValidationErrorItem[];

    constructor({
        name = 'ValidationError',
        details,
    }: {
        name?: 'ValidationError';
        details: Joi.ValidationErrorItem[];
    }) {
        super(400, name);
        this.name = name;
        this.details = details;
    }
}
