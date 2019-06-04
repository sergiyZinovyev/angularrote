import { Component, OnInit, OnChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { Router } from '@angular/router';

import { UsersService } from '../users.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  validReg: boolean = false;

  myUsers: any;
  warEmail: string = 'hidd';
  warPass: string = 'hidd';
  warTerm: string = 'hidd';

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    check: new FormControl('', [Validators.required, Validators.requiredTrue])
  });

  constructor(
    private router: Router,
    private data: UsersService
  ) { }

  ngOnInit() {
    this.data.getUsersFromServer();
    this.validReg = this.data.validReg;
  }

  onSubmit() {
    if(this.email.valid){
      this.warEmail = "hidd";
    }
    else{this.warEmail = "vis";}

    if(this.password.valid){
      this.warPass = "hidd";
    }
    else{this.warPass = "vis";}

    if(this.check.valid){
      this.warTerm = "hidd";
    }
    else{this.warTerm = "vis";}

    if(this.loginForm.valid){
      let login = this.getUser(this.email.value)[0];
      if (!login){
        this.data.editvalidLog(true);
        this.data.editvalidReg(false);
        this.router.navigate(['/register']);
        return localStorage.setItem('login', 'false');
      }
      if(this.email.value == login.username && this.password.value == login.password){
        localStorage.setItem('login', 'true');
      }
      this.data.editvalidReg(false);
      localStorage.setItem('username', login.fullname);
      this.router.navigate(['/home']);
    }
  }

  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  get check() {
    return this.loginForm.get('check');
  }

  getUser(username) {
    return this.data.users.filter((item) => item.username == username );
  }

}
