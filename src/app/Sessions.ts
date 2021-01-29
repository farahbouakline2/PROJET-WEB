import { Session } from './session';
export const SESSIONITEMS: Session[] = [
 { id: 1,
    name: 'Formation Web',
    track: 'MEAN Stack',
    date: new Date('2018-06-13'),
    duree: 3,
    adress: 'Ensit',
    participants: 0,
    isCompleted : false
    },
    {
        id: 2,
        name: 'Formation Web',
        track: 'nodeJS',
        date: new Date('2018-08-10'),
        duree:  5,
        adress: 'Ensit',
        participants: 0,
    isCompleted : false
    },
    {
        id: 3,
        name: 'Formation Mobile',
        track: 'Ionic',
        date: new Date('2018-07/20'),
        duree: 2,
        adress: 'Ensit',
        participants: 0
        ,
    isCompleted : false
    }
   ];
