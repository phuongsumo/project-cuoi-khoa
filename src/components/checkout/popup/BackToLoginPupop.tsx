import React from 'react'
import style from './Popup.module.css'
import { IoCloseCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
const BackToLoginPupop = (props: any) => {
    let { setBackToLogin, setPopupSuccessOrder } = props
    return (
        <div>
            <div className={style.container}>
                <div className={style.backToLoginMessage}>
                    <div onClick={() => setBackToLogin(false)} className={style.popUpBtn}><IoCloseCircle className={style.popUpIcon} /></div>
                    <div className={style.backToLoginContent}>
                        <div className={style.backTitle}>Bạn vui lòng đăng nhập để tiếp tục thanh toán!!!</div>
                        <div className={style.backButtons}>
                            <div onClick={() => setBackToLogin(false)} className={`${style.ok} ${style.button}`}><Link to="/">Đồng ý</Link></div>
                            <div onClick={() => setBackToLogin(false)} className={`${style.cancel} ${style.button}`}><Link to="/">Hủy thanh toán</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <div onClick={() => setPopupSuccessOrder(false)} className={style.overlay}></div>
        </div>
    )
}

export default BackToLoginPupop