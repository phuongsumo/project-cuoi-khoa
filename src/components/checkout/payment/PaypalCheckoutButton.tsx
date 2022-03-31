import { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { Cart } from '../models'
import { Link } from 'react-router-dom'
import style from './Paypal.module.css'

const PaypalCheckoutButton = (props: any) => {
    let { products, updateOrd} = props;
    const [paidFor, setPaidFor] = useState<boolean>(false)
    const [error, setError] = useState<string | null>(null)
    const handleApprove = (orderID: any) => {
        setPaidFor(true)
    }
    if (paidFor) {
        return (
            <div className={style.redirectOrderPage}>
                <div>Về trang đơn hàng để xem chi tiết !</div>
                <button>
                    <Link  to="/" onClick={() =>{}}>Go to my orders</Link>
                </button>
            </div>
        )
    }
    if (error) {
        alert(error)
    }
    return <PayPalButtons
        onClick={(data: any, actions: any) => {
            const hasAlreadyBoughtCourse = false;
            if (hasAlreadyBoughtCourse) {
                setError('you already this course, go to your acount')
                return actions.reject()
            }
            else
                return actions.resolve()
        }}
        createOrder={(data: any, actions: any) => {
            return (
                actions.order.create({
                    purchase_units:
                        products.cart.map((item: Cart) => {
                            return ({
                                reference_id: item.productId,
                                description: item.description,
                                amount: {
                                    value: Math.floor(item.price * item.quantity / 22000)
                                },
                            })
                        })
                })
            )
        }}
        onApprove={async (data: any, actions: any) => {
            const order = await actions.order.capture();
            products.orders = [...products.cart]
            products.orders.map((product: Cart) => {
                product.paid = true;
            })
            console.log("product order: ",products.orders);
            console.log("order: ", order);
            updateOrd(
                products.orders          
                )
            handleApprove(data.orderID);
        }}
        onCancel={() => {
            //doing st when user cance the purchase
        }}
        onError={(err: any) => {
            setError(err);
            console.error("paypal checkout error on : ", error)
        }}
    />
}

export default PaypalCheckoutButton