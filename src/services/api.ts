import axios from 'axios';
import {IProduct} from '../interfaces'

export const getProduct = () => {
    return axios.get<IProduct[]>('https://612b8df922bb490017893b92.mockapi.io/products')
}