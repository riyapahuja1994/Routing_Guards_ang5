import { Component, OnInit } from '@angular/core';
import { UsersFetchService } from '../users-fetch.service';

@Component({
  selector: 'app-subject-one',
  templateUrl: './subject-one.component.html',
  styleUrls: ['./subject-one.component.css']
})
export class SubjectOneComponent implements OnInit {

	operation:string;
	count: number;

  constructor(private UsersFetchService: UsersFetchService) { }

  ngOnInit() {
    this.UsersFetchService.currentOperation.subscribe(operation => this.operation = operation)
    this.UsersFetchService.currentCount.subscribe(count => this.count = count)
  }

  increment(){
  	this.UsersFetchService.changeOperation("Increment");
  	this.UsersFetchService.changeCounter(this.count+1);
  }

}
