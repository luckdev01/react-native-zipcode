import {ZipcodeInfo} from '../models/zipcode';
import {axg} from './axios';

const baseUrl = 'https://api.zippopotam.us';

export async function getZipcodeInfo(
  zipcode: string,
  country: string = 'us',
): Promise<ZipcodeInfo> {
  return axg(`${baseUrl}/${country}/${zipcode}`);
}
