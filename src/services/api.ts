import axios from 'axios';
import {IProduct,IUser} from '../interfaces'

export const getProduct = () => {
    return axios.get<IProduct[]>('https://612b8df922bb490017893b92.mockapi.io/products')
}
export const getUser = () => {
    return axios.get<IUser[] >('https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users')
}
export const putCart = () => {
    return axios.put<IUser[]>('https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users/21')
}