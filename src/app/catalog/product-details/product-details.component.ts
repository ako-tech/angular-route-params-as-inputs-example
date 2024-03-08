import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CatalogService } from '../catalog.service';
import { Product } from '../product.interface';

@Component({
  selector: 'ako-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  );
  product$: Observable<Product | null> = this.id$.pipe(
    switchMap((id) => this.catalogService.getProduct(id)),
    tap((product) => product === null && this.router.navigate(['catalog']))
  );

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute,
    private router: Router,
    protected location: Location
  ) {
    console.log(router.lastSuccessfulNavigation);
  }

  addToCart(product: Product): void {}

  navigateBack(): void {
    const { lastSuccessfulNavigation } = this.router;
    lastSuccessfulNavigation
      ? this.location.back()
      : this.router.navigate(['catalog']);
  }
}
