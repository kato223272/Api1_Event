import {EncryptServices} from '../../Aplicacion/Services/EncryptServices';
import bcrypt from 'bcrypt';

export class EncriptPass implements EncryptServices{
    encodePassword(pass: string): Promise <string>{
        const vecesEncriptado = 10;
        let passEncoded = bcrypt.hash(pass, vecesEncriptado);
        return passEncoded;
    }

    authpass(passEndcoded: string, hashingpass: string): Promise<boolean> {
        let resultado = bcrypt.compare(passEndcoded, hashingpass);
        return resultado;
    }
}