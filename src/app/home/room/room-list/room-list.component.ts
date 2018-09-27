import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Home} from '../../home';
import {Room} from '../room';
import {RoomService} from '../room.service';
import {BulbService} from '../bulb/bulb.service';
import {ViewEncapsulation} from '@angular/compiler/src/core';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnChanges {

  @Input() homeId: number;
  @Input() homeName: string;

  rooms: Room[];
  selectedRoom: Room;

  constructor(private roomService: RoomService, private  bulbService: BulbService) {
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedRoom = null;
    this.roomService.getRooms(this.homeId).subscribe(
      rooms => {
        this.rooms = rooms;
      },
      error => console.log(JSON.stringify(error))
    );
  }
}
