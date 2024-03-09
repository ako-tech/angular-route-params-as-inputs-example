import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CatalogService } from '../catalog.service';
import { Product } from '../product.interface';

export const productResolver: ResolveFn<Product | null> = (route) => {
  const id = route.paramMap.get('id');

  return inject(CatalogService).getProduct(Number(id));
};
