import React from 'react'
import style from './Popup.module.css'
import { IoCloseCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const SuccessOrderPopup = (props: any) => {
    let { setPopupSuccessOrder } = props
    return (
        <div>
            <div className={style.container}>
                <div className={style.successMessagePopup}>
                    <div className={style.successMessagePopupTitle}>Thông báo</div>
                    <div onClick={() => setPopupSuccessOrder(false)} className={style.popUpBtn}><IoCloseCircle className={style.popUpIcon} /></div>
                    <div className={style.successMessagePopupContent}>
                        <div className={style.orderResult}>
                            <div className={style.orderResultTitle}>Đặt hàng thành công!</div>
                            <div onClick={() => setPopupSuccessOrder(false)} className={style.resultOk}><Link to="/">Đồng ý</Link></div>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setPopupSuccessOrder(false)} className={style.overlay}></div>
        </div>
    )
}

export default SuccessOrderPopup