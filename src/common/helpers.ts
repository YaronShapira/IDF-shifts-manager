import CONFIG from '@/config';
import { TMission, TShift } from './types';

const CURRENT_DAY_START = new Date().setHours(0, 0, 0, 0);

export namespace Helpers {
  export const capitalize = (str: string): string => str && str.charAt(0).toUpperCase() + str.slice(1);

  export const generateDemoMissions = (): TMission[] => {
    const numberOfMissions = 4; // or any other number you'd like
    const totalHours = 24;
    const peoplePool = [
      'Moshe',
      'Yael',
      'Dvir',
      'Tamar',
      'Lior',
      'Shir',
      'Itay',
      'Noam',
      'Avigail',
      'Elad',
      'Ruth',
      'Yonatan',
      'Adel',
      'Ofir',
      'Amit',
      'Shani',
    ];

    const getRandomPeople = (count: number) => {
      const shuffled = peoplePool.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, count);
    };

    const missions: TMission[] = [];

    for (let i = 0; i < numberOfMissions; i += 1) {
      const hoursPerShift = getNumberBetweenTwoValues(2, 5); // Each mission has shifts of 3 hours in this example
      const totalShifts = totalHours / hoursPerShift;
      const missionName = `Mission ${i + 1}`;
      const missionPeople = getRandomPeople(4); // Randomly pick 4 people for each mission

      const shifts: TShift[] = [];

      for (let j = 0; j < totalShifts; j += 1) {
        const startTime = CURRENT_DAY_START + j * hoursPerShift * CONFIG.TIME_SLOT_DURATION;
        const endTime = startTime + hoursPerShift * CONFIG.TIME_SLOT_DURATION;
        shifts.push({
          startTime,
          endTime,
          people: getRandomPeople(2), // Randomly pick 2 people for each shift
        });
      }

      missions.push({
        name: missionName,
        hoursPerShift,
        people: missionPeople,
        shifts,
      });
    }

    return missions;
  };

  export const initializeShifts = (hoursPerShift: number): TShift[] => {
    const numberOfShifts = 24 / hoursPerShift;
    return Array(numberOfShifts).fill({}).map((_, index) => ({
      startTime: new Date().setHours(index * hoursPerShift, 0, 0, 0),
      people: [],
    }));
  };

  export const getNumberBetweenTwoValues = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
}
