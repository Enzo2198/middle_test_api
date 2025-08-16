import { ApiProperty } from "@nestjs/swagger";
import {IsNotEmpty, IsNumber, IsString} from "class-validator";
import {Role, UserReqI} from "@/share";

// Payload / body
export class UserReq implements UserReqI {
  @ApiProperty({
    example: '1',
  })
  @IsNumber()
  @IsNotEmpty()
  id: number;

  @ApiProperty({
    example: 'Test',
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '1234567',
  })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({
    example: 'Test@gmail.com',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: '[buyer, driver, restaurant_owner]',
  })
  @IsString()
  @IsNotEmpty()
  role: Role;

  @ApiProperty({
    example: 'Test123',
  })
  @IsString()
  @IsNotEmpty()
  password_hash: string;
}