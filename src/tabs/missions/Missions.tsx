import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Mission from './Mission';

function Missions({ missions }) {
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h6">Time</Typography>
            </TableCell>
            {missions?.map((mission, index) => (
              <TableCell key={index}>
                <Typography variant="h6">{mission.name}</Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {[...Array(24).keys()].map((hour) => (
            <TableRow key={hour}>
              <TableCell>{`${String(hour).padStart(2, '0')}:00`}</TableCell>
              {missions.map((mission) => {
                const shiftStartingNow = mission.shifts.find((shift) => new Date(shift.startTime).getHours() === hour);

                if (shiftStartingNow) {
                  return (
                    <TableCell key={mission.name} rowSpan={mission.hoursPerShift}>
                      {shiftStartingNow.people.join(', ')}
                    </TableCell>
                  );
                }

                // If no shift is starting at this hour, it means it's within a shift that has already started.
                // We don't need to render a TableCell in this case as the previous TableCell will span multiple rows.
                return null;
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Missions;
