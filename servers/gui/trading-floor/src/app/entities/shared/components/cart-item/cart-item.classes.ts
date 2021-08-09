export namespace CartItem {
	export class Data {
		constructor(public title: string, public imgUrl: string, public amount: number) {}

		public getMapObject(): Data {
			return Object.create(null, Object.getOwnPropertyDescriptors(this)) as Data;
		}
	}
}
