import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { UsersComponent } from './users/users.component';
import { SubjectComponent } from './subject/subject.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { SubjectOneComponent } from './subject-one/subject-one.component';
import { SubjectTwoComponent } from './subject-two/subject-two.component';
import { AppRoutingModule } from './/app-routing.module';
import { UsersFetchService } from './users-fetch.service';
import { PlaceholderComponent } from './placeholder/placeholder.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    UsersComponent,
    SubjectComponent,
    UserDetailsComponent,
    SubjectOneComponent,
    SubjectTwoComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UsersFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
