import { LoginComponent } from './login-component/login-component.component';
import { ModuleWithProviders } from '@angular/core';
import { AuthGuard } from './auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { FeatureComponent } from './feature-component/feature-component.component';


   const routes: Routes = [
      {path: '', redirectTo: '/login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent },
      {path: 'show-feature', component: FeatureComponent,loadChildren: () => FeatureComponent, canActivate: [AuthGuard] }
   ];
    export const appRoutingProviders: any[] = [];
    export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
    

   /* class ReactiveFormsModule {
      static withConfig(opts: { warnOnNgModelWithFormControl: "never" | "once" | "always"; }): ModuleWithProviders<ReactiveFormsModule>
    }
    */


/*export class RoutingModule {
  const router: Router = [
    { path: 'newcomponent', component: MyNewComponentComponent, canActivate: [AuthGuard] },
    //{ path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent}
    ]
}*/



