import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { SalaryGuard } from './shared/salary.guard';
import { PageNotFoundComponent } from './core/component/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./auth/register/register.module').then((m) => m.RegisterModule),
  },
  {
    path: 'employees',
    loadChildren: () =>
      import('./features/employees/employees.module').then(
        (m) => m.EmployeesModule
      ),
  },
  {
    path: 'currency',
    loadChildren: () =>
      import('./features/currency/currency.module').then(
        (m) => m.CurrencyModule
      ),
    canActivate: [AuthGuard, SalaryGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'edit',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    title: 'Page not found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
