import { Module } from '@nestjs/common';
import { RestaurantService } from './services';
import { DatabaseModule } from "@/database/module";
import {RestaurantServiceToken} from "@/share";
import {restaurantProviders} from "@/modules/restaurants/providers";
import {RestaurantController} from "@/modules/restaurants/controllers";

@Module({
  imports: [DatabaseModule],
  controllers: [RestaurantController],
  providers: [
    ...restaurantProviders,
    {
      provide: RestaurantServiceToken,
      useClass: RestaurantService,
    },
  ],
})
export class RestaurantModule {}
