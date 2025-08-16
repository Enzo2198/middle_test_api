import {Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {RestaurantServiceToken} from "@/share";
import {RestaurantService} from "@/modules/restaurants/services";
import {RestaurantReq} from "@/modules/restaurants/dtos";

@ApiTags('Restaurants')
@Controller('/restaurants')
export class RestaurantController {
  constructor(
    @Inject(RestaurantServiceToken)
    private restaurantService: RestaurantService
  ) {}

  @Get()
  getAll() {
    return this.restaurantService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantService.findOne(id);
  }

  @Post()
  create(@Body() restaurant: RestaurantReq) {
    return this.restaurantService.create(restaurant);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() restaurant: RestaurantReq) {
    return this.restaurantService.updateOne(id, restaurant);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.restaurantService.softDelete(id);
  }
}
