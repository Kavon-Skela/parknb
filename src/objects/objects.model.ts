import { Model, Table, Column, DataType } from 'sequelize-typescript';

interface ObjectsCreationAttrs {
  ownerId: string;
  tenantId: string;
  city: string;
  liveComplex: string;
  address: string;
  parking: string;
  termOfRent: number;
  price: number;
  entryDay: string;
  entryHour: number;
  leaveDay: string;
  leaveHour: number;
  width: number;
  height: number;
  status: string;
  commentary: string;
  vip: boolean;
  maxWidth: number;
  maxHeight: number;
  description: string;
  specialConditions: string;
  landLordRequirements: string;
  photos: string[];
  rentConfirmation: boolean;
}

@Table({ tableName: 'objects', createdAt: true, updatedAt: true })
export class Objects extends Model<Objects, ObjectsCreationAttrs> {
  @Column({
    type: DataType.UUID,
    unique: true,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
  })
  id: string;

  @Column({
    type: DataType.UUID,
    unique: false,
    allowNull: false,
  })
  ownerId: string;

  @Column({
    type: DataType.UUID,
    unique: false,
    allowNull: true,
  })
  tenantId: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  city: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  liveComplex: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  parking: string;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
  })
  termOfRent: number;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  entryDay: string;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
  })
  entryHour: number;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  leaveDay: string;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
  })
  leaveHour: number;

  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    allowNull: true,
  })
  additionalConditions: boolean;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
  })
  width: number;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
  })
  height: number;

  @Column({
    type: DataType.ENUM('rented', 'pending', 'free'),
    unique: false,
    allowNull: false,
    defaultValue: 'free',
  })
  status: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  commentary: string;

  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    allowNull: true,
    defaultValue: false,
  })
  vip: boolean;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
    defaultValue: 0,
  })
  maxWidth: number;

  @Column({
    type: DataType.INTEGER,
    unique: false,
    allowNull: false,
    defaultValue: 0,
  })
  maxHeight: number;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: false,
  })
  description: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  specialConditions: string;

  @Column({
    type: DataType.STRING,
    unique: false,
    allowNull: true,
  })
  landLordRequirements: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    unique: false,
    allowNull: true,
  })
  photos: string[];

  @Column({
    type: DataType.BOOLEAN,
    unique: false,
    allowNull: false,
    defaultValue: false,
  })
  rentConfirmation: boolean;
}
