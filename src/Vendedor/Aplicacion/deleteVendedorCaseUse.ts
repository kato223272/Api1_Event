import {Vendedor} from "../Dominio/Vendedor";
 import {VendedorRepositorio} from "../Dominio/VenderdorRepositorio";

export class DeleteVendedorCaseUse{
    constructor(readonly VendedorRepositorio:VendedorRepositorio){}
    async run(id_Vendedor:number):Promise<Vendedor | null>{
        try {
            const eliminarVendedor = await this.VendedorRepositorio.deleteVendedor(id_Vendedor);
            return eliminarVendedor;
        } catch (error) {
            console.log("Error en deleteVendedor.Case.Use", error);
            return null;
        }
    }
}