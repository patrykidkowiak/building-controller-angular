import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Home} from '../home';
import {HomeService} from '../home.service';

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  homes: Home[];
  selectedHome: Home;

  constructor(private homeService: HomeService) {
  }

  onSelect(home: Home): void {
    this.selectedHome = home;
  }

  ngOnInit() {
    this.homeService.getHomes().subscribe(
      homes => {
        this.homes = homes;
      },
      error => console.log(JSON.stringify(error))
    );
  }
}
