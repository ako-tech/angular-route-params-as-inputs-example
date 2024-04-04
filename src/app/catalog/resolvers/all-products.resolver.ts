import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Products } from '../product.interface';

export const allProductsResolver: ResolveFn<Products> = () => {
  return inject(CatalogService).getAll();
};
