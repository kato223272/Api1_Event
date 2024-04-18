import { Table, Column, DataType, Model} from "sequelize-typescript";

@Table({
    tableName:"Vendedores",
    timestamps:false
})

class vendedor extends Model{

@Column({
    type: DataType.INTEGER,
    primaryKey: true
}) public id_Vendedor!: number;

@Column({
    type: DataType.STRING,
    primaryKey: false
}) public nombre_vendedor!: string;
@Column({
    type: DataType.INTEGER,
    primaryKey: false
}) public numeroTel_vendedor!: number;

@Column({
    type: DataType.STRING,
    primaryKey: false
}) public user!: string;

@Column({
    type: DataType.STRING,
    primaryKey: false
}) public password!: string;


}
export default vendedor;