import {ICatalog} from '@entities/shared/components/catalog/catalog.interfaces';

export namespace CatalogMochs {
	export const GOODS: Record<string, ICatalog.CatalogData[]> = {
		computers: [
			{
				imgUrl: 'https://m.media-amazon.com/images/I/51GxgHSNolL._AC_UL320_.jpg',
				description: `
				  Bestol Original Genuine for Changhong LED40YC1700UA LED42YC2000UA GCBLTV50U-C1 LCD LED HDTV TV
        `,
				price: 1100,
				mark: 3,
			},
			{
				imgUrl: 'https://m.media-amazon.com/images/I/61KEl+s4FES._AC_UL320_.jpg',
				description: `
				  ASA LED TV with Integrated HDTV JTV24DC
				`,
				price: 19000,
				mark: 4,
			},
		],
		basics: [
			{
				imgUrl: '',
				description: '',
				price: 0,
				mark: 0,
			},
		],
		oculus: [
			{
				imgUrl: '',
				description: '',
				price: 0,
				mark: 0,
			},
		],
		home: [
			{
				imgUrl: '',
				description: '',
				price: 0,
				mark: 0,
			},
		],
		tv: [
			{
				imgUrl: '',
				description: '',
				price: 0,
				mark: 0,
			},
		],
		picks: [
			{
				imgUrl: '',
				description: '',
				price: 0,
				mark: 0,
			},
		],
	};
}
