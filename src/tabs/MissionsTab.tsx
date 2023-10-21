import { useEffect, useState } from 'react';
import { Paper } from '@mui/material';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import CustomDialoger from '@/common/CustomDialoger';
import { Actions } from './actions/actions';
import Missions from './missions/Missions';
import { TMission } from '@/common/types';

const MissionsTab = () => {
  const [missions, setMissions] = useState<TMission[]>([]);
  const [isDialogerOpen, setIsDialogerOpen] = useState(false);

  useEffect(() => {
    initialData();
  }, []);

  const initialData = async () => {
    const missions = await Actions.getMissions();
    setMissions(missions);
  };

  const saveMission = async (mission: TMission) => {
    await Actions.saveMission(mission);
    initialData();
  };

  return (
    <>
      <Paper sx={{ maxWidth: 1000, margin: 'auto', overflow: 'hidden' }}>
        <Missions missions={missions} />
      </Paper>
      <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: '16px', right: '16px' }} onClick={() => setIsDialogerOpen(true)}>
        <AddIcon />
      </Fab>
      {
        <CustomDialoger
          isDialogerOpen={isDialogerOpen}
          setIsDialogerOpen={setIsDialogerOpen}
          dialogerAction={saveMission}
          dialogerFields={[
            { name: 'name', label: 'Mission Name', type: 'text' },
            { name: 'hoursPerShift', label: 'Hours per Shift', type: 'text' },
            { name: 'people', label: 'People', type: 'text' },
          ]}
        />
      }
    </>
  );
};

export default MissionsTab;
