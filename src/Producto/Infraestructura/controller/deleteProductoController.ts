import { Request, Response } from "express";
import { DeleteProductoCaseUse } from "../../Aplicacion/deleteProducto.caso.Use";

export class DeleteProductoController{
    constructor(readonly deleteProductoCaseUse:DeleteProductoCaseUse){}
    async run(req:Request, res:Response){
        try {
            let id_Producto = req.body.id_Producto;
            console.log(req.body);

            let ProductoEliminado = await this.deleteProductoCaseUse.run(id_Producto);

            if(ProductoEliminado){
                res.status(200).send({
                    message:"Producto eliminado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al eliminar Producto en deleteProducto.controller"
                })
            }
        } catch (error) {
            console.log("Error en deleteProducto.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}