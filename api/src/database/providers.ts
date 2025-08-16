import { DataSource } from 'typeorm';
import * as process from "node:process";
import {DATA_SOURCE} from "@/share";
import {UsersEntity} from "@/modules/user/entities";
import {RestaurantsEntity} from "@/modules/restaurants/entities";
import {MenuItemsEntity} from "@/modules/menuItems/entities";

export const databaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'db',
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        entities: [
          UsersEntity,
          RestaurantsEntity,
          MenuItemsEntity
        ],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];
