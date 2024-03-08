import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'catalog', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./catalog/catalog.module') },
];
