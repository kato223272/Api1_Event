"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SqlProductoRepositorio = void 0;
const Producto_1 = require("../Dominio/Producto");
const Producto_model_1 = __importDefault(require("./models/Producto.model"));
class SqlProductoRepositorio {
    addProducto(id_Producto, nombre_Producto, precio_Producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ProductoCreado = yield Producto_model_1.default.create({ id_Producto, nombre_Producto, precio_Producto });
                return new Producto_1.Producto(ProductoCreado.id_Producto, ProductoCreado.nombre_Producto, ProductoCreado.precio_Producto);
            }
            catch (error) {
                console.log("Error en sqlProducto.repositorio en add", error);
                return null;
            }
        });
    }
    deleteProducto(id_Producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ProductoEliminado = yield Producto_model_1.default.findOne({ where: { id_Producto: id_Producto } });
                if (ProductoEliminado) {
                    yield ProductoEliminado.destroy();
                    return new Producto_1.Producto(ProductoEliminado.id_Producto, ProductoEliminado.nombre_Producto, ProductoEliminado.precio_Producto);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.log("error en sqlProducto.repositorio en el delete");
                return null;
            }
        });
    }
}
exports.SqlProductoRepositorio = SqlProductoRepositorio;
