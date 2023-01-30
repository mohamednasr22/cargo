import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SingleComponent } from './layout/single/single.component';
import { AuthguardGuard } from './helpers/authguard.guard';

const routes: Routes = [
  { path : 'login' , component : SingleComponent ,  loadChildren : () => import('./modules/auth/auth.module').then(m => m.AuthModule)},
  { path : 'admin' , canActivate: [AuthguardGuard] ,  loadChildren : () => import('./modules/admin/admin.module').then(m => m.AdminModule)},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {
    paramsInheritanceStrategy : 'always',
    preloadingStrategy : PreloadAllModules,
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
