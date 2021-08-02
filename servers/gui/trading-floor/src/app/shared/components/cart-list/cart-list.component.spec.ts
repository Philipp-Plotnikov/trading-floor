import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CartListComponent} from './cart-list.component';
import {CartItemContainer} from '@shared/components/cart-list/item/cart-item.container';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {ICartList} from '@entities/shared/components/cart-list/cart-list.interfaces';
import {By} from '@angular/platform-browser';

describe('CartListComponent', () => {
	const cartItemTag = 'cart-item';
	let component: CartListComponent;
	let fixture: ComponentFixture<CartListComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [CartListComponent, CartItemContainer],
			schemas: [NO_ERRORS_SCHEMA],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(CartListComponent);
		component = fixture.componentInstance;
	});

	it('Should create', () => {
		expect(component).toBeTruthy();
	});

	// it('Should generate', () => {}),

	it('Should deliver to CartItemContainer', () => {
		const inputData: ICartList.Data = [
			{
				title: 'Test product',
				imgUrl: 'test-product.jpg',
				amount: 3,
			},
		];
		component.data = inputData;
		fixture.detectChanges();
		const cartItem = fixture.debugElement.query(By.css(cartItemTag));
		const properties = cartItem.properties;
		console.log(properties);
	});
});
