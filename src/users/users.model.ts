import {
  Model,
  Table,
  Column,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript';
import { Role } from 'src/roles/roles.model';
import { UserRoles } from 'src/roles/user-roles.model';

interface UserCreationAttrs {
  firstName: string;
  secondName: string;
  thirdname: string;
  email: string;
  password: string;
  phoneNumber: number;
  passportSeries: string;
  passportNumber: string;
  passportIssuer: string;
  passportDate: string;
  locationRegistration: string;
}

interface Feedback {
  comment: string;
  rating: number;
}

@Table({ tableName: 'users', createdAt: true, updatedAt: true })
export class Users extends Model<Users, UserCreationAttrs> {
  @Column({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  firstName: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  secondName: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  thirdname: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.INTEGER,
    unique: true,
    allowNull: false,
  })
  phoneNumber: number;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  passportSeries: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  passportNumber: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  passportIssuer: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  passportDate: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  locationRegistration: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    unique: false,
    allowNull: true,
  })
  objects: string[];

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  paymentData: string;

  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    allowNull: true,
    defaultValue: false,
  })
  banned: boolean;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  banReason: string;

  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    allowNull: true,
    defaultValue: false,
  })
  premium: boolean;

  @Column({
    type: DataType.ARRAY(DataType.JSONB),
    unique: false,
    allowNull: true,
  })
  feedbackTenant: Feedback[];

  @Column({
    type: DataType.ARRAY(DataType.JSONB),
    unique: false,
    allowNull: true,
  })
  feedbackLandlord: Feedback[];

  @BelongsToMany(() => Role, () => UserRoles)
  roles: Role[];
}
