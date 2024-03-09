import { ChangeDetectionStrategy, Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { tap } from 'rxjs';

@Component({
  selector: 'ako-catalog-filters',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ReactiveFormsModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent {
  search: FormControl<string>;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.search = new FormControl(
      this.route.snapshot.queryParamMap.get('f') ?? '',
      { nonNullable: true }
    );

    this.search.valueChanges
      .pipe(
        tap((val) =>
          this.router.navigate([], {
            relativeTo: this.route,
            queryParams: { ...this.route.snapshot.queryParams, f: val },
          })
        ),
        takeUntilDestroyed()
      )
      .subscribe();
  }
}
