import { ActivityType } from 'enums/ActivityType';

export const NoteDescriptions = {
  [ActivityType.Message]: 'added a message to',
  [ActivityType.Phone]: 'had a call with',
  [ActivityType.Coffee]: 'had a coffee with',
  [ActivityType.Beer]: 'had a beer with',
  [ActivityType.MeetingNote]: 'added a note to',
}
