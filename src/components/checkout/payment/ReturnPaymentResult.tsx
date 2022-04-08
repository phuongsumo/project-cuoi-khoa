import React from 'react'
import { Link } from 'react-router-dom'
import style from './ReturnPaymentResult.module.css'
const ReturnPaymentResult = () => {
    const url_string = window.location.href;
    const urll = new URL(url_string)
    const value = urll.searchParams
    return (
        <div>
            <table className={style.table}>
                <thead>
                    <tr>
                        <th className={`${style.header} ${style.column}`}>head1</th>
                        <th className={`${style.header} ${style.column}`}>head2</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className={`${style.column}`}>mã đơn hàng</td>
                        <td className={`${style.column}`}>{value.get('vnp_TxnRef')}</td>
                    </tr>
                    <tr>
                        <td className={`${style.column}`}>số tiền</td>
                        <td className={`${style.column}`}>{value.get('vnp_Amount')}</td>
                    </tr>
                    <tr>
                        <td className={`${style.column}`}>nội dung thanh toán</td>
                        <td className={`${style.column}`}>{value.get('vnp_OrderInfo')}</td>
                    </tr>
                    <tr>
                        <td className={`${style.column}`}>mã phản hồi</td>
                        <td className={`${style.column}`}>{value.get('vnp_ResponseCode')}</td>
                    </tr>
                    <tr>
                        <td className={`${style.column}`}>mã giao dịch tại vnpay</td>
                        <td className={`${style.column}`}>{value.get('vnp_TransactionNo')}</td>
                    </tr>
                    <tr>
                        <td className={`${style.column}`}>mã ngân hàng</td>
                        <td className={`${style.column}`}>{value.get('vnp_BankCode')}</td>
                    </tr>
                    <tr>
                        <td className={`${style.column}`}>thời gian thanh toán</td>
                        <td className={`${style.column}`}>{value.get('vnp_PayDate')}</td>
                    </tr>
                    <tr>
                        <td className={`${style.column}`}>trang thai</td>
                        {value.get('vnp_ResponseCode') === '00'
                            ? <td className={`${style.column}`} style={{ color: 'blue' }}>payment successful</td>
                            : <td className={`${style.column}`} style={{ color: 'red' }}>payment failed</td>
                        }
                    </tr>
                    <tr className={style.row}>
                        <td colSpan={2}>
                            <Link className={style.returnButton} to="/checkout">turn back your website</Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ReturnPaymentResult