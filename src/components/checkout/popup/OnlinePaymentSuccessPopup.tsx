import React from 'react'
import style from './Popup.module.css'
import { Link } from 'react-router-dom'
import {useSetRecoilState} from 'recoil'
import {OnlinePaymentSuccess} from '../../../atoms'
const OnlinePaymentSuccessPopup = () => {
    const setOnlSuccessPayment= useSetRecoilState(OnlinePaymentSuccess)
    const handleOnlPayment = () => {
        // setOnlSuccessPayment(false)
    }
  return (
    <div>
            <div className={style.container}>
                <div className={style.successMessagePopup}>
                    <div className={style.successMessagePopupTitle}>Thông báo</div>
                    <div className={style.successMessagePopupContent}>
                        <div className={style.orderResult}>
                            <div className={style.orderResultTitle}>Đặt hàng thành công!</div>
                            <div onClick={() => handleOnlPayment()} className={style.resultOk}>Đồng ý</div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.overlay}></div>
        </div>
  )
}

export default OnlinePaymentSuccessPopup