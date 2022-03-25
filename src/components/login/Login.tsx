import React, { useState } from "react"
import style from './Login.module.css'
import logo from '../img/logo.jpg'
import { onLogin } from './Login.api'
const Login = () => {

    const [{ username, password }, setCredetials] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState('');


    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        const respone = await onLogin({
            username,
            password
        })

        if (respone && respone.error) {
            setError(respone.error);

        }

    }


    return (
        <form onSubmit={login}>
            <div className={style.wrap_popup_login_content}>
                <div className={style.popup_login_content}>
                    <img className={style.logo_toco} src={logo} alt="" />

                    <input type="text" name="username" value={username} placeholder="Nhập tên  của bạn" onChange={(event) => {
                        setCredetials({
                            username: event.target.value,
                            password
                        })
                    }} />

                    <input type="password" name="password" value={password} placeholder="Nhập mật khẩu của bạn" onChange={(event) => {
                        setCredetials({
                            username,
                            password: event.target.value
                        })
                    }} />

                    <div className={style.sugget_text}>
                        <div className={style.link}>
                            <span className={style.span_text}>
                                <span className={style.span_text}>Quên mật khẩu</span>
                            </span>
                        </div>
                    </div>

                    <div className={style.btn}>
                        <button className={style.btn_yellow} >Đăng nhập</button>

                        {error.length > 0 && <p>{error}</p>}

                    </div>

                    <div className={style.sugget_text}>
                        <div className={style.text}>
                            <span className={style.span_text}>
                                <span className={style.span_text}>Bạn đã có tài khoản?</span>
                            </span>
                        </div>
                        <div className={style.link}>
                            <span className={style.span_text}>
                                <span className={style.span_text}>Đăng ký</span>
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
        </form>
    )
}

export default Login