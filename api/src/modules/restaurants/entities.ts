import {Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import { BaseEntity } from "@/modules/base/entities";
import { Role } from "@/share";
import { UsersEntity } from "../user/entities";
import {MenuItemsEntity} from "@/modules/menuItems/entities";

@Entity('Restaurants')
export class RestaurantsEntity extends BaseEntity{
  @Column()
  name: string;

  @Column()
  address: string;

  @Column({ type: 'double precision' })
  latitude: number;

  @Column({ type: 'double precision' })
  longitude: number;

  @Column({ type: 'double precision' })
  distance_km: number;

  // @ManyToOne(() => UsersEntity, (user) => user.restaurants)
  // @JoinColumn({ name: 'user_id' })
  // user: UsersEntity;
  //
  // // 1 restaurant có nhiều menu items
  // @OneToMany(() => MenuItemsEntity, (menu) => menu.restaurant)
  // menu: MenuItemsEntity[];
}