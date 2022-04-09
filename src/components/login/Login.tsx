import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import style from './Login.module.css'
import logo from './img/logo.jpg'
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import { accountState } from '../../recoilProvider/userProvider';
import { IUser } from '../../interfaces';

const Login = () => {
    const [account, setAccount] = useRecoilState<IUser>(accountState)

    const navigate = useNavigate();

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    useEffect(() => {
        if (account.username) {
            navigate("/")
        }
    }, [])


    const validationSchema = Yup.object().shape({

        userName: Yup.string()
            .required('Vui lòng nhập tài khoản'),

        password: Yup.string()
            .required('Vui lòng nhập mật khẩu'),

    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;


    function onSubmit(data: any) {

        axios.get(
            'https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users'
        )
            .then(response => {
                const datas: any[] = response.data
                const bien = datas.find(user => {
                    return user.username === data.userName;
                })
                if (bien && bien.password === data.password) {
                    setAccount(bien);
                    localStorage.setItem("account", JSON.stringify(bien))
                    navigate("/")
                }
                else {
                    alert("Tài khoản hoặc mặt khẩu không chính xác")
                }
            })


    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.wrap_popup_login_content}>
                <div className={style.popup_login_content}>
                    <img className={style.logo_toco} src={logo} alt="" />


                    <div className={style.popup_login_input}>
                        <input id='userName' type="text" {...register('userName')} className={`${style.form_control} ${style.form_input} ${errors.userName ? 'is-invalid' : ''}`} placeholder="Tài khoản" />
                        <div className="invalid-feedback">{errors.userName?.message}</div>
                    </div>


                    <div className={style.popup_login_input}>
                        <input id="password" type="password" {...register('password')} className={`${style.form_control} ${style.form_input} ${errors.password ? 'is-invalid' : ''}`} placeholder="Mật khẩu" />
                        <div className="invalid-feedback">{errors.password?.message}</div>

                    </div>


                    <div className={style.sugget_text}>
                        <div className={style.link}>
                            <span className={style.span_text}>
                                <span className={style.span_text}>Quên mật khẩu</span>
                            </span>
                        </div>
                    </div>

                    <div className={style.btn}>
                        <button type="submit" className={`${style.btn_yellow} ${style.buton} `}>Đăng nhập</button>



                    </div>

                    <div className={style.sugget_text}>
                        <div className={style.text}>
                            <span className={style.span_text}>
                                <a className={`${style.span_text} ${style.alink}`}>Bạn chưa có tài khoản?</a>
                            </span>
                        </div>
                        <div className={style.link}>
                            <span className={style.span_text}>
                                <Link to='/CreateAccount' className={style.span_text}>Đăng ký</Link>
                            </span>
                        </div>
                    </div>
                    <div className={style.sugget_text}>
                        <a href="#" className={`${style.back_home} ${style.alink}`}>
                            <span className={style.span_text}>
                                <Link to='/' className={style.span_text}>Quay lại chính màn hình</Link>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </form>
    )
}





export default Login

function typeOf(typeOf: any, username: string): void {
    throw new Error('Function not implemented.');
}
