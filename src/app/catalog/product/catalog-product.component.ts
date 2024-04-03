import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.interface';

@Component({
  selector: 'ako-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogProductComponent {
  @Input({ required: true }) product!: Product;
  constructor(private router: Router) {}

  navigateToProductDetails(): void {
    this.router.navigate(['catalog', 'products', this.product.id]);
  }
}
