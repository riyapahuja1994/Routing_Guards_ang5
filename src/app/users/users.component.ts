import { Component, OnInit } from '@angular/core';
import { IUser } from '../interfaces/userInterface';
import { UsersFetchService } from '../users-fetch.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users: IUser[];

  constructor(private UsersFetchService : UsersFetchService) { }

  ngOnInit() {
  	this.UsersFetchService.getUsers().subscribe(
  		users => this.users = users
  	);
  }
  getUserDetails(UsId:number){
  	console.log("UsId",UsId);
  }

}
