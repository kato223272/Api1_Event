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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductoCaseUse = void 0;
class DeleteProductoCaseUse {
    constructor(ProductoRepositorio) {
        this.ProductoRepositorio = ProductoRepositorio;
    }
    run(id_Producto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const eliminarProducto = yield this.ProductoRepositorio.deleteProducto(id_Producto);
                return eliminarProducto;
            }
            catch (error) {
                console.log("Error en deleteProducto.Case.Use", error);
                return null;
            }
        });
    }
}
exports.DeleteProductoCaseUse = DeleteProductoCaseUse;
