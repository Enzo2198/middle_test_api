import { DataSource } from 'typeorm';
import { DATA_SOURCE } from "@/share";
import { MenuItemsEntity } from "@/modules/menuItems/entities";

export const menuItemProviders = [
  {
    provide: 'ANSWER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(MenuItemsEntity),
    inject: [DATA_SOURCE],
  },
];