import {IProductCard} from '@entities/shared/components/product-card/product-card.interface';

export namespace ProductMochs {
	export const PRODUCTS: Record<string, Record<string, IProductCard.ProductData>> = {
		computers: {
			1: {
				title: `
				  Bestol Original Genuine for Changhong
				  LED40YC1700UA LED42YC2000UA GCBLTV50U-C1 LCD LED HDTV TV
				`,
				mark: 3,
				imgUrl: 'https://m.media-amazon.com/images/I/51GxgHSNolL._AC_UL320_.jpg',
				parameterDesc: `
				  Price: $15.99 + No Import Fees Deposit & $14.03 Shipping to Russian Federation
				`,
				sizes: null,
				parameters: [
					{
						key: 'Brand',
						value: 'Bestol',
					},
					{
						key: 'Display Technology',
						value: 'LCD',
					},
					{
						key: 'Control Method',
						value: 'Remote',
					},
					{
						key: 'Controller Type',
						value: 'Remote Control',
					},
				],
				detailedDesc: [
					'Faster shipping and Excellent service !',
					'1PIECE *REMOTE CONTROL(without battery)',
					'Do not need any program, only put into battery can work!',
					'remote control for changhong LCD TV GCBLTV50U-C1 LED40YC1700UA LED42YC2000UA controller',
				],
				price: 1100,
				amountInStock: 1,
			},
		},
	};
}
