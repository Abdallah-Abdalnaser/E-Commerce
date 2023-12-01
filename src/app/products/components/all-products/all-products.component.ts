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

  ngOnInit(): void {
    this.getAllProduct();
    this.getCatigories();
  }

  getAllProduct() {
    this.product.GetAllproducts().subscribe(
      (data:any) =>{
        this.products = data
        console.log(this.products);
      }
    )
  }

  getCatigories() {
    this.product.GetCategory().subscribe(
      (data:any)=> {
        this.catigories = data
        console.log(this.catigories);

      }
    )
  }
}
