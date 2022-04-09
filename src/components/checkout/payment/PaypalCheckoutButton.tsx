import { useState } from 'react'
import { PayPalButtons } from '@paypal/react-paypal-js'
import { Cart, Order } from '../models'
import { Link } from 'react-router-dom'
import style from './Paypal.module.css'

const PaypalCheckoutButton = (props: any) => {
    let { products, updateOrd, updateCart, updateOrders, ConvertCartToOrders} = props;
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
                                reference_id: products.cart.indexOf(item),
                                description: item.name,
                                amount: {
                                    value: Math.floor(Number(item.price) * item.amount / 22000)
                                },
                            })
                        })
                })
            )
        }}
        onApprove={async (data: any, actions: any) => {
            const order = await actions.order.capture();
            products.orders = [...products.orders, ...products.cart]
            console.log("product order: ",products.orders);
            console.log("order: ", order);
            updateOrd(products.orders)
            const orders= ConvertCartToOrders(products.cart)
            orders.paid=true
            updateOrders(orders)
            updateCart([])
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