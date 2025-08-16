import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { MenuItemServiceI } from "@/share";
import { MenuItemsEntity } from "@/modules/menuItems/entities";

@Injectable()
export class MenuItemService
  extends BaseService<MenuItemsEntity>
  implements MenuItemServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<MenuItemsEntity>,
  ) {
    super(repository);
  }

  // async getMenuItems() {
  //   return this.repository.find({
  //     relations: {
  //       restaurant: {
  //         user: true,
  //       },
  //     },
  //   });
  // }
}