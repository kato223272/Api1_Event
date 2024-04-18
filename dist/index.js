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
const express_1 = __importDefault(require("express"));
const signale_1 = require("signale");
const VendedorRoutes_1 = require("./Vendedor/Infraestructura/VendedorRoutes");
const Producto_routes_1 = require("./Producto/Infraestructura/Producto.routes");
const Base_1 = require("./Conexion/Base");
const cors_1 = __importDefault(require("cors"));
const options = {
    secrets: ["([0-9]{4}-?)+"]
};
let example = (0, express_1.default)();
example.disable("x-powered-by");
const logger = new signale_1.Signale(options);
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use('/Vendedor', VendedorRoutes_1.vendedorRouter);
app.use('/Producto', Producto_routes_1.ProductoRouter);
function iniciarServidor() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, Base_1.InicializarBaseDatos)();
            app.listen(3000, () => {
                logger.success("Servidor corriendo en el puerto 3000");
            });
        }
        catch (error) {
            logger.error("Error al iniciar el servidor", error);
        }
    });
}
iniciarServidor();
