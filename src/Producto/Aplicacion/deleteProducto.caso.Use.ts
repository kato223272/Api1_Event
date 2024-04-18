import {Producto} from "../Dominio/Producto";
 import {ProductoRepositorio} from "../Dominio/ProductoRepositorio";

export class DeleteProductoCaseUse{
    constructor(readonly ProductoRepositorio:ProductoRepositorio){}
    async run(id_Producto:number):Promise<Producto | null>{
        try {
            const eliminarProducto = await this.ProductoRepositorio.deleteProducto(id_Producto);
            return eliminarProducto;
        } catch (error) {
            console.log("Error en deleteProducto.Case.Use", error);
            return null;
        }
    }
}