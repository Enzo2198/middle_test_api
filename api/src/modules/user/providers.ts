import { DataSource } from 'typeorm';
import {DATA_SOURCE} from "@/share";
import {UsersEntity} from "@/modules/user/entities";

export const userProviders = [
  {
    provide: 'ANSWER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(UsersEntity),
    inject: [DATA_SOURCE],
  },
];