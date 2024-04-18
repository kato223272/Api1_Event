import express from 'express';
import { addproductoController,deleteproductoController } from './dependencies';


export const ProductoRouter = express.Router();

ProductoRouter.post('/agregarProducto', addproductoController.run.bind(addproductoController));
ProductoRouter.delete('/eliminarProducto', deleteproductoController.run.bind(deleteproductoController));


