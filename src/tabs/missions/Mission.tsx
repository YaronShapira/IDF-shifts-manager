import { TableCell } from '@mui/material';

const Mission = ({ mission, currentShift }) => {
  const matchingShift = mission.shifts?.find((shift) => shift.startTime === currentShift.startTime);

  if (matchingShift) {
    return <TableCell>{matchingShift.people.join(', ')}</TableCell>;
  }
  return <TableCell>-</TableCell>; // Empty cell if no matching shift is found for the mission
};

export default Mission;
