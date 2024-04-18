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
exports.DeleteVendedorController = void 0;
class DeleteVendedorController {
    constructor(deleteVendedorCaseUse) {
        this.deleteVendedorCaseUse = deleteVendedorCaseUse;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id_Vendedor = req.body.id_Vendedor;
                console.log(req.body);
                let vendedorEliminado = yield this.deleteVendedorCaseUse.run(id_Vendedor);
                if (vendedorEliminado) {
                    res.status(200).send({
                        message: "Vendedor eliminado exitosamente"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "success",
                        data: [],
                        message: "Error al eliminar vendedor en deleteVendedor.controller"
                    });
                }
            }
            catch (error) {
                console.log("Error en deleteVendedor.controller", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en el servidor"
                });
            }
        });
    }
}
exports.DeleteVendedorController = DeleteVendedorController;
