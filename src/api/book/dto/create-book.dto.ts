import Joi, { ValidationError } from 'joi';
import dayjs from 'dayjs';

export interface CreateBookDto {
    address: string;
    licence: { number: string; startDate: Date; endDate: Date };
    name: string;
    ownerName: string;
}

const schema = Joi.object({
    address: Joi.string().required(),
    licence: Joi.object({
        number: Joi.string().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
    }).required(),
    name: Joi.string().required(),
    ownerName: Joi.string().required(),
}).required();

const transform = (data: any) => {
    const out = { ...data };
    if (data?.licence?.startDate) {
        out.licence.startDate = dayjs(data.licence.startDate)
            .startOf('day')
            .toDate();
    }

    if (data?.licence?.endDate) {
        out.licence.endDate = dayjs(data.licence.endDate)
            .startOf('day')
            .toDate();
    }

    return out;
};

export const validate = (
    data: unknown
): {
    error?: ValidationError;
    value: CreateBookDto;
} => {
    return schema.validate(transform(data), {
        abortEarly: false,
        stripUnknown: true,
    });
};

export default {
    validate,
};
