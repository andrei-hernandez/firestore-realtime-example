'use client'
import styles from './page.module.css'
import React, { useState } from 'react'
import { get, ref } from '@firebase/database'
import { database } from '@/app/lib/fireabaseConfig'
import useSWR from 'swr'

export default function Home(): React.ReactNode {
  const [orders, setOrders] = useState<Partial<IOrder>[]>()

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data } = useSWR('orders', () => {
    const ordersRef = ref(database, 'orders')
    get(ordersRef).then(snapshot => {
      if(snapshot.exists()) {
        const ordersArray = Object.entries(snapshot.val()).map(([id, data]) =>  ({
          orderId: id,
          ...data as object
        } as unknown as IOrder))
        setOrders(ordersArray)
        return ordersArray
      } else {
        console.warn('This snapshot does not have data')
      }
    }).catch(error => {
      console.error(error)
    })
  }, { refreshInterval: 1000 })

  return (
    <main className={styles.main}>
      <h1>Fetch data from Realtime DB:</h1>
      {orders?.map((order: Partial<IOrder>, index: React.Key | null | undefined) =>
        <div key={index} className="order-card">
          <div className="order-details">
            <h3>Order Details</h3>
            <span>ID: {order.orderId}</span>
            <span>Status: {order.status}</span>
            <span>Total price: {order.totalPrice}</span>
            <span>User ID: {order.userId}</span>
          </div>
          <div className="order-items">
            <h3>Order Items</h3>
            {order?.items?.map((item: IOrderItems) =>
              <span key={item.productId}>
                Product ID: {item.productId} | Quantity: {item.quantity}
              </span>)}
          </div>
        </div>)}
    </main>
  )
}
