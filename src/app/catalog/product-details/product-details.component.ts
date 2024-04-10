import {
  ChangeDetectionStrategy,
  Component,
  Input as ResolvedData,
} from '@angular/core';
import { Product } from '../product.interface';

@Component({
  selector: 'ako-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent {
  @ResolvedData() product!: Product | null;
}
