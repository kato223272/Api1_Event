import {Producto} from "../Dominio/Producto";
import {ProductoRepositorio} from "../Dominio/ProductoRepositorio";

export class AddProductoCaseUse{

   constructor(readonly ProductoRepositorio: ProductoRepositorio){}

   async run(id_Producto: number, nombre_Producto: string, precio_Producto: number ):Promise<Producto | null>{
       try {
           const addProducto=await this.ProductoRepositorio.addProducto(id_Producto, nombre_Producto, precio_Producto)
           return addProducto
           
       } catch (error) {
           console.log("error en addProductoCaseUse");
           return null;
       }
   }
   
} 