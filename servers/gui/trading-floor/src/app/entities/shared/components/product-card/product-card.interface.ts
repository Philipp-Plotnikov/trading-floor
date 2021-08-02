export namespace IProductCard {
	export interface ProductData {
		title: string;
		mark: number;
		imgUrl: string;
		parameterDesc: string;
		sizes: string[];
		parameters: {key: string; value: string}[];
		detailedDesc: string[];
		price: number;
		amount: number;
	}

	export interface RequestProductDataParams {
		catalogName: string;
		productId: string;
	}
}
