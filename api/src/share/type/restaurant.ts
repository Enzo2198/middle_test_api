interface RestaurantBaseI {
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  distance_km: number;
}

export interface RestaurantI extends RestaurantBaseI {
  id: number;
  user_id: number;
}

// Create or update
export interface RestaurantReqI extends RestaurantBaseI {
}

// Response
export interface RestaurantResI extends RestaurantI {}
