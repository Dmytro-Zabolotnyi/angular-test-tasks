import { ActivityInterface } from 'models/ActivityInterface';
import { ActivityType } from 'enums/ActivityType';

export const dummyActivities: ActivityInterface[] = [
  {
    id: 't4',
    creator: {
      id: 'u1',
      name: 'John Doe',
    },
    participant: {
      id: 'u2',
      name: 'Milton Romaguera',
    },
    type: ActivityType.MeetingNote,
    note:
      'And a more formal meeting.',
    createdAt: '2024-12-01T10:08:19.000Z',
  },
  {
    id: 't3',
    creator: {
      id: 'u1',
      name: 'John Doe',
    },
    participant: {
      id: 'u2',
      name: 'Milton Romaguera',
    },
    type: ActivityType.Phone,
    note:
      'Then we had a follow-up phone call.',
    createdAt: '2024-11-29T10:08:19.000Z',
  },
  {
    id: 't2',
    creator: {
      id: 'u1',
      name: 'John Doe',
    },
    participant: {
      id: 'u2',
      name: 'Milton Romaguera',
    },
    type: ActivityType.Coffee,
    note:
      'We had coffee!',
    createdAt: '2024-11-28T10:08:19.000Z',
  },
  {
    id: 't1',
    creator: {
      id: 'u1',
      name: 'John Doe',
    },
    participant: {
      id: 'u2',
      name: 'Milton Romaguera',
    },
    type: ActivityType.Message,
    note:
      'A test note of message type!',
    createdAt: '2024-11-20T10:08:19.000Z',
  },
]
