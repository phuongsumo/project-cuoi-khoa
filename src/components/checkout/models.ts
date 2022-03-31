export interface Cart {
    productId: string;
    name: string;
    description: string;
    quantity: number;
    productImg: string,
    price: number;
    paid: boolean;
  };
  // users modal
  export interface User {
    username: string;
    password: string;
    email: string;
    phone: number|string;
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