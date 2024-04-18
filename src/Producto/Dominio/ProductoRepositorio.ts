import { Producto} from "./Producto";

export interface  ProductoRepositorio { //estructura del metodo
    addProducto(id_Producto: number, nombre_Producto: string, precio_Producto: number):Promise<Producto | null>;
    deleteProducto(id_Producto: number): Promise<Producto | null>;
}