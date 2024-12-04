import { Injectable } from '@angular/core';
import { UserInterface } from 'models/UserInterface';
import { dummyUsers } from 'mocks/dummy-users';

@Injectable({providedIn: 'root'})
export class AppService {
  private readonly currentUser: UserInterface;
  private readonly participantUser: UserInterface;

  constructor() {
    this.currentUser = dummyUsers[0];
    this.participantUser = dummyUsers[1];
  }

  getCurrentUser() {
    return this.currentUser;
  }

  getParticipantUser() {
    return this.participantUser;
  }
}
