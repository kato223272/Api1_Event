"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.ProductoRouter = express_1.default.Router();
exports.ProductoRouter.post('/agregarProducto', dependencies_1.addproductoController.run.bind(dependencies_1.addproductoController));
exports.ProductoRouter.delete('/eliminarProducto', dependencies_1.deleteproductoController.run.bind(dependencies_1.deleteproductoController));
