import axios from 'axios';
import {IProduct} from '../interfaces'

export const getProduct = () => {
    return axios.get<IProduct[]>('https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/product')
}
