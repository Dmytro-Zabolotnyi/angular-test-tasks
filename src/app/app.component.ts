import { Component } from '@angular/core';
import { ActivityComponent } from '@components/activity/activity.component';
import { ListItemComponent } from '@components/list-item/list-item.component';
import { ActivityService } from '@components/activity/activity.service';
import { CreateActivityComponent } from '@components/create-activity/create-activity.component';
import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';

dayjs.extend(updateLocale)

dayjs.updateLocale('en', {
  relativeTime: {
    future: "in %s",
    past: "%s ago",
    s: 'now',
    m: "1min",
    mm: "%dmin",
    h: "1h",
    hh: "%dh",
    d: "1d",
    dd: "%dd",
    M: "1mon",
    MM: "%dmon",
    y: "1y",
    yy: "%dy"
  }
})

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [ListItemComponent, ActivityComponent, CreateActivityComponent],
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private activityService: ActivityService) {
  }

  onDeleteClicked = (id: string) => {
    this.activityService.removeActivity(id);
  }

  get userActivities() {
    return this.activityService.getUserActivities();
  };
}
