import React,{useState, useEffect} from 'react';
//import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {useSelector,useDispatch} from 'react-redux';
import {createPaymentIntent} from  '../functions/paytm';
//import { Link } from 'react-router-dom';
//import { Card } from 'antd';
//import { DollarOutlined, CheckOutLined, SwapOutlined } from '@ant-design/icons';
import Laptop from '../images/laptop.png';
import { createOrder, emptyUserCart } from '../functions/user';

export const StripeCheckout = ({history}) => {
    const dispatch=useDispatch();
    const {user, coupon} = useSelector((state) => ({ ...state}));

    const [succeeded,setSucceeded]=useState(false);
    const [error,setError]=useState(null);
    const [processing,setProcessing]=useState(true);
    const [disabled,setDisabled]=useState(true);
    const [clientSecret,setClientSecret]=useState("");

    const [cartTotal, setCartTotal ] = useState(0);
    const [totalAfterDiscount, setTotalAfterDiscount ] = useState(0);
    const [payble, setPayble ] = useState(0);

    //const stripe = useStripe();
    const elements = useElements();

    // useEffect(() => {
    //     createPaymentIntent(user.token, coupon).then((res) => {
    //         console.log("create payment intent", res.data);
    //         setClientSecret(res.data.clientSecret);
    //         setCartTotal(res.data.cartTotal);
    //         setTotalAfterDiscount(res.data.totalAfterDiscount);
    //         setPayble(res.data.payble);
    //     })
    // }, []);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     setProcessing(true);

    //     const payload = await StripeCheckout.confirmCardPayment(clientSecret, {
    //         payment_method: {
    //             card: elements.getElement(CardElement),
    //             billing_details: {
    //                 name: e.target.name.value,
    //             }
    //         }
    //     })

    // if (payload.error) {
    //     setError(`Payment failed ${payload.error.message}`);
    //     setProcessing(false);
    // }else {

           createOrder(payload, user.token)
           .then(res => {
               if(res.data.ok){
                   if(typeof window !== " undefined") localStorage.removeItem("cart");
                  
                   dispatch({
                       type: 'ADD_TO_CART',
                       payload: [],
                   })

                   dispatch({
                    type: 'COUPON_APPLIED',
                    payload: false,
                })

                emptyUserCart(user.token);
               }
           })
    //     console.log(JSON.stringify(payload, null, 4));
    //     setError(null);
    //     setProcessing(false);
    //     setSucceeded(true);
    // }
    // } 



    return (
        <div>
            
        </div>
    )
}
