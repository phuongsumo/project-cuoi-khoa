import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './ReturnPaymentResult.module.css'
import axios from 'axios'
import { User, Cart, Orders, Order } from '../../checkout/models'
import OnlinePaymentSuccessPopup from '../popup/OnlinePaymentSuccessPopup'
import OnlinePaymentFailPopup from '../popup/OnlinePaymentFailPopup'
const ReturnPaymentResult = () => {
  let formData:any =JSON.parse(localStorage.getItem('OnlSuccessPaymentData')as any)
  console.log(formData)
  const url_string = window.location.href;
  const urll = new URL(url_string);
  const value = urll.searchParams;

  const [user, setUser] = useState<User>(
    {
      "username": "",
      "password": "",
      "email": "",
      "phone": "",
      "fullName": "",
      "age": 0,
      "avatar": "",
      "address": "",
      "cart": [
      ],
      "orders": [

      ],
      "id": ""
    }
  );
  const [locStorageCart, setLocStorageCart] = useState<Cart[]>(
    [
      {
        name: "tra sua tran chau den",
        size: true,
        ice: true,
        sugar: true,
        amount: 3,
        price: "23000",
        total: 69000,
        topping: ["1", "2", "3"],
        productImg: "http://placeimg.com/640/480/people"
      }
    ]
  )
  const api = axios.create({
    baseURL: `https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users`
  })
  const ordersApi = axios.create({
    baseURL: `https://6243085ab6734894c15a1d8e.mockapi.io/tea-shop/orders`
  })
  const getUser = async () => {
    try {
      let user = await api.get('/50')
        // sau se thay 49 thanh user.id
        .then(({ data }) => data)
      setUser({ ...user })
    }
    catch (err) {
      console.log(" error when get user data: ", err)
    }
  }
  const updateOrder = async (value: Cart[]) => {
    let updateUser = await api
      .put(`/50`, { orders: value })
      .catch(err => console.log(err))
  }
  const updateCart = async (value: Cart[]) => {
    let updateCart = await api
      .put(`/50`, { cart: value })
      .catch(err => console.log(err))
  }
  const updateOrders = async (value: Orders) => {
    let updateOrders = await ordersApi
      .post(`/`, { ...value })
      .catch(err => console.log(err))
  }
  const [popupSuccessOrder, setPopupSuccessOrder] = useState<boolean>(false)
  const [popupFailOrder, setPopupFailOrder] = useState<boolean>(false)
  const today= new Date();
  useEffect(() => {
    getUser()
  }, [])
  useEffect(() => {
    if (value.get('vnp_ResponseCode') === '00') {
      setPopupSuccessOrder(true)
      setPopupFailOrder(false)
      if (user.username!=="") {
          user.orders = [...user.orders, ...user.cart];
          updateOrder(user.orders)
          updateCart(
            [
              {
                name: "tra sua tran chau den",
                size: true,
                ice: true,
                sugar: true,
                amount: 3,
                price: "23000",
                total: 69000,
                topping: ["1", "2", "3"],
                productImg: "http://placeimg.com/640/480/people"
              }
            ]
          )
          let value1: any[] = [...user.cart]
          let value2: any[] = value1.map((value) => {
            return value = { name: value.name, size: value.size, ice: value.ice, sugar: value.sugar, amount: value.amount, price: value.price, total: value.amount * value.price+18000, topping: value.topping }
          })
          const orders: Orders = {
            username: user.fullName || 'user is not register account',
            phone: user.phone === "" ? formData.phone : user.phone,
            address: formData.location,
            orders: value2,
            paid: true,
            status: "1",
            fullName: user.fullName === "" ? formData.name : user.fullName,
            time: `${today.getHours()}:${today.getMinutes()}  ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
            id: ""
          }
          updateOrders(orders)
        }
      else {
        let value1: any[] = [...locStorageCart]
        let value2: any[] = value1.map((value) => {
          return value = { name: value.name, size: value.size, ice: value.ice, sugar: value.sugar, amount: value.amount, price: value.price, total: value.amount * value.price+18000, topping: value.topping }
        })
        const ordersnotlogin: Orders = {
          username: user.fullName || 'user is not register account',
          phone:formData.phone,
          address: formData.location,
          orders: value2,
          paid: true,
          status: "1",
          fullName: formData.name,
          time: `${today.getHours()}:${today.getMinutes()}  ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
          id: ""
        }
        updateOrders(ordersnotlogin);
        setLocStorageCart([])
      }
      getUser()
    }
    else {
      setPopupSuccessOrder(false)
      setPopupFailOrder(true)
      console.log('fail')
    }
  }, [value.get('vnp_ResponseCode')])
  return (
    <div className={style.container}>
      {popupSuccessOrder && <OnlinePaymentSuccessPopup setPopupSuccessOrder={(a:boolean) =>{setPopupSuccessOrder(a)}}/>}
      {popupFailOrder && <OnlinePaymentFailPopup setPopupFailOrder={(a:boolean) =>{setPopupFailOrder(a)}}/>}
      <table className={style.table}>
        <thead>
          <tr>
            <th colSpan={2} className={`${style.header} ${style.column}`}>VnPay response{value.get('phone')}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={`${style.column}`}>Mã đơn hàng</td>
            <td className={`${style.column}`}>{value.get('vnp_TxnRef')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Số tiền</td>
            <td className={`${style.column}`}>{Number(value.get('vnp_Amount')) / 100}  vnd</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Nội dung thanh toán</td>
            <td className={`${style.column}`}>{value.get('vnp_OrderInfo')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Mã phản hồi</td>
            <td className={`${style.column}`}>{value.get('vnp_ResponseCode')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Mã giao dịch tại vnpay</td>
            <td className={`${style.column}`}>{value.get('vnp_TransactionNo')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Mã ngân hàng</td>
            <td className={`${style.column}`}>{value.get('vnp_BankCode')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Thời gian thanh toán</td>
            <td className={`${style.column}`}>{value.get('vnp_PayDate')}</td>
          </tr>
          <tr>
            <td className={`${style.column}`}>Trạng thái</td>
            {value.get('vnp_ResponseCode') === '00'
              ? <td className={`${style.column}`} style={{ color: 'blue' }}>Thanh toán thành công</td>
              : <td className={`${style.column}`} style={{ color: 'red' }}>Thanh toán thất bại</td>
            }
          </tr>
        </tbody>
      </table>
      <div className={style.buttons}>
        <Link className={style.returnButton} to="/product">Quay lại trang sản phẩm</Link>
        <Link className={style.returnButton} to="/">Trở về trang chủ</Link>
      </div>
    </div>
  )
}

export default ReturnPaymentResult