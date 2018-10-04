import {SilentMode} from '../../../../models/silentMode';
import {AutoMode} from '../../../../models/autoMode';
import {Room} from '../../room';

export class Bulb {
  id: number;
  room: Room;
  bulbName: string;
  onOff: boolean;
  offAtDay: boolean;
  onAtNight: boolean;
  silentMode: SilentMode;
  autoMode: AutoMode;
}
