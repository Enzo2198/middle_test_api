interface MenuItemBaseI {
  restaurant_id: number;
  name: string;
  description: string;
  price: number;
  image_url: string;
  is_available: boolean;
}

export interface MenuItemI extends MenuItemBaseI {
  id: number;
}

// Create or update
export interface MenuItemReqI extends MenuItemBaseI {}

// Response
export interface MenuItemResI extends MenuItemI {}
