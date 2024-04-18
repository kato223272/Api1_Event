export interface EncryptServices{
encodePassword(password:string):Promise<String>,
authpass(passEndcoded: string, hashingpass: string): Promise <boolean>

}