import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StaffRegisterComponent } from './components/staff-register/staff-register.component';
import { StaffRetrieveComponent } from './components/staff-retrieve/staff-retrieve.component';

const routes: Routes = [
  { path: '', redirectTo: '/staff', pathMatch: 'full' },
  { path: 'staff', component: StaffRetrieveComponent },
  { path: 'register', component: StaffRegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
