import { TMission } from '@/common/types';
import { Api } from '../api/api';

export namespace Actions {
  export const saveMission = async (mission: TMission): Promise<void> => {
    try {
      await Api.saveMission(mission);
    } catch (error) {
      console.error(error);
      // Error snackbar
    }
  };

  export const getMissions = async (): Promise<TMission[]> => {
    try {
      const missions = await Api.getMissions();
      console.log(missions);
      return missions;
    } catch (error) {
      console.error(error);
      // Error snackbar
    }
  };
}
