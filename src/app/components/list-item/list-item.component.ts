import { Component, input } from '@angular/core';
import { ActivityType } from 'enums/ActivityType';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { ActivityTypeIcons } from 'constants/ActivityTypeIcons';
import { MatIconModule } from '@angular/material/icon';

dayjs.extend(relativeTime);

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [
    MatIconModule,
  ],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})

export class ListItemComponent {
  date = input<string>();
  type = input<ActivityType>();

  protected readonly dayjs = dayjs;
  protected readonly ActivityTypeIcons = ActivityTypeIcons;
  protected readonly ActivityType = ActivityType;
}
