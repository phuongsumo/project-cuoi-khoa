import React, { useEffect, useState } from "react";
import style from "./CreateAccount.module.css"
import logo from '../login/img/logo.jpg'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
interface UserData {
    username: string;
    password: string;
    email: string;
    phone: string;
    fullName: string;
    address: string;
}
const CreateAccount = () => {

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
            .min(5, 'Username must be at least 5 characters')
            .required('Username is required'),
        password: Yup.string()
            .min(5, 'Password must be at least 5 characters')
            .required('Password is required'),
        email: Yup.string()
            .required('Email is required')
            .email('Email is invalid'),

        phone: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(8)
            .required('A phone number is required'),

        fullName: Yup.string()
            .min(5, 'Fullname must be at least 5 characters')
            .required('Fullname is required'),
        address: Yup.string()
            .min(5, 'Address must be at least 5 characters')
            .required('Address is required'),
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;
    function onSubmit(data: any) {
        // display form data on success
        // alert('Đăng Ký thành công\n\n' + JSON.stringify(data, null, 4));
        // return false;
        
        const users =  datas.map(list=>{
            return list.username
        });
        const name = data.userName;
        const  pass = data.password;
        const fullN = data.fullName;
        const mail = data.email;
        const fulln = data.fullname;
        const phone = data.phone;
        const addre = data.phone;
       let check;
       for(let i = 0; i<users.length ; i++){
           check=true;
               if(name === users[i].toString() )
           {
               check=false;
               break;
           } 
    }
    if(check){
        var dataPost = {
        username: name,
        password: pass,
        email: mail,
        phone: phone,
        fullName: fulln,
        address: addre
        };
     
        let url_post = 'https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users';

            fetch(url_post, {
                    method: 'POST', // thêm mới thì dùng post
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(dataPost), // chuyển dữ liệu object trên thành chuỗi json
                })
                .then((response) => response.json()) // chuyển kết quả trả về thành json object
                .then((data) => {

                    console.log('Success:', data); // ghi log kết quả hoàn thành
                })
                .catch((error) => {

                    console.error('Error:', error); // ghi log nếu xảy ra lỗi
                });
        <Link to='/'></Link>
    
    }else{
        alert("Tên đăng nhập đã tồn tại ")
    }       
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.wrap_popup_login_content}>
            <div className={style.popup_login_content}>
                <img className={style.logo_toco} src={logo} alt="" />

                <div className={style.popup_login_input}>
                    <input id='userName' type="text" {...register('userName')} className={`${style.form_control} ${errors.userName ? 'is-invalid' : ''}`} placeholder="Nhập tên  của bạn" />
                    <div className="invalid-feedback">{errors.userName?.message}</div>
                </div>

                <div className={style.popup_login_input}>
                    <input id="password" type="password" {...register('password')} className={`${style.form_control} ${errors.password ? 'is-invalid' : ''}`} placeholder="Nhập mật khẩu của bạn" />
                    <div className="invalid-feedback">{errors.password?.message}</div>

                </div>
                <div className={style.popup_login_input}>
                    <input id="email" type="email" {...register('email')} className={`${style.form_control} ${errors.email ? 'is-invalid' : ''}`} placeholder="Nhập email của bạn" />
                    <div className="invalid-feedback">{errors.password?.message}</div>
                </div>

            

                <div className={style.popup_login_input}>
                    <input type="text" id="phone" {...register('phone')} className={`${style.form_control} ${errors.phone ? 'is-invalid' : ''}`} placeholder="Nhập số điện thoại của bạn" />

                    <div className="invalid-feedback">{errors.phone?.message}</div>
                </div>

                <div className={style.popup_login_input}>

                    <input type="text" id="fullName" {...register('fullName')} className={`${style.form_control} ${errors.fullName ? 'is-invalid' : ''}`} placeholder="Nhập tên đầy đủ của bạn" />
                    <div className="invalid-feedback">{errors.fullName?.message}</div>
                </div>


                <div className={style.popup_login_input}>
                    <input type="text" id="address" {...register('address')} className={`${style.form_control} ${errors.address ? 'is-invalid' : ''}`} placeholder="Nhập địa chỉ của bạn" />

                    <div className="invalid-feedback">{errors.address?.message}</div>
                </div>


                <div className={style.btn}>
                    
                        <button  type="submit" className={style.btn_yellow}>Đăng ký</button>
                </div>
                <div className={style.sugget_text}>
                    <div className={style.text}>
                        <span className={style.span_text}>
                            <span className={style.span_text}>Bạn đã có tài khoản?</span>
                        </span>
                    </div>
                    <div className={style.link}>
                        <span className={style.span_text}>
                            <Link to='/Login' className={style.span_text}>Đăng nhập</Link>
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


export default CreateAccount