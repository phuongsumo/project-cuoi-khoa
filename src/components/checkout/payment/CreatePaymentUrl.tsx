import React from 'react'
import axios from 'axios'
import VnPay from './VnPay.json'
import style from './CreatePaymentUrl.module.css'
import { useState, useEffect } from 'react'
import CryptoJS from 'crypto-js'
const CreatePaymentUrl = () => {
  const [myIps, setMyIps] = useState<string>('')
  var time = new Date()
  useEffect(() => {
    fetch('https://api.ipify.org/?format=json')
      .then(res => res.json())
      .then(res => setMyIps(res.ip))
  }, [])
  var ipAddr = '27.67.73.185';
  var tmnCode = VnPay.vnp_TmnCode
  var returnUrl = VnPay.vnp_ReturnUrl
  // var returnUrl = VnPay.vnp_ReturnUrl
  var month;
  if (time.getMonth() + 1 < 10) {
    month = `0${time.getMonth() + 1}`
  }
  else {
    month = `${time.getDate()}`
  }
  var date;
  if (time.getDate() < 10) {
    date = `0${time.getDate()}`
  } else {
    date = `${time.getDate()}`
  }
  var hour;
  if (time.getHours() < 10) {
    hour = `0${time.getHours()}`
  } else {
    hour = `${time.getHours()}`
  }
  var minute;
  if (time.getMinutes() < 10) {
    minute = `0${time.getMinutes()}`
  } else {
    minute = `${time.getMinutes()}`
  }
  var second;
  if (time.getSeconds() < 10) {
    second = `0${time.getSeconds()}`
  } else {
    second = `${time.getSeconds()}`
  }
  var createDate = Number(`${time.getFullYear()}${month}${date}${hour}${minute}${second}`);
  var amount = 50000;
  var currCode = 'VND';
  // trim cách chuyển thành chuỗi
  var orderInfo = 'thanh'
  var orderType = 'other'
  var locale = "vn";
  var txnRef=6;
  // let i:number;
  // useEffect(() => {
  //   i=1
  //   txnRef = 1;
  //   if (txnRef === i) {
  //     txnRef++;
  //     i++;
  //   }
  // }, [])
  // setInterval(() => {
  //   i = 1;
  // }, 30 * 3600)
  
  const sortObj = (obj: any) => {
    return Object.keys(obj).sort().reduce((result: any, key: any) => {
      result[key] = obj[key];
      return result;
    }, {});
  }
  const paramss: any = {
    vnp_Amount: amount*100,
    vnp_Command: 'pay',
    vnp_CreateDate: createDate,
    vnp_CurrCode: currCode,
    vnp_IpAddr: ipAddr,
    vnp_Locale: locale,
    vnp_OrderInfo: orderInfo,
    vnp_OrderType: orderType,
    vnp_ReturnUrl: returnUrl,
    vnp_TmnCode: tmnCode,
    vnp_TxnRef: txnRef,
    vnp_Version: '2.1.0',
  }
  let sortedParams = sortObj(paramss);
  console.log("params:", sortedParams)
  let contentUrl = ``
  let j=0;
  Object.keys(sortedParams).forEach((key) => {
    if(j===1){
      contentUrl += `&${encodeURIComponent(key)}=${encodeURIComponent(sortedParams[key])}`
    }else {
      contentUrl += `${encodeURIComponent(key)}=${encodeURIComponent(sortedParams[key])}`
      j=1;
    }
  });
  let secureKey = CryptoJS.HmacSHA512(contentUrl,VnPay.vnp_HashSecret).toString(CryptoJS.enc.Hex)

  const url = `?${contentUrl}&vnp_SecureHash=${secureKey}`
  return (
    <div className={style.container}>
      <input style={{ width: '500px', overflow: 'scroll' }} value={`https://sandbox.vnpayment.vn/paymentv2/vpcpay.html${url}`} />
      <a href={`${VnPay.vnp_Url}${url}`} >Thanh toán Post</a>
      {/* <form action="https://sandbox.vnpayment.vn/paymentv2/vpcpay.html" method='get'>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_Amount} type="text" name="amount" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_Command} type="text" name="command" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={String(paramss.vnp_CreateDate)} type="text" name="createDate" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_CurrCode} type="text" name="currenCode" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_IpAddr} type="text" name="ipAddr" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_Locale} type="text" name="locale" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_OrderInfo} type="text" name="orderInfo" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_OrderType} type="text" name="orderType" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_ReturnUrl} type="text" name="returnUrl" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_TmnCode} type="text" name="tmncode" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={String(paramss.vnp_TxnRef)} type="text" name="txnRef" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_Version} type="text" name="version" />
        </label>
        <label htmlFor="" className={style.containerRadio}>
          <input defaultValue={paramss.vnp_SecureHash} type="text" name="version" />
        </label>
        <button type="submit"> thanh toan</button>
      </form> */}
      {/* <form id="frmCreateOrder" action="https://sandbox.vnpayment.vn/button/websrc.html" method="POST" target="_top">
        <input defaultValue={paramss.} type="hidden" name="cmd" value="pay" />
        <input defaultValue={paramss.} type="hidden" name="hosted_button_id" value="ZQdforZdTD" />
        <input defaultValue={paramss.} type="hidden" name="hosted_button_token" value="9399b29644f3d59a8188ed6f69440ce614568ff52d2d1ab762682f841ad2e5d6" />
        <img alt="VNPAY - Thanh toan online" className="btnPopup" src="https://sandbox.vnpayment.vn/button/Images/paynow-1.png" />
      </form>
      <script src="https://merchant.vnpay.vn/Scripts/jquery-3.5.1.min.js">
      </script><link href="https://merchant.vnpay.vn/Scripts/lib/vnpayframe.css" rel="stylesheet" />
      <script src="https://merchant.vnpay.vn/Scripts/lib/vnpayframe.js"></script>
      <script src="https://merchant.vnpay.vn/Scripts/lib/openbutton.js"></script>*/}
    </div>
  )
}

export default CreatePaymentUrl