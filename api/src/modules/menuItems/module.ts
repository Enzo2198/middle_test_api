import { Module } from '@nestjs/common';
import { MenuItemService } from './services';
import { DatabaseModule } from "@/database/module";
import {MenuItemServiceToken} from "@/share";
import {menuItemProviders} from "@/modules/menuItems/providers";
import {MenuItemController} from "@/modules/menuItems/controllers";

@Module({
  imports: [DatabaseModule],
  controllers: [MenuItemController],
  providers: [
    ...menuItemProviders,
    {
      provide: MenuItemServiceToken,
      useClass: MenuItemService,
    },
  ],
})
export class MenuItemModule {}
