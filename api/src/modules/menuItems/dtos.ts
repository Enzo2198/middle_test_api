import { ApiProperty } from "@nestjs/swagger";
import {IsBoolean, IsNotEmpty, IsNumber, IsString} from "class-validator";
import {MenuItemReqI} from "@/share";

// Payload / body
export class MenuItemReq implements MenuItemReqI {
  @ApiProperty({
    example: 101,
  })
  @IsNumber()
  @IsNotEmpty()
  restaurant_id: number;

  @ApiProperty({
    example: 'Bún chả truyền thống',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Bún chả thịt nướng ăn kèm nước mắm chua ngọt',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: 45000,
  })
  @IsNumber()
  @IsNotEmpty()
  price: number;

  @ApiProperty({
    example: 'image_url: "https://example.com/buncha.jpg",',
  })
  @IsString()
  @IsNotEmpty()
  image_url: string;

  @ApiProperty({
    example: 'true',
  })
  @IsBoolean()
  @IsNotEmpty()
  is_available: boolean;
}