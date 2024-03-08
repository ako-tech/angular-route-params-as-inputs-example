import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CatalogProductComponent } from './product/catalog-product.component';
import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [
    CatalogComponent,
    CatalogProductComponent,
    ProductDetailsComponent,
  ],
  imports: [CommonModule, CatalogRoutingModule, FilterComponent],
  exports: [CatalogComponent],
})
export default class CatalogModule {}
