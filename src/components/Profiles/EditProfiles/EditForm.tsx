import React, {useEffect, useState} from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import UserAvatar from "./UserAvatar";
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup'
import axios from 'axios'
import {Button} from 'react-bootstrap'
import { useRecoilState } from "recoil";
import { accountState } from "../../../recoilProvider/userProvider";
import style from './EditForm.module.css'


interface UserProps {
    username: string,
    password: string,
    email: string,
    phone: string,
    fullName: string,
    age: string,
    avatar: string,
    address: string,
    id: string,
    cart: []
}
interface IFormInputs {
  fullName: string,
  phone:string,
  email:string,
  address:string,
  age:string
  avatar: string | any
}

const EditForm: React.FC= () => {
  
  const [user,setUser] = useRecoilState<UserProps>(accountState)
  const [avatar, setAvatar] = useState(user.avatar)


  const {id} = user

  const schema =  yup.object().shape({
    fullName : yup.string().required("this field is required"),
    phone : yup.string().required("this field is required").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'Phone number is not valid'),
    email : yup.string().email("this field must be Email").required("this field is required"),
    address :yup.string().required("this field is required"),
    age : yup.number().typeError("This field must be number").positive('this field must be possitive').integer('this field must be integer').required("this field is required"),
  })
  
  const {register,handleSubmit,formState: {errors},reset}  = useForm<IFormInputs>({
    defaultValues:{ fullName: '',
    phone:'',
    email:'',
    address:'',
    age:''},
    resolver: yupResolver(schema)
  })

  const submitForm = async (data:IFormInputs) => { 
    const newData  = {...user, ...data,avatar:avatar}
    await axios.put(`https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users/${id}`,newData)
    localStorage.setItem('account',JSON.stringify(newData))
    setUser(newData)
    alert('Cập nhật thành công')
    
   }
   useEffect(()=>{
      reset({...user})
   },[reset,user])

  return (
    <Form onSubmit={handleSubmit(submitForm)}>
      <Container>
      <UserAvatar avatar = {avatar} register = {register} setAvatar = {setAvatar} />
        <Row className={`justify-content-center mt-4`}>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Họ và tên</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập họ tên..."
               {...register("fullName")}
               className = {style.formInput}
              />
              <p className="text-danger mt-3">{errors.fullName?.message}</p>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Số điện thoại</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập SĐT..."
                {...register("phone")}
                className = {style.formInput}
              />
              <p  className="text-danger mt-3">{errors.phone?.message}</p>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Nhập Email..."
                {...register("email")}
                className = {style.formInput}
              />
              <p  className="text-danger mt-3">{errors.email?.message}</p>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicAddress">
              <Form.Label>Địa chỉ</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập địa chỉ..."
                {...register("address")}
                className = {style.formInput}
              />
              <p  className="text-danger mt-3">{errors.address?.message}</p>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicAge">
              <Form.Label>Tuổi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tuổi..."
                {...register("age")}
                className = {style.formInput}
              />
              <p  className="text-danger mt-3">{errors.age?.message}</p>
            </Form.Group>
          </Col>
        </Row>
      </Container>
      <Button variant='success' className={`mb-3`}  type= "submit" style = {{marginLeft:'50%',transform:'translateX(-50%)'}} >Lưu thay đổi</Button>
    </Form>
  );
};

export default EditForm;
