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
    phone: number;
    fullName: string;
    age: number;
    avatar: string;
    address: string;
    cart: any[];
    order: any[];
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