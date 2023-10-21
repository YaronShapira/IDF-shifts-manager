import { Helpers } from '@/common/helpers';
import { TMission, TMissionFormData, TShift } from '@/common/types';
import { Api } from '../api/api';

export namespace Actions {
  export const saveMission = async (missionFormData: TMissionFormData): Promise<void> => {
    try {
      const mission: TMission = {
        name: missionFormData.name,
        hoursPerShift: missionFormData.hoursPerShift,
        people: missionFormData.people.split(' '),
        shifts: [],
        // shifts: Helpers.initializeShifts(missionFormData.hoursPerShift),
      };
      await Api.saveMission(mission);
      // Success snackbar
    } catch (error) {
      console.error(error);
      // Error snackbar
    }
  };

  export const getMissions = async (): Promise<TMission[]> => {
    try {
      const missions = await Api.getMissions();
      return missions;
      // Success snackbar
    } catch (error) {
      console.error(error);
      // Error snackbar
    }
  };

  export const saveShift = async (mission: TMission, shift: TShift): Promise<void> => {
    try {
      await Api.saveShift(mission, shift);
      // Success snackbar
    } catch (error) {
      console.error(error);
      // Error snackbar
    }
  };
}
