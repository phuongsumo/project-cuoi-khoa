import { atom } from 'recoil'
export const OnlinePaymentSuccess = atom({
    key: 'OnlinePaymentSuccess',
    default: {
        phone: "",
        location: "",
        name: ""
    }
})