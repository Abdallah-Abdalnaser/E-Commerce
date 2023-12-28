import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { IconDefinition, faCheckCircle , faCircleExclamation , faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../product.model';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit{
  product!:Product;
  faCheckCircle:IconDefinition=faCheckCircle;
  faCircleExclamation:IconDefinition=faCircleExclamation;
  faCartShopping:IconDefinition=faCartShopping;
  constructor(private ProductsService:ProductsService , private route:ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (data:Params)=> {
        this.ProductsService.getProductByid(+data['id']).subscribe(
          (data:any) => {
            this.product = data;
          }
        );
      }
    )
  }
}
