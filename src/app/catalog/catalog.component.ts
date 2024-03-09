import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { CatalogService } from './catalog.service';
import { filterByProductName, sortByPrice } from './helpers';
import { Products } from './product.interface';

@Component({
  selector: 'ako-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  products$ = this.catalogService.products$;
  nameFilter$: Observable<string | null> = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('f'))
  );
  orderBy$: Observable<string | null> = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('orderBy'))
  );

  filteredProducts$: Observable<Products> = combineLatest([
    this.products$,
    this.nameFilter$,
  ]).pipe(map(filterByProductName));

  orderedProducts$: Observable<Products> = combineLatest([
    this.filteredProducts$,
    this.orderBy$,
  ]).pipe(map(sortByPrice));

  constructor(
    private catalogService: CatalogService,
    private route: ActivatedRoute
  ) {}
}
