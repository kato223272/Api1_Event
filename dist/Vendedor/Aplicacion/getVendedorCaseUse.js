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
exports.GetVendedorCaseUse = void 0;
class GetVendedorCaseUse {
    constructor(VendedorRepositorio) {
        this.VendedorRepositorio = VendedorRepositorio;
    }
    run(id_Vendedor, nombre_vendedor, numeroTel_vendedor, user, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getVendedor = yield this.VendedorRepositorio.getVendedor(id_Vendedor, nombre_vendedor, numeroTel_vendedor, user, password);
                return getVendedor;
            }
            catch (error) {
                console.log("Error en deleteVendedor.Case.Use", error);
                return null;
            }
        });
    }
}
exports.GetVendedorCaseUse = GetVendedorCaseUse;
