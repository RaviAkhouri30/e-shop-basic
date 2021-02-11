import { AuthService } from './../../services/auth/auth.service';
import { UserDetails } from './../../common/users';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userDetails: UserDetails = {
    name: '',
    address: '',
    email: '',
    mob: ''
  };
  constructor(
    private user: UserService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.user.getUserDetails().subscribe(res => {
      const response = res.json();
      this.userDetails = {
        name: response.name.fName + ', ' + response.name.lName,
        address: response.address.addLine1 + ', ' +
          response.address.addLine2 + ', ' +
          response.address.city + ', ' +
          response.address.state + ' - ' +
          response.address.pinCode,
        email: response.id,
        mob: response.mob
      };
    });
  }

}
