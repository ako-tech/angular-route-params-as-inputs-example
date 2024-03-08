import { Injectable } from '@angular/core';
import { Observable, defaultIfEmpty, first, from, of } from 'rxjs';
import { Product, Products } from './product.interface';

const db: Products = [
  {
    id: 1,
    imageUrl: 'headphones.jpg',
    name: 'Auriculares',
    price: 50,
  },
  {
    id: 2,
    imageUrl: 'keyboard.jpg',
    name: 'Teclado',
    price: 14.5,
  },
  {
    id: 3,
    imageUrl: 'monitor.jpg',
    name: 'Monitor',
    price: 199.99,
  },
];

@Injectable({
  providedIn: 'root',
})
export class CatalogService {
  products$ = this.getAll();

  constructor() {}

  getAll(): Observable<Products> {
    return of(db);
  }

  getProduct(requestId: number): Observable<Product | null> {
    return from(db).pipe(
      first((product) => product.id === requestId),
      defaultIfEmpty(null)
    );
  }
}
