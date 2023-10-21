import { Helpers } from '@/common/helpers';
import { TMission, TShift } from '@/common/types';

const MISSION_KEY = 'missions';

export namespace Api {
  export const getMissions = async () => {
    // eslint-disable-next-line prefer-const
    let missions: TMission[] = JSON.parse(localStorage.getItem(MISSION_KEY) || '[]');

    // if (!missions?.length) {
    //   missions = Helpers.generateDemoMissions();
    //   localStorage.setItem(MISSION_KEY, JSON.stringify(missions));
    // }

    return missions;
  };

  export const saveMission = async (mission: TMission) => {
    const existingMissions: TMission[] = JSON.parse(localStorage.getItem(MISSION_KEY) || '[]');

    existingMissions.push(mission);
    localStorage.setItem(MISSION_KEY, JSON.stringify(existingMissions));
  };

  export const saveShift = async (mission: TMission, shift: TShift) => {
    const existingMissions: TMission[] = JSON.parse(localStorage.getItem(MISSION_KEY) || '[]');

    const missionToUpdate = existingMissions.find((_mission) => _mission.name === mission.name);
    const shiftIndexToUpdate = missionToUpdate.shifts.findIndex((_shift) => _shift.startTime === shift.startTime);
    if (shiftIndexToUpdate >= 0) {
      // existing shift
      missionToUpdate.shifts[shiftIndexToUpdate] = shift;
    } else {
      // add new shift
      missionToUpdate.shifts.push(shift);
    }

    console.log(existingMissions);
    localStorage.setItem(MISSION_KEY, JSON.stringify(existingMissions));
  };
}
