export enum Role {
  buyer = 'buyer',
  driver = 'driver',
  restaurant_owner = 'restaurant_owner',
}

interface UserBaseI {
  name: string;
  phone: string;
  email: string;
  role: Role;
}

export interface UserI extends UserBaseI {
  id: number;
}

// Create or update
export interface UserReqI extends UserBaseI {
  password_hash: string;
}

// Response
export interface UserResI extends UserI {}
