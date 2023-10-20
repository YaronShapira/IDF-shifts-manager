import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import { TShift } from '@/common/types';

const TIME_SLOT_DURATION = 60 * 60 * 1000; // One hour in milliseconds
const CURRENT_DAY_START = new Date().setHours(0, 0, 0, 0);

const shiftsForToday: TShift[] = [
  {
    startTime: CURRENT_DAY_START,
    endTime: CURRENT_DAY_START + 3 * TIME_SLOT_DURATION,
    people: ['Moshe', 'Yael'],
  },
  {
    startTime: CURRENT_DAY_START + 3 * TIME_SLOT_DURATION,
    endTime: CURRENT_DAY_START + 6 * TIME_SLOT_DURATION,
    people: ['Dvir', 'Tamar'],
  },
  {
    startTime: CURRENT_DAY_START + 6 * TIME_SLOT_DURATION,
    endTime: CURRENT_DAY_START + 9 * TIME_SLOT_DURATION,
    people: ['Lior', 'Shir'],
  },
  {
    startTime: CURRENT_DAY_START + 9 * TIME_SLOT_DURATION,
    endTime: CURRENT_DAY_START + 12 * TIME_SLOT_DURATION,
    people: ['Itay', 'Noam'],
  },
  {
    startTime: CURRENT_DAY_START + 12 * TIME_SLOT_DURATION,
    endTime: CURRENT_DAY_START + 15 * TIME_SLOT_DURATION,
    people: ['Avigail', 'Elad'],
  },
  {
    startTime: CURRENT_DAY_START + 15 * TIME_SLOT_DURATION,
    endTime: CURRENT_DAY_START + 18 * TIME_SLOT_DURATION,
    people: ['Ruth', 'Yonatan'],
  },
  {
    startTime: CURRENT_DAY_START + 18 * TIME_SLOT_DURATION,
    endTime: CURRENT_DAY_START + 21 * TIME_SLOT_DURATION,
    people: ['Adel', 'Ofir'],
  },
  {
    startTime: CURRENT_DAY_START + 21 * TIME_SLOT_DURATION,
    endTime: CURRENT_DAY_START + 24 * TIME_SLOT_DURATION,
    people: ['Amit', 'Shani'],
  },
];

const ShiftTable = () => {
  const hoursPerShift = 3;

  return (
    <Paper sx={{ maxWidth: 1000, margin: 'auto', overflow: 'hidden' }}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6">Time</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6">People on Shift</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {shiftsForToday.map((shift, shiftIndex) => {
              const rows = [];

              for (let i = 0; i < hoursPerShift; i += 1) {
                const hour = new Date(shift.startTime).getHours() + i;

                if (i === 0) {
                  // For the first hour of the shift, include the names with a rowspan
                  rows.push(
                    <TableRow key={shiftIndex * hoursPerShift + i}>
                      <TableCell>{`${String(hour).padStart(2, '0')}:00`}</TableCell>
                      <TableCell rowSpan={hoursPerShift}>{shift.people.join(', ')}</TableCell>
                    </TableRow>,
                  );
                } else {
                  // For subsequent hours, just show the hour
                  rows.push(
                    <TableRow key={shiftIndex * hoursPerShift + i}>
                      <TableCell>{`${String(hour).padStart(2, '0')}:00`}</TableCell>
                    </TableRow>,
                  );
                }
              }

              return rows;
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default ShiftTable;
