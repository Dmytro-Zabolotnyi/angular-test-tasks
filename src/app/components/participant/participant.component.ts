import { Component, computed, input } from '@angular/core';
import { UserInterface } from 'models/UserInterface';
import { AppService } from 'app/app.service';

@Component({
  selector: 'app-participant',
  standalone: true,
  imports: [],
  templateUrl: './participant.component.html',
  styleUrl: './participant.component.scss'
})
export class ParticipantComponent {
  participant = input.required<UserInterface>();

  constructor(private appService: AppService) {
  }

  participantLabel = computed(() => this.participant().id === this.appService.getCurrentUser().id ? 'You' : this.participant().name);
}
