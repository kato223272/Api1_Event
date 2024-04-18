import { Request, Response } from "express";
import { DeleteVendedorCaseUse } from "../../Aplicacion/deleteVendedorCaseUse";

export class DeleteVendedorController{
    constructor(readonly deleteVendedorCaseUse:DeleteVendedorCaseUse){}
    async run(req:Request, res:Response){
        try {
            let id_Vendedor = req.body.id_Vendedor;
            console.log(req.body);

            let vendedorEliminado = await this.deleteVendedorCaseUse.run(id_Vendedor);

            if(vendedorEliminado){
                res.status(200).send({
                    message:"Vendedor eliminado exitosamente"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al eliminar vendedor en deleteVendedor.controller"
                })
            }
        } catch (error) {
            console.log("Error en deleteVendedor.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}