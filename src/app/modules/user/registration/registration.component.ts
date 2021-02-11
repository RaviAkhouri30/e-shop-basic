import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from './../../../services/user/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/users';
import { MustMatch } from 'src/app/common/must-match';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  newUserForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private userServ: UserService,
    private dialog: MatDialogRef<RegistrationComponent>
  ) { }

  ngOnInit(): void {
    this.newUserForm = this.fb.group({
      fName: ['', [
        Validators.required,
        Validators.pattern('\^[a-zA-Z]+$')
      ]],
      lName: ['', [
        Validators.required,
        Validators.pattern('\^[a-zA-Z]+$')
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      mob: ['', [
        Validators.required,
        Validators.pattern('\^[0-9]+$'),
        Validators.minLength(10),
        Validators.maxLength(10)
      ]],
      addLine1: ['', Validators.required],
      addLine2: [''],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pinCode: ['', [
        Validators.required,
        Validators.pattern('\^[0-9]+$')
      ]],
      password: ['', [
        Validators.required,
        Validators.pattern('\^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,20}$')
      ]],
      cPassword: ['', Validators.required]
    },
      {
        validator: MustMatch('password', 'cPassword')
      });
  }
  addNewUser() {
    if (!this.newUserForm.valid) {
      return;
    }
    const user: User = {
      id: '',
      name: { fName: '', lName: '' },
      email: '',
      mob: '',
      address: { addLine1: '', addLine2: '', city: '', state: '', pinCode: '' },
      cart: [],
      wishList: [],
      orders: [],
      password: '',
      isAdmin: false
    };

    const post = this.newUserForm.value;
    user.id = post.email;
    user.name.fName = post.fName;
    user.name.lName = post.lName;
    user.email = post.emaiil;
    user.address.addLine1 = post.addLine1;
    user.address.addLine2 = post.addLine2;
    user.address.city = post.city;
    user.address.state = post.state;
    user.address.pinCode = post.pinCode;
    user.mob = post.mob;
    user.cart = [];
    user.wishList = [];
    user.orders = [];
    user.isAdmin = false;
    user.password = post.password;
    this.userServ.addNewUser(user).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    });
    this.dialog.close();
  }
  clearForm() {
    this.newUserForm.reset();
  }

  get fc() {
    return this.newUserForm.controls;
  }

}
