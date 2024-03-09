import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CatalogService } from '../catalog.service';
import { Observable, map, combineLatest } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'ako-other-products',
  templateUrl: './other-products.component.html',
  styleUrls: ['./other-products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OtherProductsComponent {
  allProducts$ = this.catalogService.getAll();
  id$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('id')))
  );

  productsWithoutCurrent$ = combineLatest([this.allProducts$, this.id$]).pipe(
    map(([products, currentId]) =>
      products.filter((product) => product.id !== currentId)
    )
  );

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {}
}
