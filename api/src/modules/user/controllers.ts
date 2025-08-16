import {Body, Controller, Delete, Get, Inject, Param, ParseIntPipe, Post, Put} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {UserServiceToken} from "@/share";
import {UserService} from "@/modules/user/services";
import {UserReq} from "@/modules/user/dtos";

@ApiTags('Users')
@Controller('/users')
export class UserController {
  constructor(
    @Inject(UserServiceToken)
    private userService: UserService
  ) {}

  @Get()
  getAll() {
    return this.userService.find();
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Post()
  create(@Body() user: UserReq) {
    return this.userService.create(user);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() user: UserReq) {
    return this.userService.updateOne(id, user);
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.softDelete(id);
  }
}
