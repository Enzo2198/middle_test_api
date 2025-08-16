import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {RestaurantReqI} from "@/share";

// Payload / body
export class RestaurantReq implements RestaurantReqI {
  @ApiProperty({
    example: 'Bún chả Hà Nội',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '123 Nguyễn Trãi, Hà Nội',
  })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({
    example: 21.0285,
  })
  @IsNumber({ maxDecimalPlaces: 4 })
  @IsNotEmpty()
  latitude: number;

  @ApiProperty({
    example: 105.8542,
  })
  @IsNumber({ maxDecimalPlaces: 4 })
  @IsNotEmpty()
  longitude: number;

  @ApiProperty({
    example: 1.2,
  })
  @IsNumber({ maxDecimalPlaces: 4 })
  @IsNotEmpty()
  distance_km: number;
}