import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.interface';

@Component({
  selector: 'ako-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrls: ['./catalog-product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogProductComponent {
  @Input() product!: Product;
  constructor(private router: Router, private route: ActivatedRoute) {}

  addToCart(): void {}

  navigateToProductDetails(): void {
    this.router.navigate(['products', this.product.id], {
      relativeTo: this.route,
    });
  }
}
