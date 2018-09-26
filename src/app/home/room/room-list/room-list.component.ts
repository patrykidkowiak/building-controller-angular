import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Home} from '../../home';
import {Room} from '../room';
import {RoomService} from '../room.service';

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

  constructor(private roomService: RoomService) {
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.roomService.getRooms(this.homeId).subscribe(
      rooms => {
        this.rooms = rooms;
      },
      error => console.log(JSON.stringify(error))
    );
  }
}
