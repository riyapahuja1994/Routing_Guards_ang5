import { Component, OnInit } from '@angular/core';
import { UsersFetchService } from '../users-fetch.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
	operation:string;
	count:number;

  constructor(private UsersFetchService: UsersFetchService) { }

  ngOnInit() {
    this.UsersFetchService.currentOperation.subscribe(operation => this.operation = operation)
    this.UsersFetchService.currentCount.subscribe(count => this.count = count)
  }

}
