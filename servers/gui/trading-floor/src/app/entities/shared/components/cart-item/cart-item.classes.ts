export namespace CartItem {
	export class Data {
		constructor(private _title: string, private _imgUrl: string, private _amount: number) {}

		public get title(): string {
			return this._title;
		}
		public set title(value: string) {
			this._title = value;
		}

		public get imgUrl(): string {
			return this._imgUrl;
		}
		public set imgUrl(value: string) {
			this._imgUrl = value;
		}

		public get amount(): number {
			return this._amount;
		}
		public set amount(value: number) {
			this._amount = value;
		}

		public getMapObject(): Data {
			return Object.create(null, Object.getOwnPropertyDescriptors(this)) as Data;
		}
	}
}
