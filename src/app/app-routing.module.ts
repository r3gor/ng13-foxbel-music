import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SessionRequiredGuard } from './core/guards/session-required.guard';
import { LayoutComponent } from './layout/layout.component';
import { TestComponent } from './pages/test/test.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'test',
        component: TestComponent,
      },
      {
        path: '',
        canActivate: [ SessionRequiredGuard ],
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
