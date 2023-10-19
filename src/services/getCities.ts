import axios from 'axios';
import { City } from '../types/City';
import { CitySchema } from '../types/schemas/CitySchema';

export async function getCities(selectedState: string): Promise<City> {
  return axios
    .get(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedState}/municipios`,
    )
    .then(({ data }) => CitySchema.parse(data));
}
