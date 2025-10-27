import {z} from '@hono/zod-openapi';

const currentYear = new Date().getFullYear();

export const responseSchema = z.object({
    category: z.string()
    .min(3)
    .openapi({
        title: 'Rankings API Response Category',
        description: 'The category of the rankings, e.g., Men or Women',
        example: 'men',
        enum: ['men', 'women'],
        default: 'men',
        deprecated: false,
        format: 'string',
    }),
    year: z.number()
    .int()
    .openapi({
        title: 'Year of the Rankings',
        description: 'The year for which the rankings are provided',
        example: 2001,
        default: currentYear,
        format: 'int32',
        minimum: 1900,
        maxLength: 4,
        minLength: 4,
        deprecated: false,
    }),
    
    
})