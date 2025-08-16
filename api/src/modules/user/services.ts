import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { BaseService } from '@/modules/base/services';
import { UserServiceI } from "@/share";
import {UsersEntity} from "@/modules/user/entities";

@Injectable()
export class UserService
  extends BaseService<UsersEntity>
  implements UserServiceI
{
  constructor(
    @Inject('ANSWER_REPOSITORY')
    protected repository: Repository<UsersEntity>,
  ) {
    super(repository);
  }
}