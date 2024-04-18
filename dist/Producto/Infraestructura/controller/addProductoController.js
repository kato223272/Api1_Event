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
exports.AddProductoController = void 0;
class AddProductoController {
    constructor(addProductoCaseUse) {
        this.addProductoCaseUse = addProductoCaseUse;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id_Producto = req.body.id_Producto;
                let nombre_Producto = req.body.nombre_Producto;
                let precio_Producto = req.body.precio_Producto;
                console.log(req.body);
                let ProductoCreado = yield this.addProductoCaseUse.run(id_Producto, nombre_Producto, precio_Producto);
                if (ProductoCreado) {
                    return res.status(200).send({
                        status: "sucess",
                        data: {
                            id_Producto: ProductoCreado.id_Producto,
                            nombre_Producto: ProductoCreado.nombre_Producto,
                            precio_Producto: ProductoCreado.precio_Producto
                        },
                        message: "Se ha gusradado exitosamente el Producto"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "success",
                        data: [],
                        message: "Error agregar un Producto en addProducto.controller"
                    });
                }
            }
            catch (error) {
                console.log("Error en addProducto.controller", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en el servidor"
                });
            }
        });
    }
}
exports.AddProductoController = AddProductoController;
