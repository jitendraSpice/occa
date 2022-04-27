import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { Constants } from 'src/app/core/utils/constant';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  submitted = false;
  responsedata: any;
  allCountry:any;

  constructor(private formBuilder: FormBuilder, private _AuthSerivice: AuthService,
    private toastr: ToastrService,public router: Router,public activeRoute: ActivatedRoute,) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      father_Name: ['', Validators.required],
      dob: [new Date().toISOString(), [Validators.required]],
      address: ['', Validators.required],
      pin: ['', Validators.required],
      district: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      mobile: ['', [Validators.required,Validators.maxLength(10)]],
      live_Class: ['', Validators.required],
      placement_Subscription: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.getCountry()
  }

  /* Register function */
  register() {
    if (this.registerForm.valid) {
      this._AuthSerivice.signUp(this.registerForm.value).subscribe((result:any) => {
        this.responsedata = result;
        if (result.code == null) {
          this.responsedata = result;
          this.toastr.success(`Register successfully!`, `Success`);
          var returnUrl=this.activeRoute.snapshot.queryParams["returnUrl"];   
          this.router.navigateByUrl(`${returnUrl?returnUrl:Constants.DASHBOARD_ROUTE}`);
        } else {
          this.toastr.error(`${result.msg} ${result.code}`);
        }
      },err => {
        console.log('register',err);
      });
    }
  }
  /* Register function End */
  public errorHandling = (control: string, error: string) => {
    return this.registerForm.controls[control].hasError(error);
  }

  /* get country all function End */
  getCountry(){
    this._AuthSerivice.getCountry().subscribe(data => {
      this.allCountry = data;
    })
  }
}
