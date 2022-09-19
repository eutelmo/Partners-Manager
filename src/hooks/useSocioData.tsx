import { useQuery } from 'react-query';
import axios from 'axios';

const fetchSocio = (socioId: any) => {
  return axios.get(`https://sociosassociacao.herokuapp.com/Socios/FindOne/${socioId}`)
}

export const useSocioData = (socioId: any) => {
  return useQuery(['Socio',socioId], () => fetchSocio(socioId))
}