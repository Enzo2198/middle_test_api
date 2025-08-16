import { DataSource } from 'typeorm';
import { DATA_SOURCE } from "@/share";
import { RestaurantsEntity } from "@/modules/restaurants/entities";

export const restaurantProviders = [
  {
    provide: 'ANSWER_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(RestaurantsEntity),
    inject: [DATA_SOURCE],
  },
];