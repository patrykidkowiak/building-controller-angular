import {Component, Input, OnInit} from '@angular/core';
import {Home} from '../../home';
import {Room} from '../room';
import {RoomService} from '../room.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {

  @Input() home: Home;

  rooms: Room[];
  selectedRoom: Room;

  constructor(private roomService: RoomService) {
  }

  onSelect(room: Room): void {
    this.selectedRoom = room;
  }

  ngOnInit() {
    this.roomService.getRooms(this.home.id).subscribe(
      rooms => {
        this.rooms = rooms;
      },
      error => console.log(JSON.stringify(error))
    );
  }
}
