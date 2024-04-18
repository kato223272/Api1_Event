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
exports.Notificacion = void 0;
const amqplib_1 = __importDefault(require("amqplib"));
class Notificacion {
    iniciar() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const connection = yield amqplib_1.default.connect("amqp://Kato:kato@34.231.168.155");
                this.provideChannel = yield connection.createChannel();
                console.log("Acceso exitoso");
                return true;
            }
            catch (error) {
                console.log("Error en Helpers Notificacion", error);
                return false;
            }
        });
    }
    EnviarNotificacion(VendedorCreado) {
        if (this.provideChannel === undefined) {
            return false;
        }
        const exchange = "colaKato";
        console.log(JSON.stringify(VendedorCreado.id_Vendedor));
        this.provideChannel.assertExchange(exchange, 'direct', { durable: true });
        this.provideChannel.publish(exchange, 'kato', Buffer.from(JSON.stringify(VendedorCreado.id_Vendedor)));
        console.log("Mensaje enviado correctamente");
        return true;
    }
}
exports.Notificacion = Notificacion;
