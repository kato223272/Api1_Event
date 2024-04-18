"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vendedorRouter = void 0;
const express_1 = __importDefault(require("express"));
const Dependencies_1 = require("./Dependencies");
exports.vendedorRouter = express_1.default.Router();
exports.vendedorRouter.post('/agregarVendedor', Dependencies_1.addVendedorController.run.bind(Dependencies_1.addVendedorController));
exports.vendedorRouter.delete('/eliminarVendedor', Dependencies_1.deleteVendedorController.run.bind(Dependencies_1.deleteVendedorController));
exports.vendedorRouter.get('/obtenerVendedor', Dependencies_1.getVendedorController.run.bind(Dependencies_1.getVendedorController));
