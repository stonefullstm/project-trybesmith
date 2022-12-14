import express from 'express';
import orderController from './controllers/order.controller';
import productController from './controllers/product.controller';

const app = express();

app.use(express.json());
app.get('/products', productController.getAll);
app.get('/orders', orderController.getAll);

export default app;
