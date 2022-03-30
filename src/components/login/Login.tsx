import React, { useEffect, useState, useRef, useContext} from 'react'
import style from './Login.module.css'
import logo from '../img/logo.jpg'
import { onLogin } from './Login.api'
import axios from './api/axios';
import  AuthContext  from './context/AuthProvider'
const Login = () => {
    const {  setAuth }: any = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [username, setUser] = useState('');
    const [passwoed, setpasswoed] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

   

    useEffect(() => {
        setErrMsg('');
    }, [username, passwoed])

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users',
                JSON.stringify({ username, passwoed }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            )
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ username, passwoed, roles, accessToken });
            setUser('');
            setpasswoed('');
            setSuccess(true);
        } catch (err: any) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            
        }
    }

    // async function fetchData() {
    //     let response = await axios(
    //         'https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users'
    //     );
    //     let hotProduct = await response.data;
    //     setDatas([...hotProduct.reverse().splice(0, 8)]);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, [])


    return (
        <>
        {
            success ? (
                <section>
                    <h1>you are logged in!</h1>
                    <br />
                    <p>
                        <a href='#'>Go to home</a>
                    </p>
                </section>
            ):(
        <><section>
                            <p className={errMsg ? "errmsg" : "offscrenn"} aria-live="assertive">
                                {errMsg}
                            </p>
                        </section>
                        <form onSubmit={handleSubmit}>
                                <div className={style.wrap_popup_login_content}>
                                    <div className={style.popup_login_content}>
                                        <img className={style.logo_toco} src={logo} alt="" />

                                        <input
                                            type="text"
                                            id='username'

                                            autoComplete="off"
                                            onChange={(e) => setUser(e.target.value)}
                                            value={username}
                                            required
                                            placeholder="Nhập tên  của bạn" />

                                        <input
                                            type="password"
                                            id='password'

                                            autoComplete="off"
                                            onChange={(e) => setpasswoed(e.target.value)}
                                            value={passwoed}
                                            required
                                            placeholder="Nhập mật khẩu của bạn" />

                                        <div className={style.sugget_text}>
                                            <div className={style.link}>
                                                <span className={style.span_text}>
                                                    <span className={style.span_text}>Quên mật khẩu</span>
                                                </span>
                                            </div>
                                        </div>

                                        <div className={style.btn}>
                                            <button className={style.btn_yellow}>Đăng nhập</button>

                                            

                                        </div>

                                        <div className={style.sugget_text}>
                                            <div className={style.text}>
                                                <span className={style.span_text}>
                                                    <a className={style.span_text}>Bạn đã có tài khoản?</a>
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
                            </form></>

            )
            }

        </>
    )
}

export default Login