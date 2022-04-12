export interface Cart {
    name: string;
    size:string;
    ice:string;
    sugar:string;
    quantitySelect: string;
    price: string;
    topping:string[];
    productImg: string,
  };
  
  // orders modals
  export interface Order {
    name: string;
    size: string;
    ice: string;
    sugar: string;
    quantitySelect: string;
    price: string;
    total: string;
    topping: string[];
}
export interface Orders {
    username: string;
    phone: string;
    address: string;
    orders: Order[];
    paid: boolean;
    status: string;
    fullName: string;
    time: string;
    id?: string;
}
// users modal
export interface User {
  username: string;
  password: string;
  email: string;
  phone:string;
  fullName: string;
  age: string;
  avatar: string;
  address: string;
  cart: Cart[];
  orders: Cart[];
  id: string;
}
  // map modals
  export interface Properties {
    id?: string;
    name: string;
    distance: string;
    address?: string;
    district?: string;
}

export interface Geometry {
    type: string;
    coordinates: number[];
}

export interface Feature {
    type: string;
    properties: Properties;
    geometry: Geometry;
}

export interface Map {
    type: string;
    features: Feature[];
}