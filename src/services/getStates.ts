import axios from 'axios';
import { State } from '../types/State';
import { StateSchema } from '../types/schemas/StateSchema';

export async function getStates(): Promise<State> {
  return axios
    .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(({ data }) => StateSchema.parse(data));
}
