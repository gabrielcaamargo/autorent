import { z } from 'zod';

export const CitySchema = z.array(
  z.object({
    id: z.number(),
    nome: z.string(),
    microrregiao: z.object({
      id: z.number(),
      nome: z.string(),
      mesorregiao: z.object({
        id: z.number(),
        nome: z.string(),
        UF: z.object({
          id: z.number(),
          nome: z.string(),
          sigla: z.string(),
          regiao: z.object({
            id: z.number(),
            nome: z.string(),
            sigla: z.string()
          }),
        })
      })
    })
  })
);
