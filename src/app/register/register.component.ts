import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl} from '@angular/forms';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';

function passwordConfirming(c: AbstractControl): any {
  if(!c.parent || !c) return;
  const pwd = c.parent.get('password');
  const cpwd = c.parent.get('confirmPassword');

  if(!pwd || !cpwd) return ;
  if (pwd.value !== cpwd.value) {
      return { invalid: true };
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validLog: boolean = false;

  warUsername: string = 'hidd';
  warFullname: string = 'hidd';
  warEmail: string = 'hidd';
  warPass: string = 'hidd';
  warConfirmPassword: string = 'hidd';
 

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.pattern("^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$")]),
    confirmPassword: new FormControl('', [Validators.required, passwordConfirming]),
  });

  constructor(
    private router: Router,
    private data: UsersService
  ) { }

  ngOnInit() {
    this.registerForm.controls['password'].valueChanges.subscribe((value) => this.registerForm.controls['confirmPassword'].setValue(''));
    this.validLog = this.data.validLog;
    console.log(this.validLog);
  }
 
  get username() {return this.registerForm.get('username')}
  get fullname() {return this.registerForm.get('fullname')}
  get email() {return this.registerForm.get('email')}
  get password() {return this.registerForm.get('password')}
  get confirmPassword() {return this.registerForm.get('confirmPassword')}


  /*confirmPasswordValidator(control: FormControl): {[s:string]:boolean}{

    if(control.value===this.registerForm.get('password').value){
        return {"confirmPassword": true};
    }

    return null;
  }*/

 

  onSubmit() {
    if(this.username.valid){this.warUsername = "hidd"}
    else{this.warUsername = "vis";}

    if(this.fullname.valid){this.warFullname = "hidd"}
    else{this.warFullname = "vis";}

    if(this.email.valid){this.warEmail = "hidd"}
    else{
      this.registerForm.controls['email'].setValue('');
      this.warEmail = "vis";
    }

    if(this.password.valid){this.warPass = "hidd"}
    else{
      this.registerForm.controls['password'].setValue('');
      this.registerForm.controls['confirmPassword'].setValue('');
      this.warPass = "vis";
    }

    if(this.confirmPassword.valid){this.warConfirmPassword = "hidd"}
    else{
      this.registerForm.controls['confirmPassword'].setValue('');
      this.warConfirmPassword = "vis";
    }

    if(this.registerForm.valid){
      console.log(this.registerForm.value);
      let newRegister = {
        username: this.username.value,
        fullname: this.fullname.value,
        email: this.email.value,
        password: this.password.value
      }

      this.data.createPost(newRegister).subscribe((res) => {
        this.data.addUsers(res);
       });
      
      this.data.editvalidLog(false)
      console.log(newRegister);
      this.router.navigate(['/login']);
    }
  }


}
