import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
//import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login-component/login-component.component';
import { FeatureComponent } from './feature-component/feature-component.component';
import { RouterModule, Routes } from '@angular/router';
//import {AuthService} from './service/auth.service';
//import { AuthGuard } from './auth.guard';
//import { HttpClient,  HttpClientModule } from '@angular/common/http';



const routes: Routes = [
  {path: 'show-feature', component: FeatureComponent}
];




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'})
  ],
  bootstrap: [AppComponent],
  //providers:[AuthService, AuthGuard, HttpClient, HttpClientModule]
  //exports: [RouterModule]
  
})
export class AppModule { }
