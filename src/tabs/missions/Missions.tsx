import { TMission } from '@/common/types';
import Mission from './Mission';

interface IMissions {
  missions: TMission[];
  onShiftClick: any;
}

function Missions({ missions, onShiftClick }: IMissions) {
  return (
    <div style={{ display: 'flex', gap: '20px' }}>
      {missions?.map((mission) => (
        <Mission key={mission.name} mission={mission} onShiftClick={onShiftClick} />
      ))}
    </div>
  );
}

export default Missions;
