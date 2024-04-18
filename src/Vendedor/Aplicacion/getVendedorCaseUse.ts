// getVendedorController
import {Vendedor} from "../Dominio/Vendedor";
 import {VendedorRepositorio} from "../Dominio/VenderdorRepositorio";

export class GetVendedorCaseUse{
    constructor(readonly VendedorRepositorio:VendedorRepositorio){}
    async run(id_Vendedor: number, nombre_vendedor: string, numeroTel_vendedor: number, user: string, password: string ):Promise<Vendedor | null>{
        try {
            const getVendedor=await this.VendedorRepositorio.getVendedor(id_Vendedor, nombre_vendedor, numeroTel_vendedor, user, password)
            return getVendedor;
        } catch (error) {
            console.log("Error en deleteVendedor.Case.Use", error);
            return null;
        }
    }
}