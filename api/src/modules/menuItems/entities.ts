import {Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import { BaseEntity } from "@/modules/base/entities";
import { Role } from "@/share";
import {RestaurantsEntity} from "@/modules/restaurants/entities";

@Entity('Menu_Items')
export class MenuItemsEntity extends BaseEntity{
  @Column()
  restaurant_id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price: number;

  @Column()
  image_url: string;

  @Column()
  is_available: boolean;

  // @ManyToOne(() => RestaurantsEntity, (restaurant) => restaurant.menu)
  // @JoinColumn({ name: 'restaurant_id' })
  // restaurant: RestaurantsEntity;
}