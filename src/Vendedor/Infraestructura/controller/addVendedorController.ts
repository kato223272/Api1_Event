import { Request, Response } from "express";
import {AddVendedorCaseUse} from "../../Aplicacion/AddVendedorCaseUse"

export class AddVendedorController{
    constructor(readonly addVendedorCaseUse: AddVendedorCaseUse){}
    async run(req:Request, res:Response){
        try {

            let id_Vendedor = req.body.id_Vendedor;
            let nombre_vendedor = req.body.nombre_vendedor;
            let numeroTel_vendedor = req.body.numeroTel_vendedor;
            let user = req.body.user;
            let password = req.body.password;
            console.log(req.body)

            let vendedorCreado = await this.addVendedorCaseUse.run(id_Vendedor, nombre_vendedor, numeroTel_vendedor, user, password);
       
       if (vendedorCreado) {
        return res.status(200).send({
            status:"sucess",
            data:{
                id_Vendedor: vendedorCreado.id_Vendedor,
                nombre_vendedor: vendedorCreado.nombre_vendedor,
                numeroTel_vendedor: vendedorCreado.numeroTel_vendedor,
                user: vendedorCreado.user,
                password: vendedorCreado.password
            },
            message: "Se ha guardado exitosamente el vendedor"
        })
        
       }else{
        return res.status(400).send({
            status:"success",
            data:[],
            message:"Error agregar un vendedor en addVendedor.controller"
        })
    }
} catch(error){
            console.log("Error en addVendedor.controller",error);
            res.status(500).send({
                status:"error",
                message:"Error en el servidor"
            })
        }
    }
}