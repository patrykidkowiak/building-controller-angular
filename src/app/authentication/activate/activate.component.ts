import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActivateService} from './activate.service';

@Component({
  selector: 'app-activate',
  templateUrl: './activate.component.html',
  styleUrls: ['./activate.component.css']
})
export class ActivateComponent implements OnInit {

  private activationHash: any;
  success = undefined;
  hasErrors = false;

  constructor(private route: ActivatedRoute,
              private activateService: ActivateService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.activationHash = params.token;
      this.activateService
        .activate(this.activationHash)
        .subscribe(d => {
          this.success = true;
        }, err => {
          this.hasErrors = true;
        });
    });
  }
}
