import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

const MyOrders = () => {
  
    const [myOrders, setMyOrders] = useState([])
    const {currency, axios, user} = useAppContext()

    const fetchMyOrders = async()=>{
      try{
        const {data} = await axios.get('/api/order/user')
        if(data.success){
          setMyOrders(data.orders)
        }

      } catch (error){
        console.log(error);
      }
    }

    useEffect(()=>{
      if(user){
        setTimeout(fetchMyOrders)
      }
      
    },[user])

  return (
    <div className="mt-16 pb-16">
      <div className="flex flex-col items-end w-max mb-8">
        <p className="text-2xl font-medium uppercase">My orders</p>
        <div className="w-16 h-0.5 bg-primary rounded-full"></div>
      </div>

      {myOrders.map((order, orderIndex) => (
        <div
          key={order._id || orderIndex}
          className="border border-gray-300 rounded-lg mb-10 p-4 py-5 max-w-4xl"
        >
          <p className="flex justify-between md:items-center text-gray-400 md:font-medium max-md:flex-col">
            <span>OrderId : {order._id}</span>
            <span>Payment : {order.paymentType}</span>
            <span>
              Total Amount : {currency}
              {order.amount}
            </span>
          </p>

          {order.items.map((item, itemIndex) => (
            <div
              key={item._id || itemIndex}
              className={`grid grid-cols-1 md:grid-cols-[1.7fr_1fr_auto] gap-4 md:gap-6 items-center py-4 text-gray-500/70 ${
                order.items.length !== itemIndex + 1 ? "border-b" : ""
              }`}
            >
              <div className="flex items-center">
                <div className="bg-primary/10 p-4 rounded-lg">
                  <img
                    src={item.product.image[0]}
                    alt={item.product.name}
                    className="w-16 h-16"
                  />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-medium text-gray-800">
                    {item.product.name}
                  </h2>
                  <p>Category: {item.product.category}</p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <p>Quantity: {item.quantity || 1}</p>
                <p>Status: {order.status}</p>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>

              <p className="text-primary text-xl font-medium md:text-right">
                Amount: {currency}
                {item.product.offerPrice * item.quantity}
              </p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default MyOrders;
