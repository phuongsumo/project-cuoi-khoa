export interface IProduct {
	name: string;
	price: string;
	salePrice: string;
	image: string;
	category: string;
	sizeM: boolean;
	sizeL: boolean;
	hot: boolean;
	id: string;
}
export interface IState {
	id?: number,
	name?: string,
	price?: number,
	quantitySelect?: number,
	size?: string | null ,
	ice?: string,
	sugar?: string,
	topping?: string[] | any,
	totalMoney?: number | null,
}

export interface IUser {
	username?: string;
	password?: string;
	email?: string;
	phone?: string;
	fullName?: string;
	age?: string;
	avatar?: string;
	address?: string;
	cart?: any[];
	orders?: any[];
	id?: string;
}
