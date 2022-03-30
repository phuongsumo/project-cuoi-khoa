export interface IProduct {
	name: string;
	price: number;
	salePrice: number;
	image: string;
	category: string;
	sizeM: boolean;
	sizeL: boolean;
	id: string;
}

export interface IState {
	name?: string,
	price?: number,
	quantitySelect?: number,
	size?: string | null ,
	ice?: string,
	sugar?: string,
	topping?: string[] | any,
}
