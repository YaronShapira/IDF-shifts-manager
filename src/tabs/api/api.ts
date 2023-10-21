import { Helpers } from '@/common/helpers';
import { TMission } from '@/common/types';

const MISSION_KEY = 'missions';

export namespace Api {
  export const getMissions = async () => {
    let missions = JSON.parse(localStorage.getItem(MISSION_KEY) || '[]');

    if (!missions?.length) {
      missions = Helpers.generateDemoMissions();
      localStorage.setItem(MISSION_KEY, JSON.stringify(missions));
    }

    return missions;
  };

  export const saveMission = async (mission: TMission) => {
    const existingMissions = JSON.parse(localStorage.getItem(MISSION_KEY) || '[]');

    existingMissions.push(mission);
    localStorage.setItem(MISSION_KEY, JSON.stringify(existingMissions));
  };
}
