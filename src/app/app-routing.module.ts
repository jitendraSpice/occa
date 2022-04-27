import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'a', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule), canActivate:[AuthGuard], runGuardsAndResolvers: 'always' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
