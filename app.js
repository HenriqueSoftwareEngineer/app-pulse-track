const express = require('express')
const app = express()

const userRoutes = requite('/routes/users')
const productsRouter = require('./routes/products')
const ordersRoutes = require('./routes/orders')

app.use('/users', userRoutes)
app.use('/products', productsRouter)
app.use('/orders', ordersRoutes)