import  Axios,{ AxiosRequestConfig } from "axios"

export interface Credentials {
    username: string;
    password: string;
}
export const  onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: "post",
        url: 'https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users'
    }
    try{
        const {data: respone} = await Axios.request(requestConfig);

    }catch (e:any) {
        console.error(e);
        return {error: e.respone.data.message}
        
    }
}    