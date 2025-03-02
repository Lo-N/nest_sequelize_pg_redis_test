import { SequelizeModuleOptions } from '@nestjs/sequelize';
import { Item } from 'src/models/item.model';
import { Purchase } from 'src/models/purchase.model';
import { User } from 'src/models/user.model';

export const DataBaseConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  host: process.env.DB_CONTAINER!,
  port: Number(process.env.DB_PORT!),
  username: process.env.DB_USERNAME!,
  password: process.env.DB_PASSWORD!,
  database: process.env.DB_DATABASE!,
  models: [User, Item, Purchase],
  autoLoadModels: true,
};
