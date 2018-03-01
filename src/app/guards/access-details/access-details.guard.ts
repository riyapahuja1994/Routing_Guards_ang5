import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute,Router } from '@angular/router';
import { UsersFetchService } from '../../users-fetch.service';

@Injectable()
export class AccessDetailsGuard implements CanActivate, CanActivateChild {
	// params:any;
	userid: string;
	checkGuard:boolean;
	constructor(private UserFetchService: UsersFetchService, private route:ActivatedRoute, private router:Router){
		 
	}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return true;
  }


  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
  		// console.log(next);
  		// console.log("State:",state);
  		if(next.params.id == null){
  			return true;
  		}
   		if(next.params.id%2 == 0)
  		{
  			console.log(state);
  			alert("Access Restricted. You don't have necessary permissions to access this users details.")
  			this.router.navigateByUrl('/users/restricted');
  			console.log(next);
  			console.log("State:",state);
  			return false;
  		}
  		else
  			return true;
  		
  }
}
