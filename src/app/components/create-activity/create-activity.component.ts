import { Component, computed } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppService } from 'app/app.service';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ActivityType } from 'enums/ActivityType';
import { ActivityTypeIcons } from 'constants/ActivityTypeIcons';
import { ActivityService } from '@components/activity/activity.service';

@Component({
  selector: 'app-create-activity',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './create-activity.component.html',
  styleUrl: './create-activity.component.scss'
})
export class CreateActivityComponent {
  form = {
    note: '',
    type: ActivityType.Message
  };

  constructor(protected appService: AppService, protected activityService: ActivityService) {
  }

  participantName = computed(() => this.appService.getParticipantUser().name);
  protected readonly ActivityTypeIcons = ActivityTypeIcons;

  activityTypeValues = Object.values(ActivityType) as ActivityType[];

  onTypeButtonClick = (type: string) => {
    this.form.type = type as ActivityType;
  }

  onSubmitActivity = () => {
    this.activityService.addActivity(this.form);
    this.form = { note: '', type: ActivityType.Message };
  }
}
