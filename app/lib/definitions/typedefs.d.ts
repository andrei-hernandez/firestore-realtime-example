interface IOrder {
  orderId: number
  status: string
  totalPrice: number
  userId: number
  items: Array<IOrderItems>
}

interface IOrderItems {
  productId: number
  quantity: number
}
