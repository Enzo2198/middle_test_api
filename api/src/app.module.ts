import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UserModule} from "@/modules/user/module";
import {RestaurantModule} from "@/modules/restaurants/module";
import {MenuItemModule} from "@/modules/menuItems/module";

@Module({
  imports: [UserModule, RestaurantModule, MenuItemModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
