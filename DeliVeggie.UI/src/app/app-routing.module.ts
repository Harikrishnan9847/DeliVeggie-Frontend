import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../app/product-list/product-list.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path: '', redirectTo: '/productdetails', pathMatch: 'full'},
  {path: 'productdetails', component: ProductListComponent},
  {path: 'product', loadChildren: () => import('./product-details-module/product-details-module').then(m => m.ProductDetailsRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
