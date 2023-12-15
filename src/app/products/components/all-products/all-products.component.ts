import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products!:any[];
  catigories!:string[];

  constructor(private product:ProductsService) {}

  ngOnInit():void {
    this.getAllProduct();
    this.getCatigories();
    setTimeout(() => {
      console.log(this.catigories);
      console.log(this.products);
    }, 2000);
  }

  getAllProduct() {
    this.product.GetAllproducts().subscribe(
      (data:any) =>{
        this.products = data
      }
    )
  }

  getCatigories() {
    this.product.GetCategory().subscribe(
      (data:any)=> {
        this.catigories = data
      }
    )
  }
}
