import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Constants } from '../utils/constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  signUp(formData: any) {
    return this.http.post(`${environment.crossDomainAPI}/signup`, formData)
      .pipe(map(data => { return data; }
      ));
  }
  login(formData: any) {
    return this.http.post(`${environment.crossDomainAPI}/login`, formData)
      .pipe(map(data => { return data; }
      ));
  }

  isUserLogin(){
    return localStorage.getItem('currentUser') != null;
  }

  logout() {
    localStorage.removeItem('currentUser')
    this.router.navigate([Constants.LOGIN_ROUTE]);
    }

  getCountry() {
    return this.http.get<any>('./assets/country.json').pipe(map(data => {
      return data;
    }));
  }

}
