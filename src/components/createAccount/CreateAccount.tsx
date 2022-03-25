import React from "react";
import style from "./CreateAccount.module.css"
import logo   from '../img/logo.jpg'
const CreateAccount = () =>{
    return (
        <div className={style.wrap_popup_login_content}>
        <div className={style.popup_login_content}>
            <img className={style.logo_toco} src={logo} alt=""  />
            
            <input type="text"  name="username" placeholder="Nhập tên của bạn" />
           
            <input type="password" name="password" placeholder="Nhập mật khẩu của bạn" />

            <input type="email"  name="email" placeholder="Nhập email của bạn" />
        
            <input type="text"  name="phone" placeholder="Nhập số điện thoại của bạn" />

            <input type="text"  name="fullname" placeholder="Nhập tên đầy đủ của bạn" />

            <input type="text"  name="address" placeholder="Nhập địa chỉ của bạn" />

            
            <div className={style.btn_yellow }>
                <span className={style.span_text}>
                    <span className={style.span_text}>Đăng ký</span>
                </span>
            </div>
            <div className={style.sugget_text}>
                <div className={style.text}>
                    <span className={style.span_text}>
                        <span className={style.span_text}>Bạn đã có tài khoản?</span>
                    </span>
                </div>
                <div className={style.link}>
                    <span className={style.span_text}>
                        <span className={style.span_text}>Đăng nhập</span>
                    </span>
                </div>
            </div>
            <div className={style.sugget_text}>
                <a href="#" className={style.back_home}>
                    <span className={style.span_text}>
                        <span className={style.span_text}>Quay lại chính màn hình</span>
                    </span>
                </a>
            </div>
        </div>
    </div>
    )
}


export default CreateAccount