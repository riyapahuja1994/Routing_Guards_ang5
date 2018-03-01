import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IUser } from './interfaces/userInterface';

@Injectable()
export class UsersFetchService {


	constructor(private httpClient: HttpClient) { }		

	private _rootUrl: string = "http://jsonplaceholder.typicode.com/users";

	getUsers(): Observable<IUser[]>{
		return this.httpClient.get<IUser[]>(this._rootUrl);
	}
	getUserById(id:number): Observable<IUser>{
		return this.httpClient.get<IUser>(`${this._rootUrl}/${id}`);
	}


	private operation = new BehaviorSubject<string>("None");
  	currentOperation = this.operation.asObservable();
	private counter = new BehaviorSubject<number>(0);
  	currentCount = this.counter.asObservable();
  	
  	changeOperation(operation: string) {
    	this.operation.next(operation)
 	}

  	changeCounter(count: number) {
    	this.counter.next(count)
    }
}
