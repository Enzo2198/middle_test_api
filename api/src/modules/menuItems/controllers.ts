import {Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {MenuItemServiceToken} from "@/share";
import {MenuItemService} from "@/modules/menuItems/services";
import {MenuItemReq} from "@/modules/menuItems/dtos";

@ApiTags('Menu_Items')
@Controller('/menuItems')
export class MenuItemController {
  constructor(
    @Inject(MenuItemServiceToken)
    private menuItemService: MenuItemService
  ) {}

  @Get()
  getAll() {
    return this.menuItemService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.menuItemService.findOne(id);
  }

  @Post()
  create(@Body() menuItem: MenuItemReq) {
    return this.menuItemService.create(menuItem);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() menuItem: MenuItemReq) {
    return this.menuItemService.updateOne(id, menuItem);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.menuItemService.softDelete(id);
  }
}