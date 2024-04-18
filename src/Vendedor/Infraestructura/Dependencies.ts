import { SqlVendedorRepositorio } from "./sqlVendedorRepositorio";
import { AddVendedorCaseUse } from "../Aplicacion/AddVendedorCaseUse";
import { AddVendedorController } from "./controller/addVendedorController";

import { DeleteVendedorCaseUse } from "../Aplicacion/deleteVendedorCaseUse";
import { DeleteVendedorController } from "./controller/deleteVendedorController";

import {GetVendedorCaseUse} from "../Aplicacion/getVendedorCaseUse";
import {GetVendedorController} from "./controller/getVendedorController";

import { Notificacion } from "./Helpers/Notificacion";
import {EncriptPass} from "../Infraestructura/Helpers/EncriptPass";

export const sqlVendedorRepositorio = new SqlVendedorRepositorio();
export const notificacion = new Notificacion();
export const encriptPass = new EncriptPass();

export const addVendedorCasoUso = new AddVendedorCaseUse(sqlVendedorRepositorio, encriptPass, notificacion);
export const addVendedorController = new AddVendedorController(addVendedorCasoUso);

export const deleteVendedorCasoUso = new DeleteVendedorCaseUse(sqlVendedorRepositorio);
export const deleteVendedorController = new DeleteVendedorController(deleteVendedorCasoUso);

export const getVendedorCasoUso = new GetVendedorCaseUse(sqlVendedorRepositorio);
export const getVendedorController = new GetVendedorController(getVendedorCasoUso);

notificacion.iniciar();