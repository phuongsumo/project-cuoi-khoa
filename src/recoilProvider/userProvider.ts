import { atom } from "recoil";

export const initialValues: any = {
    username: '',
    password: '',
    email: '',
    phone: '',
    fullName: '',
    age: '',
    avatar: '',
    address: '',
    cart: [],
    orders: [],
    id: '',
}

if (!localStorage.getItem("account")) {
    localStorage.setItem("account", JSON.stringify(initialValues))
}

const account: any = localStorage.getItem("account")

export const accountState = atom({
    key: 'accountState', // unique ID (with respect to other atoms/selectors)
    default: JSON.parse(account), // default value (aka initial value)
});