import { Injectable } from '@angular/core';
import { dummyActivities } from 'mocks/dummy-activities';
import { AppService } from 'app/app.service';
import { ActivityType } from 'enums/ActivityType';
import { ActivityInterface } from 'models/ActivityInterface';

@Injectable({providedIn: 'root'})
export class ActivityService {
  private readonly activityList: ActivityInterface[];

  constructor(private appService: AppService) {
    const activities = localStorage.getItem('activities');
    this.activityList = activities ? JSON.parse(activities) : dummyActivities;
  }

  getUserActivities() {
    return this.activityList.filter((activity) => activity.creator.id === this.appService.getCurrentUser().id && activity.participant.id === this.appService.getParticipantUser().id).sort((a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt));
  }

  addActivity(payload: { note: string, type: ActivityType }) {
    this.activityList.push({
      ...payload,
      id: `${Date.now()}`,
      createdAt: new Date().toISOString(),
      creator: this.appService.getCurrentUser(),
      participant: this.appService.getParticipantUser(),
    });
    this.saveActivities();
  }

  removeActivity(id: string) {
    const index = this.activityList.findIndex((activity) => activity.id === id);
    if (index >= 0) {
      this.activityList.splice(index, 1);
      this.saveActivities();
    }
  }

  saveActivities() {
    localStorage.setItem('activities', JSON.stringify(this.activityList));
  }
}
