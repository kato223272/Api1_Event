import {Vendedor} from "../Dominio/Vendedor";
import {VendedorRepositorio} from "../Dominio/VenderdorRepositorio";
import { EncriptPass } from "../Infraestructura/Helpers/EncriptPass";
import { Notificacion } from "../Infraestructura/Helpers/Notificacion";

export class AddVendedorCaseUse{

   constructor(readonly vendedorRepositorio: VendedorRepositorio, readonly EncriptPass: EncriptPass, readonly notificacion:Notificacion){}

   async run(
    id_Vendedor: number, nombre_vendedor: string, numeroTel_vendedor: number, user: string, password: string
     ):Promise<Vendedor | null>{
     
    try {

        const EncriptPass = await this.EncriptPass.encodePassword(password);

           const addVendedor=await this.vendedorRepositorio.addVendedor(id_Vendedor, nombre_vendedor, numeroTel_vendedor, user, EncriptPass);
           if(addVendedor)
            this.notificacion.EnviarNotificacion(addVendedor);
            return addVendedor
           
       } catch (error) {
           console.log("error en addVendedorCaseUse");
           return null;
       }
   }
   
} 