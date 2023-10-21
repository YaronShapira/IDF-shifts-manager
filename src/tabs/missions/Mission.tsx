import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TMission } from '@/common/types';

interface IMission {
  mission: TMission;
  onShiftClick: any;
}

function Mission({ mission, onShiftClick }: IMission) {
  return (
    <TableContainer component={Paper} style={{ marginBottom: '20px' }}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Time</Typography>
            </TableCell>
            <TableCell>
              <Typography variant="h6">{mission.name}</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(24).keys()].map((hour) => {
            const shift = mission.shifts.find((shift) => new Date(shift.startTime).getHours() === hour);
            const shiftStartTimestamp = new Date().setHours(hour, 0, 0, 0);
            const isNewShift = hour % mission.hoursPerShift === 0;

            return (
              <TableRow key={hour}>
                <TableCell>{`${String(hour).padStart(2, '0')}:00`}</TableCell>
                {isNewShift && (
                  <TableCell rowSpan={mission.hoursPerShift} onClick={() => onShiftClick(mission.name, shiftStartTimestamp)}>
                    {shift ? shift.people.join(', ') : ''}
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Mission;
