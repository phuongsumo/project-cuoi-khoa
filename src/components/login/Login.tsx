import React, { useEffect, useState, useRef, useContext } from 'react'
import style from './Login.module.css'
import logo from './img/logo.jpg'
import axios from 'axios';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

interface UserData {
    username: string;
    password: string;
}

const Login = () => {
    const [datas, setDatas] = useState<UserData[]>([]);
    async function fetchData() {
        let response = await axios(
            'https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users'
        );
        let userData = await response.data;
        setDatas([...userData.reverse().splice(0, 45)]);
    }

    useEffect(() => {
        fetchData();
    }, [])

    const validationSchema = Yup.object().shape({

        userName: Yup.string()
            .min(5, 'Password must be at least 5 characters')
            .required('Password is required'),



        password: Yup.string()
            .min(5, 'Password must be at least 5 characters')
            .required('Password is required'),

    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    
    function onSubmit(data: any) {
       
        const users =  datas.map(list=>{
            return list.username
        });
        const name = data.userName;
        const pwd = datas.map(list=>{
           return (
               list.password
           )
           
       })
       const pass = data.password;
       let check;
       for(let i = 0; i<users.length ; i++){
           check=false;
           for(let j=0; j<pwd.length; j++){
               if(name=== users[i].toString() && pass === pwd[i].toString() )
           {
               check=true;
               break;
           } 
        }
    }  
    if(check){
     return (
         alert('Đăng nhập thành công'),
         <Link to='/' > Home </Link>
    )
    }else{
        alert("Bạn đăng nhập sai tên hoặc mật khẩu ")
    }       
       
    }
   

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.wrap_popup_login_content}>
                <div className={style.popup_login_content}>
                    <img className={style.logo_toco} src={logo} alt="" />


                    <div className={style.popup_login_input}>
                        <input id='userName' type="text" {...register('userName')} className={`${style.form_control} ${errors.userName ? 'is-invalid' : ''}`} placeholder="Nhập tên  của bạn" />
                        <div className="invalid-feedback">{errors.password?.message}</div>
                    </div>


                            <div className={style.popup_login_input}>
                                <input id="password" type="password" {...register('password')} className={`${style.form_control} ${errors.password ? 'is-invalid' : ''}`} placeholder="Nhập mật khẩu của bạn" />
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
                        <button type="submit" className={style.btn_yellow}>Đăng nhập</button>



                    </div>

                    <div className={style.sugget_text}>
                        <div className={style.text}>
                            <span className={style.span_text}>
                                <a className={style.span_text}>Bạn đã có tài khoản?</a>
                            </span>
                        </div>
                        <div className={style.link}>
                            <span className={style.span_text}>
                                <Link to='/CreateAccount' className={style.span_text}>Đăng ký</Link>
                            </span>
                        </div>
                    </div>
                    <div className={style.sugget_text}>
                        <a href="#" className={style.back_home}>
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
