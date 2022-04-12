import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import style from './ReturnPaymentResult.module.css'
import axios from 'axios'
import { User, Cart, Orders, Order } from '../../checkout/models'
import OnlinePaymentSuccessPopup from '../popup/OnlinePaymentSuccessPopup'
import OnlinePaymentFailPopup from '../popup/OnlinePaymentFailPopup'

const ReturnPaymentResult = () => {
  let formData: any = JSON.parse(localStorage.getItem('OnlSuccessPaymentData') as any)
  const url_string = window.location.href;
  const urll = new URL(url_string);
  const value = urll.searchParams;

  const user: User = JSON.parse(localStorage.getItem("account") as any)
  const locStorageCart: Cart[] = JSON.parse(localStorage.getItem("cart") as any)
  const api = axios.create({
    baseURL: `https://6227fddb9fd6174ca81830f6.mockapi.io/tea-shop/users`
  })
  const ordersApi = axios.create({
    baseURL: `https://6243085ab6734894c15a1d8e.mockapi.io/tea-shop/orders`
  })
  const getUser = async () => {
    try {
      let userr = await api.get(`/${user.id}`)
        .then(({ data }) => data)
      localStorage.setItem('account', JSON.stringify(userr))
    }
    catch (err) {
      console.log(" Có lỗi khi lấy user/user không tồn tại: ", err)
    }
  }
  const updateOrder = async (value: Cart[]) => {
    let updateUser = await api
      .put(`/${user.id}`, { orders: value })
      .catch(err => console.log(err))
  }
  const updateCart = async (value: Cart[]) => {
    let updateCart = await api
      .put(`/${user.id}`, { cart: value })
      .catch(err => console.log(err))
  }
  const updateOrders = async (value: Orders) => {
    let updateOrders = await ordersApi
      .post(`/`, { ...value })
      .catch(err => console.log(err))
  }
  const [popupSuccessOrder, setPopupSuccessOrder] = useState<boolean>(false)
  const [popupFailOrder, setPopupFailOrder] = useState<boolean>(false)
  const today = new Date();
  const time = new Date();
  let hour = time.getHours() < 10 ? `0${time.getHours()}` : `${time.getHours()}`
  let minute = time.getMinutes() < 10 ? `0${time.getMinutes()}` : `${time.getMinutes()}`
  useEffect(() => {
    if (value.get('vnp_ResponseCode') === '00') {
      setPopupSuccessOrder(true)
      setPopupFailOrder(false)
      if (user.username !== "") {
        const a = [...user.orders, ...user.cart]
        const b = { ...user, orders: a }
        localStorage.setItem('account', JSON.stringify(b))
        updateOrder(
          a
        )
        let value1: any[] = [...user.cart]
        let value2: any[] = value1.map((value) => {
          return value = { name: value.name, size: value.size, ice: value.ice, sugar: value.sugar, quantitySelect: value.quantitySelect, price: value.price, total: Number(value.quantitySelect) * Number(value.price) + 18000, topping: value.topping }
        })
        const orderss: Orders = {
          username: user.username,
          phone: String(formData.phone) || String(user.phone),
          address: formData.location,
          orders: value2,
          paid: true,
          status: "1",
          fullName: formData.name || user.fullName,
          time: `${hour}:${minute}  ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
          id: ""
        }
        updateOrders(orderss)
        updateCart([])
        localStorage.setItem("cart", JSON.stringify([]));
        getUser()
      }
      else {
        let value1: any[] = [...locStorageCart]
        let value2: any[] = value1.map((value) => {
          return value = { name: value.name, size: value.size, ice: value.ice, sugar: value.sugar, quantitySelect: value.quantitySelect, price: value.price, total: Number(value.quantitySelect) * Number(value.price) + 18000, topping: value.topping }
        })
        const ordersnotlogin: Orders = {
          username: user.fullName || 'user is not register account',
          phone: String(formData.phone),
          address: formData.location,
          orders: value2,
          paid: true,
          status: "1",
          fullName: formData.name,
          time: `${hour}:${minute}  ${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`,
          id: ""
        }
        updateOrders(ordersnotlogin);
        localStorage.setItem("cart", JSON.stringify([]));
      }
    }
    else {
      setPopupSuccessOrder(false)
      setPopupFailOrder(true)
    }
  }, [value.get('vnp_ResponseCode')])
  return (
    <div className={style.container}>
      {popupSuccessOrder && <OnlinePaymentSuccessPopup setPopupSuccessOrder={(a: boolean) => { setPopupSuccessOrder(a) }} />}
      {popupFailOrder && <OnlinePaymentFailPopup setPopupFailOrder={(a: boolean) => { setPopupFailOrder(a) }} />}
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