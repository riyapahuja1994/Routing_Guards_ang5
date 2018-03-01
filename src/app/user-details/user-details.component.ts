import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersFetchService } from '../users-fetch.service';
import { IUser } from '../interfaces/userInterface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

	users:IUser[];
	user:IUser;
	params:any;
  constructor(private UsersFetchService: UsersFetchService, private activatedRoute: ActivatedRoute) { 
  }

  ngOnInit() {
  
  	// this.activatedRoute.params.subscribe( params => this.params = params );
  	// console.log(this.params['id']);
  

  	this.activatedRoute.params.subscribe( (params) =>{
  		this.UsersFetchService.getUserById(+params['id']).subscribe(
  			user => this.user = user
  			);
  	});
  }

}
