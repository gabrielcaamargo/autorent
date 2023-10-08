import { z } from 'zod';

export const StateSchema = z.array(
  z.object({
    id: z.number(),
    nome: z.string(),
    sigla: z.string(),
    regiao: z.object({
      id: z.number(),
      nome: z.string(),
      sigla: z.string(),
    })
  })
);
