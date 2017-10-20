import { Component, OnInit } from '@angular/core';
import {RadioOption} from '../shared/radio/radio-option.model';
import {OrderService} from './order.service';
import {CartItemModel} from '../restaurante-detail/shopping-cart/cart-item.model';
import {Order, OrderItem} from './order.model';
import {Router} from '@angular/router';
import {FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i ;

  numberPattern = /^[0-9]*$/;

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value: 'DEB'},
    {label: 'Cartão de Alimentação', value: 'REF'}
  ];

  delivery = 8;


  constructor(private orderService: OrderService,
              private router: Router,
              private formBiulder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBiulder.group({
        name: this.formBiulder.control('', [Validators.required, Validators.minLength(5)]),
        email: this.formBiulder.control('', [Validators.required,  Validators.pattern(this.emailPattern)]),
        emailConfirmation: this.formBiulder.control('', [Validators.required,  Validators.pattern(this.emailPattern)]),
        address: this.formBiulder.control('', [Validators.required, Validators.minLength(5)]),
        number: this.formBiulder.control('', [Validators.required,  Validators.pattern(this.numberPattern)]),
        optionalAdress: this.formBiulder.control(''),
        paymentOption: this.formBiulder.control('', [Validators.required])
    }, {validator: OrderComponent.equalsTo});
  }

  static equalsTo(group: AbstractControl): {[key: string]: boolean} {
    const email = group.get('email');
    const emailConfirmation = group.get('emailConfirmation');

    if (!email || !emailConfirmation) {
      return undefined;
    }
    if (email.value !== emailConfirmation.value) {
      return {emailsNotMatch: true} ;
    }
    return undefined;
  }
  itemsValue(): number {
    return this.orderService.itemsValue();
  }
  cartItems(): CartItemModel[] {
    return this.orderService.cartItems();
  }
  increaseQty(item: CartItemModel) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CartItemModel) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CartItemModel) {
    this.orderService.remove(item);
  }

  checkOrder(order: Order) {
    order.orderItems = this.cartItems().map((item: CartItemModel) => new OrderItem(item.quantity, item.menuItem.id));
    this.orderService.checkOrder(order)
      .subscribe((orderId: string) => {
      this.router.navigate(['/order-summary']);
      console.log(`Compra concluída: ${orderId}`);
      this.orderService.clear();
    });
    console.log(order);
  }

}
