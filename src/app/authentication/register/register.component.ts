import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {RegisterService} from './register.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  myform: FormGroup;
  hasErrors = false;

  constructor(private registerService: RegisterService, private router: Router) {
  }

  ngOnInit() {
    this.myform = new FormGroup({
      firstName: new FormControl(),
      lastName: new FormControl(),
      email: new FormControl('', Validators.compose([
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$')
      ])),
      password: new FormControl(),
    });
  }

  sendForm() {

    this.registerService.register(this.myform.value)
      .subscribe(d => {
        this.router.navigate(['/']);
      }, err => {
        this.hasErrors = true;
      });
  }
}
