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
exports.SqlVendedorRepositorio = void 0;
const Vendedor_1 = require("../Dominio/Vendedor");
const Vendedor_model_1 = __importDefault(require("./models/Vendedor.model"));
class SqlVendedorRepositorio {
    addVendedor(id_Vendedor, nombre_vendedor, numeroTel_vendedor, user, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const VendedorCreado = yield Vendedor_model_1.default.create({ id_Vendedor, nombre_vendedor, numeroTel_vendedor, user, password });
                return new Vendedor_1.Vendedor(VendedorCreado.id_Vendedor, VendedorCreado.nombre_vendedor, VendedorCreado.numeroTel_vendedor, VendedorCreado.user, VendedorCreado.password);
            }
            catch (error) {
                console.log("Error en sqlVendedor.repositorio", error);
                return null;
            }
        });
    }
    deleteVendedor(id_Vendedor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const VendedorEliminado = yield Vendedor_model_1.default.findOne({ where: { id_Vendedor: id_Vendedor } });
                if (VendedorEliminado) {
                    yield VendedorEliminado.destroy();
                    return new Vendedor_1.Vendedor(VendedorEliminado.id, VendedorEliminado.nombre_vendedor, VendedorEliminado.numeroTel_vendedor, VendedorEliminado.user, VendedorEliminado.password);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.log("Error en sqlVendedor.repositorio en DeleteVendedor", error);
                return null;
            }
        });
    }
    getVendedor(id_Vendedor) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const VendedorObtenido = yield Vendedor_model_1.default.findOne({ where: { id_Vendedor: id_Vendedor } });
                if (VendedorObtenido) {
                    yield VendedorObtenido.$get;
                    return new Vendedor_1.Vendedor(VendedorObtenido.id, VendedorObtenido.nombre_vendedor, VendedorObtenido.numeroTel_vendedor, VendedorObtenido.user, VendedorObtenido.password);
                }
                else {
                    return null;
                }
            }
            catch (error) {
                console.log("Error en sqlVendedor.repositorio en DeleteVendedor", error);
                return null;
            }
        });
    }
}
exports.SqlVendedorRepositorio = SqlVendedorRepositorio;
