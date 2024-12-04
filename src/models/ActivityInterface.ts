import { ActivityType } from 'enums/ActivityType';
import { UserInterface } from 'models/UserInterface';

export interface ActivityInterface {
  id: string;
  creator: UserInterface;
  participant: UserInterface;
  type: ActivityType;
  note: string;
  createdAt: string;
}
