import React, { useEffect, useState } from "react";
import style from "./CreateAccount.module.css"
import logo from '../login/img/logo.jpg'
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useForm } from "react-hook-form";
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

    useEffect(() => {
        window.scroll(0, 0)
    }, [])

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
            .max(16, "Username tối đa 16 ký tự")
            .matches(/^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){5,16}[a-zA-Z0-9]$/, "Username không được có dấu cách")
            .required('Username is required'),
        password: Yup.string()
            .min(6, 'Password must be at least 5 characters')
            .max(16, "Password tối đa 16 ký tự")
            .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, ' Password phải có 1 ký tự viết hoa và 1 ký tự số')
            .required('Password is required'),
        email: Yup.string()
            .required('Email is required')
            .matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Nhập lại email. VD: anh@gmail.com'),

        phone: Yup.string()
            .typeError("That doesn't look like a phone number")
            .matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,5}$/im, "Số điện thoại phải có ít nhất 12 số")
            .required('A phone number is required'),

        fullName: Yup.string()
            .min(5, 'Fullname must be at least 5 characters')
            .matches(/^([\w]{3,})+\s+([\w\s]{3,})+$/i, 'Fullname is required'),
        address: Yup.string()
            .min(5, 'Address must be at least 5 characters')
            .matches(/^[a-zA-Z0-9\s,'-]*$/, 'Địa chỉ có chứa dấu gạch ngang. VD HaNoi - VietNam')
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

        const users = datas.map(list => {
            return list.username
        });
        const name = data.userName;
        const pass = data.password;
        const fullN = data.fullName;
        const mail = data.email;
        const fulln = data.fullname;
        const phone = data.phone;
        const addre = data.phone;
        let check;
        for (let i = 0; i < users.length; i++) {
            check = true;

            if (name === users[i].toString()) {
                check = false;
                break;
            }

        }
        if (check) {
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

        } else {
            alert("Tên đăng nhập đã tồn tại ")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.wrap_popup_login_content}>
                <div className={style.popup_login_content}>
                    <img className={style.logo_toco} src={logo} alt="" />

                    <div className={style.popup_login_input}>
                        <input id='userName' type="text" {...register('userName')} className={`${style.form_control} ${style.form_input} ${errors.userName ? 'is-invalid' : ''}`} placeholder="Nhập tên  của bạn" />
                        <div className="invalid-feedback">{errors.userName?.message}</div>
                    </div>

                    <div className={style.popup_login_input}>
                        <input id="password" type="password" {...register('password')} className={`${style.form_control} ${style.form_input} ${errors.password ? 'is-invalid' : ''}`} placeholder="Nhập mật khẩu của bạn" />
                        <div className="invalid-feedback">{errors.password?.message}</div>

                    </div>
                    <div className={style.popup_login_input}>
                        <input id="email" type="email" {...register('email')} className={`${style.form_control} ${style.form_input} ${errors.email ? 'is-invalid' : ''}`} placeholder="Nhập email của bạn" />
                        <div className="invalid-feedback">{errors.email?.message}</div>
                    </div>



                    <div className={style.popup_login_input}>
                        <input type="text" id="phone" {...register('phone')} className={`${style.form_control} ${style.form_input} ${errors.phone ? 'is-invalid' : ''}`} placeholder="Nhập số điện thoại của bạn" />

                        <div className="invalid-feedback">{errors.phone?.message}</div>
                    </div>

                    <div className={style.popup_login_input}>

                        <input type="text" id="fullName" {...register('fullName')} className={`${style.form_control} ${style.form_input} ${errors.fullName ? 'is-invalid' : ''}`} placeholder="Nhập tên đầy đủ của bạn" />
                        <div className="invalid-feedback">{errors.fullName?.message}</div>
                    </div>


                    <div className={style.popup_login_input}>
                        <input type="text" id="address" {...register('address')} className={`${style.form_control} ${style.form_input} ${errors.address ? 'is-invalid' : ''}`} placeholder="Nhập địa chỉ của bạn" />

                        <div className="invalid-feedback">{errors.address?.message}</div>
                    </div>


                    <div className={style.btn}>

                        <button type="submit" className={`${style.btn_yellow} ${style.buton} `} onClick={() => {
                            reset({
                                firstName: "bill"
                            }, {
                                keepErrors: true,
                                keepDirty: true,
                                keepIsSubmitted: false,
                                keepTouched: false,
                                keepIsValid: false,
                                keepSubmitCount: false,
                            });
                        }}>Đăng ký</button>
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
                        <a href="#" className={`${style.back_home} ${style.alink}`}>
                            <span className={style.span_text}>
                                <Link to='/' className={style.span_text}>Quay lại màn hình chính</Link>
                            </span>
                        </a>
                    </div>
                </div>
            </div>

        </form>
    )
}


export default CreateAccount