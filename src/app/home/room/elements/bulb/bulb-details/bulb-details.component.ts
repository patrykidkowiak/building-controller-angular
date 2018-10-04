import {Component, Input, OnInit} from '@angular/core';
import {Bulb} from '../bulb';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {BulbService} from '../bulb.service';
import {Room} from '../../../room';

@Component({
  selector: 'app-bulb-details',
  templateUrl: './bulb-details.component.html',
  styleUrls: ['./bulb-details.component.css']
})
export class BulbDetailsComponent implements OnInit {

  @Input() bulb: Bulb;
  @Input() selectedRoom: Room;
  myform: FormGroup;

  constructor(private bulbService: BulbService, private router: Router) {
  }


  ngOnInit() {
    this.myform = new FormGroup({
      timeOn: new FormControl(),
      timeOff: new FormControl(),
      timeSilentOn: new FormControl(),
      timeSilentOff: new FormControl(),
      autoModeCheckbox: new FormControl(),
      silentModeCheckbox: new FormControl(),
      onOff: new FormControl(),
      onAtNight: new FormControl(),
      offAtDay: new FormControl()
    });
  }


  updateBulb() {
    const formData = this.myform.value;
    console.log(formData.timeOn.toString());
    const requestData = {
        id: this.bulb.id,
        room: this.selectedRoom,
        bulbName: this.bulb.bulbName,
        onOff: formData.onOff,
        offAtDay: formData.offAtDay,
        onAtNight: formData.onAtNight,
        autoMode: {
          autoModeActive: formData.autoModeCheckbox,
          autoTimeOnH: formData.timeOn.toString().split(':')[0],
          autoTimeOnM: formData.timeOn.toString().split(':')[1],
          autoTimeOffH: formData.timeOff.toString().split(':')[0],
          autoTimeOffM: formData.timeOff.toString().split(':')[1]
        },
        silentMode: {
          silentModeActive: formData.silentModeCheckbox,
          silentIntensity: 5,
          silentTimeOnH: formData.timeSilentOn.toString().split(':')[0],
          silentTimeOnM: formData.timeSilentOn.toString().split(':')[1],
          silentTimeOffH: formData.timeSilentOff.toString().split(':')[0],
          silentTimeOffM: formData.timeSilentOff.toString().split(':')[1],
        }
      }
    ;
    this.bulbService.updateBulb(requestData).subscribe(d => {
        console.log(JSON.stringify(d));
        // this.router.navigate(['/owners']);
      },
      err => console.log(JSON.stringify(err)));
  }

}
