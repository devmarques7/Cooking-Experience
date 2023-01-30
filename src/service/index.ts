import axios from 'axios';
import { IApiData } from '../interfaces/carrosel';

export const requestData = async (baseUrl: string): Promise<IApiData> => {
  const request = await axios({
    method: 'get',
    url: `${baseUrl}`,
  })
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  return request;
};
