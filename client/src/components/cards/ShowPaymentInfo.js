import React from 'react';


const ShowPaymentInfo = ({order, showStatus= true}) => (
    <div>
        <p>
            <span>OrderId: {order.paymentIntent.id}</span>{" / "}
            <span>Ammount: {(order.paymentIntent.amount /= 100).toLocaleString('en-US', {
                style:'currency', currency: "INDIAN RUPEE"
            }  
            )}</span>{" / "}
            <span>Currency: {order.paymentintentCurrency.toUpperCase()}</span>{" / "}
            <span>Method: {order.paymentIntent.payment_method_types[0]}</span>{" / "}
            <span>Payment: {order.apymentintent.status.toUpperCase()}</span>{" /"}
            <span>Orderd On:{new Date(order.paymentintent.created* 1000).toLocaleString()}</span>{" / "}<br />
            {showStatus && (
                <span className="badge bg-primary text-white">Status: {order.orderStatus}</span>
            )}
        </p>
    </div>
)

export default ShowPaymentInfo;