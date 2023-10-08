import { z } from 'zod';
import { CitySchema } from './schemas/CitySchema';

export type City = z.infer<typeof CitySchema>
