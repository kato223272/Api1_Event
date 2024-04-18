import ampqblib from 'amqplib';
import { Vendedor} from '../../Dominio/Vendedor';

export interface INotificacionServices{
    provideChannel : ampqblib.Channel | undefined;

    iniciar (): Promise<boolean>;
    EnviarNotificacion(VendedorCreado:Vendedor):boolean;


}