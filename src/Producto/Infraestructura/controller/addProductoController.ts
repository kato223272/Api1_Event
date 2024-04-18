import { Request, Response } from "express";
import {AddProductoCaseUse} from "../../Aplicacion/addProducto.Caso.Use"

export class AddProductoController{
    constructor(readonly addProductoCaseUse: AddProductoCaseUse){}
    async run(req:Request, res:Response){
        try {

            let id_Producto = req.body.id_Producto;
            let nombre_Producto = req.body.nombre_Producto;
            let precio_Producto = req.body.precio_Producto;
            console.log(req.body)

            let ProductoCreado = await this.addProductoCaseUse.run(id_Producto, nombre_Producto, precio_Producto);
       
       if (ProductoCreado) {
        return res.status(200).send({
            status:"sucess",
            data:{
                id_Producto: ProductoCreado.id_Producto,
                nombre_Producto: ProductoCreado.nombre_Producto,
                precio_Producto: ProductoCreado.precio_Producto
            },
            message: "Se ha gusradado exitosamente el Producto"
        })
        
       }else{
        return res.status(400).send({
            status:"success",
            data:[],
            message:"Error agregar un Producto en addProducto.controller"
        })
    }
} catch(error){
            console.log("Error en addProducto.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}