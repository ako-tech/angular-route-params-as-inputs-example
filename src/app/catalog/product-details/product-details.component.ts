import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
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
    switchMap((id) => this.catalogService.getProduct(id))
  );

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {}
}
