import { Module } from '@nestjs/common';
import { UserService } from './services';
import { DatabaseModule } from "@/database/module";
import {UserServiceToken} from "@/share";
import {userProviders} from "@/modules/user/providers";
import {UserController} from "@/modules/user/controllers";

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [
    ...userProviders,
    {
      provide: UserServiceToken,
      useClass: UserService,
    },
  ],
})
export class UserModule {}
