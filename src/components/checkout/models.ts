export interface Cart {
    name: string;
    size:boolean;
    ice:boolean;
    sugar:boolean;
    amount: number;
    price: string;
    total: string;
    topping:string[];
    productImg: string,
  };
  
  // orders modals
  export interface Order {
    name: string;
    size: boolean;
    ice: boolean;
    sugar: boolean;
    amount: string;
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
  age: number;
  avatar: string;
  address: string;
  cart: Cart[];
  orders: Cart[];
  id: string;
}
//   product modals
export interface Product {
    name: string;
    price: number;
    salePrice: number;
    description: string;
    image: string;
    category: string;
    sizeM: boolean;
    sizeL: boolean;
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