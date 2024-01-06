import { Component } from '@angular/core';
import { IconDefinition, faX } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent {
  faX:IconDefinition=faX;
}
