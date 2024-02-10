import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AllListComponent } from './pages/all-list/all-list.component';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
   
  }, 
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'list',
    component: AllListComponent
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
