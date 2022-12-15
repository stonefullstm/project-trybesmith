import express from 'express';
import orderController from './controllers/order.controller';
import productController from './controllers/product.controller';
import userController from './controllers/user.controller';
import validateLogin from './middlewares/validateLogin';
import validateOrder from './middlewares/validateOrder';
import validateProduct from './middlewares/validateProduct';
import validateToken from './middlewares/validateToken';
import validateUser from './middlewares/validateUser';

const app = express();

app.use(express.json());
app.get('/products', productController.getAll);
app.post('/products', validateProduct, productController.create);
app.get('/orders', orderController.getAll);
app.post('/users', validateUser, userController.create);
app.post('/login', validateLogin, userController.login);
app.post('/orders', validateToken, validateOrder, orderController.create);

export default app;
