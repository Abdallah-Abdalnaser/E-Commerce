import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products!:Product[];
  catigories!:string[];
  isfetch!:boolean;

  constructor(private product:ProductsService) {}

  ngOnInit():void {

    this.getAllProduct();
    this.getCatigories();
  }

  getAllProduct() {
    this.isfetch = true
    this.product.GetAllproducts().subscribe(
      (data:any) =>{
        this.isfetch = false;
        this.products = data;
      }
    )
  }

  getCatigories() {
    this.product.GetCategory().subscribe(
      (data:any)=> {
        this.catigories = ['All',...data];
      }
    )
  }

  filterProduct(selectValue:string) {
    this.isfetch = true
    this.product.GetproductsByCategory(selectValue).subscribe(
      (data:any) => {
        this.isfetch = false;
        this.products = data;
      }
    )
  }
}
