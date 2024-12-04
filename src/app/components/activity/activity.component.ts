import { Component, input, output } from '@angular/core';
import { ActivityInterface } from 'models/ActivityInterface';
import { NoteDescriptions } from 'constants/NoteDescriptions';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ParticipantComponent } from '@components/participant/participant.component';

@Component({
  selector: 'app-activity',
  standalone: true,
  imports: [
    ParticipantComponent,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './activity.component.html',
  styleUrl: './activity.component.scss'
})
export class ActivityComponent {
  activity = input.required<ActivityInterface>();
  deleteClicked = output();

  onDeleteClick() {
    this.deleteClicked.emit();
  }

  protected readonly NoteDescription = NoteDescriptions;
}
