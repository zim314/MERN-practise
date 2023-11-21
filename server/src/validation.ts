import Joi, { string } from 'joi';
import { UserSchema } from './models/user';
import { CourseSchema } from './models/course';

export const userValidation = (data: UserSchema) => {
    const schema = Joi.object({
        username: Joi.string().min(3).max(10).required(),
        password: Joi.string().min(6).required(),
        email: Joi.string().required(),
        role: Joi.string().required(),
    });
    return schema.validate(data);
};

export const courseValidation = (data: CourseSchema) => {
    const schema = Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        price: Joi.number().required(),
    });
    return schema.validate(data);
};
