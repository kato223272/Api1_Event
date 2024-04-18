import { INotificacionServices } from "../../Aplicacion/Services/Notificacion";
import { Vendedor } from "../../Dominio/Vendedor";
import amqplib from "amqplib"

export class Notificacion implements INotificacionServices{
    provideChannel : amqplib.Channel | undefined;
    async iniciar(){
        try {
            const connection = await amqplib.connect("amqp://Kato:kato@34.231.168.155")
            this.provideChannel = await connection.createChannel();
            console.log("Acceso exitoso")
            return true;
        } catch (error) {
            console.log("Error en Helpers Notificacion", error)
            return false;
        }
    }
    EnviarNotificacion(VendedorCreado: Vendedor): boolean {
if (this.provideChannel === undefined) {
    return false;
}
const exchange = "colaKato"
console.log(JSON.stringify(VendedorCreado.id_Vendedor))

this.provideChannel.assertExchange(exchange, 'direct', {durable:true});
this.provideChannel.publish(exchange, 'kato', Buffer.from(JSON.stringify(VendedorCreado.id_Vendedor)));

console.log("Mensaje enviado correctamente")

return true;
    }

}