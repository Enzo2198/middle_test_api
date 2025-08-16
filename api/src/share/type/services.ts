import {MenuItemReqI, RestaurantReqI, UserReqI} from "@/share";

export interface BaseServiceI<RequestI, ResponseI> {
  find: (params?: any) => Promise<ResponseI[]>;
  findOne: (id: number) => Promise<ResponseI>;
  create: (data: RequestI) => Promise<ResponseI>;
  updateOne: (id: number, data: RequestI) => Promise<ResponseI>;
  softDelete: (id: number) => Promise<{ msg: string }>;
}

export interface UserServiceI extends BaseServiceI<UserReqI, any> {}
export interface RestaurantServiceI extends BaseServiceI<RestaurantReqI, any> {}
export interface MenuItemServiceI extends BaseServiceI<MenuItemReqI, any> {}
