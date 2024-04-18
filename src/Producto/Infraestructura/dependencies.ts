import { SqlProductoRepositorio } from "./SqlProductoRepositorio";
import { AddProductoCaseUse } from "../Aplicacion/addProducto.Caso.Use";
import { AddProductoController } from "./controller/addProductoController";                 

import { DeleteProductoCaseUse } from "../Aplicacion/deleteProducto.caso.Use";
import { DeleteProductoController } from "./controller/deleteProductoController";

export const sqlProductoRepositorio = new SqlProductoRepositorio();

export const addproductoCasoUso=new AddProductoCaseUse(sqlProductoRepositorio);
export const addproductoController = new AddProductoController(addproductoCasoUso);

export const deleteproductoCasoUso = new DeleteProductoCaseUse(sqlProductoRepositorio);
export const deleteproductoController = new DeleteProductoController(deleteproductoCasoUso);