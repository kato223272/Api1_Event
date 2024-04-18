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
exports.AddVendedorController = void 0;
class AddVendedorController {
    constructor(addVendedorCaseUse) {
        this.addVendedorCaseUse = addVendedorCaseUse;
    }
    run(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let id_Vendedor = req.body.id_Vendedor;
                let nombre_vendedor = req.body.nombre_vendedor;
                let numeroTel_vendedor = req.body.numeroTel_vendedor;
                let user = req.body.user;
                let password = req.body.password;
                console.log(req.body);
                let vendedorCreado = yield this.addVendedorCaseUse.run(id_Vendedor, nombre_vendedor, numeroTel_vendedor, user, password);
                if (vendedorCreado) {
                    return res.status(200).send({
                        status: "sucess",
                        data: {
                            id_Vendedor: vendedorCreado.id_Vendedor,
                            nombre_vendedor: vendedorCreado.nombre_vendedor,
                            numeroTel_vendedor: vendedorCreado.numeroTel_vendedor,
                            user: vendedorCreado.user,
                            password: vendedorCreado.password
                        },
                        message: "Se ha guardado exitosamente el vendedor"
                    });
                }
                else {
                    return res.status(400).send({
                        status: "success",
                        data: [],
                        message: "Error agregar un vendedor en addVendedor.controller"
                    });
                }
            }
            catch (error) {
                console.log("Error en addVendedor.controller", error);
                res.status(500).send({
                    status: "error",
                    message: "Error en el servidor"
                });
            }
        });
    }
}
exports.AddVendedorController = AddVendedorController;
