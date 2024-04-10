import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input as resolvedData,
  input as queryParam,
} from '@angular/core';
import { filterByProductName, sortByPrice } from './helpers';
import { Products } from './product.interface';

@Component({
  selector: 'ako-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogComponent {
  products = resolvedData<Products>([]);
  nameFilter = queryParam<string>('', { alias: 'f' });
  orderBy = queryParam<string>('');

  filteredProducts = computed(() =>
    filterByProductName([this.products(), this.nameFilter()])
  );
  orderedProducts = computed(() =>
    sortByPrice([this.filteredProducts(), this.orderBy()])
  );
}
