import {Column, Entity, OneToMany} from "typeorm";
import { BaseEntity } from "@/modules/base/entities";
import { Role } from "@/share";
import {RestaurantsEntity} from "@/modules/restaurants/entities";

@Entity('Users')
export class UsersEntity extends BaseEntity{
  @Column()
  name: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  role: Role;

  @Column()
  password_hash: string;

  // @OneToMany(() => RestaurantsEntity, (restaurant: RestaurantsEntity) => restaurant.user)
  // restaurants: RestaurantsEntity[];
}