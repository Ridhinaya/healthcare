import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
{path:'users',component: UserListComponent},
{path:'create-user',component: UserListComponent},
{path:'',redirectTo:'users',pathMatch:'full'},
{path:'update-user/:userid',component:UpdateUserComponent},
{path:'login',component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
