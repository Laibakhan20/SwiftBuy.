const OrderSchema = {
    name: 'order',
    title: 'Order',
    type: 'document',
    fields: [
      {
        name: 'orderNumber',
        title: 'Order Number',
        type: 'string',
      },
      {
        name: 'user',
        title: 'User',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      {
        name: 'products',
        title: 'Products',
        type: 'array',
        of: [{ type: 'reference', to: [{ type: 'product' }] }],
      },
      {
        name: 'total',
        title: 'Total Price',
        type: 'number',
      },
      {
        name: 'status',
        title: 'Order Status',
        type: 'string',
        options: {
          list: ['pending', 'shipped', 'delivered', 'cancelled'],
        },
      },
      {
        name: 'transactionId',
        title: 'Transaction ID',
        type: 'string',
      },
      {
        name: 'paymentStatus',
        title: 'Payment Status',
        type: 'string',
        options: {
          list: ['pending', 'paid', 'failed'],
        },
      },
      {
        name: 'shippingAddress',
        title: 'Shipping Address',
        type: 'string',
      },
      {
        name: 'createdAt',
        title: 'Created At',
        type: 'datetime',
      },
    ],
  };


  export default OrderSchema
  