import { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CustomDialoger from '@/common/CustomDialoger';
import { Actions } from './actions/actions';
import Missions from './missions/Missions';
import { TMission, TMissionFormData, TShift } from '@/common/types';
import SelectPeople from '@/common/SelectPeople';

const MissionsTab = () => {
  const [missions, setMissions] = useState<TMission[]>([]);
  const [selectedMission, setSelectedMission] = useState<TMission>();
  const [selectedShift, setSelectedShift] = useState<TShift>();
  const [isAddMissionOpen, setIsAddMissionOpen] = useState<boolean>(false);
  const [isSelectPeopleOpen, setIsSelectPeopleOpen] = useState<boolean>(false);

  useEffect(() => {
    initialData();
  }, []);

  const initialData = async () => {
    const missions = await Actions.getMissions();
    setMissions([...missions]);
  };

  const saveMission = async (missionFormData: TMissionFormData) => {
    await Actions.saveMission(missionFormData);
    initialData();
  };

  const onShiftClick = (missionName: string, shiftStartTimestamp: number) => {
    const mission = missions.find((mission) => mission.name === missionName);
    setSelectedMission(mission);
    const shift = mission.shifts.find((_shift) => _shift.startTime === shiftStartTimestamp);
    setSelectedShift(shift ?? { startTime: shiftStartTimestamp, people: [] });
    setIsSelectPeopleOpen(true);
  };

  const selectPeopleAction = async (selectedPeople) => {
    selectedShift.people = selectedPeople;
    console.log(selectedShift);
    await Actions.saveShift(selectedMission, selectedShift);
    initialData();
  };

  return (
    <>
      {/* <Paper sx={{ maxWidth: 1000, margin: 'auto', overflow: 'auto' }}> */}
      <Missions missions={missions} onShiftClick={onShiftClick} />
      {/* </Paper> */}
      <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: '16px', right: '16px' }} onClick={() => setIsAddMissionOpen(true)}>
        <AddIcon />
      </Fab>
      {
        <CustomDialoger
          isOpened={isAddMissionOpen}
          setIsOpened={setIsAddMissionOpen}
          action={saveMission}
          fields={[
            { name: 'name', label: 'Mission Name', type: 'text' },
            { name: 'hoursPerShift', label: 'Hours per Shift', type: 'text' },
            { name: 'people', label: 'People', type: 'text' },
          ]}
        />
      }
      <SelectPeople
        isOpened={isSelectPeopleOpen}
        setIsOpened={setIsSelectPeopleOpen}
        action={selectPeopleAction}
        people={selectedMission?.people || []}
      />
    </>
  );
};

export default MissionsTab;
