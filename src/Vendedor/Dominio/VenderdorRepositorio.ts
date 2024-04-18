// import vendedor from "../Infraestructura/models/Vendedor.model";
import { Vendedor} from "./Vendedor";

export interface  VendedorRepositorio {
    addVendedor(id_Vendedor: number, nombre_vendedor: string, numeroTel_vendedor: number, user: String, password: string):Promise<Vendedor | null>;
    deleteVendedor(id_Vendedor: number): Promise<Vendedor | null>;
    getVendedor(id_Vendedor: number, nombre_vendedor: string, numeroTel_vendedor: number, user: String, password: string): Promise<Vendedor | null>;
}