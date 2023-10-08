import { z } from 'zod';
import { StateSchema } from './schemas/StateSchema';

export type State = z.infer<typeof StateSchema>;
