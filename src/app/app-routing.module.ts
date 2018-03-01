import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SubjectComponent } from './subject/subject.component';
import { AccessDetailsGuard } from './guards/access-details/access-details.guard';

const appRoutes = [
	{ path:'users', component: UsersComponent, 
	canActivateChild:[AccessDetailsGuard],
	children:[
		{ path:'restricted', component: PlaceholderComponent },
		{ path:':id', component: UserDetailsComponent },
		{ path:'', component: UsersComponent }
	] },	
	// { path:'users/placeholder', component: PlaceholderComponent },
	{ path:'subject', component: SubjectComponent },
	{ path:'', redirectTo:'/users', pathMatch: 'full'},
	{ path:'**', redirectTo:'/users', pathMatch: 'full'}
]
@NgModule({
  exports: [ RouterModule ],
  imports: [
  	RouterModule.forRoot(appRoutes)
  ],
  providers:[AccessDetailsGuard],
  declarations: []
})
export class AppRoutingModule { }
