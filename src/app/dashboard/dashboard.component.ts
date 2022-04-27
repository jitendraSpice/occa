import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { Constants } from '../core/utils/constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userName:any;

  constructor( private _AuthService: AuthService,
  public router: Router,public activeRoute: ActivatedRoute,) {
    
  }

  ngOnInit(): void {
   const getData:any =  localStorage.getItem('currentUser');
   let data = JSON.parse(getData)
    this.userName = data.name;
  }

  avatar = '../../assets/images/user.png';
  logOut(){
     this._AuthService.logout();
  }
}
