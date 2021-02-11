import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from './../../../services/auth/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: FormGroup;
  invalid = false;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private dialogRef: MatDialogRef<LoginComponent>,
    public user: UserService
  ) { }

  ngOnInit(): void {
    this.login = this.fb.group({
      userID: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    const formVal = this.login.value;
    if (!this.login.valid) {
      this.invalid = true;
      return;
    }
    this.auth.login(formVal).subscribe(res => {
      const data = res.json();
      console.log(data);
      if (res.status && data.password === formVal.password) {
        localStorage.setItem('userID', data.id);
        if (!data.userName) {
          localStorage.setItem('UserName', data.name.fName + ' ' + data.name.lName);
          const noOfItems = data.cart.length;
          localStorage.setItem('cart', String(noOfItems));
        } else {
          localStorage.setItem('UserName', data.userName);
          localStorage.setItem('cart', '0');
        }
        localStorage.setItem('Admin', data.isAdmin);
        this.invalid = false;
        this.dialogRef.close();
      } else {
        this.invalid = true;
      }
    }, (err: Response) => {
      console.log('e', err.status);
      this.invalid = true;
    });
  }

  clearForm() {
    this.login.reset();
  }

  get fc() {
    return this.login.controls;
  }

}
