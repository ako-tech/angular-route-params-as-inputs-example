import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { last } from 'rxjs';

@Directive({
  selector: 'a[backToCatalog]',
  standalone: true,
})
export class BackToCatalogDirective {
  @HostListener('click')
  navigateBack(): void {
    const { lastSuccessfulNavigation } = this.router;
    const previousNavigationUrlString =
      lastSuccessfulNavigation?.previousNavigation?.finalUrl?.toString();
    const isPreviousNavigationFilteredCatalog =
      previousNavigationUrlString?.includes('catalog?');

    isPreviousNavigationFilteredCatalog
      ? this.location.back()
      : this.router.navigate(['catalog']);
  }

  constructor(private router: Router, private location: Location) {}
}
