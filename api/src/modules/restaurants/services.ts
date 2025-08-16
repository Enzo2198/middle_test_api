import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { RestaurantServiceI } from "@/share";
import {RestaurantsEntity} from "@/modules/restaurants/entities";

@Injectable()
export class RestaurantService
  extends BaseService<RestaurantsEntity>
  implements RestaurantServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<RestaurantsEntity>,
  ) {
    super(repository);
  }
}