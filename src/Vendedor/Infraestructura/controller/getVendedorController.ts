import { Request, Response } from "express";
import { GetVendedorCaseUse } from "../../Aplicacion/getVendedorCaseUse";

export class GetVendedorController{
    constructor(readonly getVendedorCaseUse:GetVendedorCaseUse){}
    async run(req:Request, res:Response){
        try {
            let id_Vendedor = req.body.id_Vendedor;
            let nombre_vendedor = req.body.nombre_vendedor;
            let numeroTel_vendedor = req.body.numeroTel_vendedor;
            let user = req.body.user;
            let password = req.body.password;

            console.log(req.body);

            let VendedorObtenido = await this.getVendedorCaseUse.run(id_Vendedor, nombre_vendedor, numeroTel_vendedor, user, password);

            if(VendedorObtenido){
                return res.status(200).send({
                    status:"sucess",
                    data:{
                        id_Vendedor: VendedorObtenido.id_Vendedor,
                        nombre_vendedor: VendedorObtenido.nombre_vendedor,
                        numeroTel_vendedor: VendedorObtenido.numeroTel_vendedor,
                        username: VendedorObtenido.user,
                        password: VendedorObtenido.password
                    },
                    message: "Se ha obtenido exitosamente el vendedor"
                })
            }else{
                return res.status(400).send({
                    status:"success",
                    data:[],
                    message:"Error al Obtener vendedor en getVendedor.controller"
                })
            }
        } catch (error) {
            console.log("Error en getVendedor.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}