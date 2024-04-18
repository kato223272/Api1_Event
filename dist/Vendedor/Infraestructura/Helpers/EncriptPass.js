"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncriptPass = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
class EncriptPass {
    encodePassword(pass) {
        const vecesEncriptado = 10;
        let passEncoded = bcrypt_1.default.hash(pass, vecesEncriptado);
        return passEncoded;
    }
    authpass(passEndcoded, hashingpass) {
        let resultado = bcrypt_1.default.compare(passEndcoded, hashingpass);
        return resultado;
    }
}
exports.EncriptPass = EncriptPass;
