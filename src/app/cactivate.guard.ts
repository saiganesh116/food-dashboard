import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CactivateGuard implements CanActivate {

  constructor(public rtr: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
     {
      if(localStorage.getItem("uname")==null && localStorage.getItem("pwd")==null){
        this.rtr.navigate(["login"]);
        return false
      }
      else{
      return true;
      }
  }
  
}
