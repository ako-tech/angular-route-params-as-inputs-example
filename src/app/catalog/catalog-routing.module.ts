import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { allProductsResolver, productResolver } from './resolvers';

const routes: Routes = [
  {
    path: 'catalog',
    component: CatalogComponent,
    resolve: {
      products: allProductsResolver,
    },
  },
  {
    path: 'catalog/products/:id',
    component: ProductDetailsComponent,
    resolve: {
      product: productResolver,
    },
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatalogRoutingModule {}
