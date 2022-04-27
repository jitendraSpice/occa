import { Input, Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { Constants } from 'src/app/core/utils/constant';
import Utility from 'src/app/core/utils/utility';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  submitted = false;
  responsedata: any;

  constructor(private formBuilder: FormBuilder, private _AuthService: AuthService,
    private toastr: ToastrService,public router: Router,public activeRoute: ActivatedRoute,) {
      const getData = localStorage.getItem('currentUser');
      if(getData != null){
        var returnUrl=this.activeRoute.snapshot.queryParams["returnUrl"];   
        this.router.navigateByUrl(`${returnUrl?returnUrl:Constants.DASHBOARD_ROUTE}`);
      }
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required,Validators.pattern(Utility.emailPattern)]],
      password: ['',[Validators.required,Validators.minLength(6)]],
    })
  }

  get f() { return this.loginForm.controls; }
  
/* login function */
  proceedlogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {return;}

    this._AuthService.login(this.loginForm.value).subscribe((result:any) => {
      if (result.code == null) {
        this.responsedata = result;
        localStorage.setItem('currentUser',JSON.stringify(this.responsedata));
        var returnUrl=this.activeRoute.snapshot.queryParams["returnUrl"];   
        this.router.navigateByUrl(`${returnUrl?returnUrl:Constants.DASHBOARD_ROUTE}`);
        this.toastr.success(`login successfully!`, `Success`);
      } else{
        this.toastr.error(`${result.msg} ${result.code}`);
      }
    }, err => {
      console.log('login',err);
    });
    this.loginForm.reset();
  }

/* login function End */
public errorHandling = (control: string, error: string) => {
  return this.loginForm.controls[control].hasError(error);
}

}
