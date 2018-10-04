///<reference path="../../../../../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {BulbService} from '../bulb.service';
import {Room} from '../../../room';
import {Bulb} from '../bulb';

@Component({
  selector: 'app-bulb-list',
  templateUrl: './bulb-list.component.html',
  styleUrls: ['./bulb-list.component.css']
})
export class BulbListComponent implements OnChanges {

  @Input() selectedRoom: Room;

  bulbs: Bulb[];
  selectedBulb: Bulb;

  constructor(private bulbservice: BulbService) {
  }

  onSelect(bulb: Bulb): void {
    this.selectedBulb = null;
    this.bulbservice.getBulbs(this.selectedRoom.id).subscribe(
      bulbs => {
        this.bulbs = bulbs;
      },
      error => console.log(JSON.stringify(error))
    );
    this.selectedBulb = bulb;
  }

  ngOnChanges(changes: SimpleChanges) {
    this.selectedBulb = null;
    this.bulbservice.getBulbs(this.selectedRoom.id).subscribe(
      bulbs => {
        this.bulbs = bulbs;
      },
      error => console.log(JSON.stringify(error))
    );
  }

}
