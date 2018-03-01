import { Component, OnInit } from '@angular/core';
import { UsersFetchService } from '../users-fetch.service';

@Component({
  selector: 'app-subject-two',
  templateUrl: './subject-two.component.html',
  styleUrls: ['./subject-two.component.css']
})
export class SubjectTwoComponent implements OnInit {

  operation:string;
	count: number;

  constructor(private UsersFetchService: UsersFetchService) { }

  ngOnInit() {
    this.UsersFetchService.currentOperation.subscribe(operation => this.operation = operation)
    this.UsersFetchService.currentCount.subscribe(count => this.count = count)
  }
  decrement(){
  	this.UsersFetchService.changeOperation("Decrement");
  	this.UsersFetchService.changeCounter(this.count-1);
  }

}
