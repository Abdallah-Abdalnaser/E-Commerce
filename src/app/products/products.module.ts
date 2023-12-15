import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductsDetailsComponent } from './components/products-details/products-details.component';
import { ShortPipeTsPipe } from './pipes/short.pipe.ts.pipe';


@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsDetailsComponent,
    ShortPipeTsPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
