import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatePipe, CommonModule } from '@angular/common';
import { ProductDetailsComponent } from '../product-details/product-details.component';

const routes: Routes = [
  { path: '', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  providers: [DatePipe],
  declarations: [ProductDetailsComponent],
})
export class ProductDetailsRoutingModule { }