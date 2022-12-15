import express from 'express';
import orderController from './controllers/order.controller';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';
import validateProduct from './middlewares/validateProduct';
import validateUser from './middlewares/validateUser';

const app = express();

app.use(express.json());
app.get('/products', productController.getAll);
app.post('/products', validateProduct, productController.create);
app.get('/orders', orderController.getAll);
app.post('/users', userController.create);
app.post('/login', validateUser, userController.login);

export default app;
