import { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Checkbox, FormControlLabel } from '@mui/material';

interface ISelectPeople {
  isOpened: boolean;
  setIsOpened: (isOpened: boolean) => void;
  action: (selectedPeople: string[]) => void;
  people: string[];
}

const SelectPeople = ({ isOpened, setIsOpened, action, people }: ISelectPeople) => {
  const [checkedPeople, setCheckedPeople] = useState({});

  const handleCheckboxChange = (event) => {
    setCheckedPeople((prev) => ({ ...prev, [event.target.name]: event.target.checked }));
  };

  const handleSubmit = () => {
    const selectedPeople = Object.keys(checkedPeople).filter((name) => checkedPeople[name]);
    action(selectedPeople);
    cleanUpDialoger();
  };

  const cleanUpDialoger = () => {
    setCheckedPeople({});
    setIsOpened(false);
  };

  return (
    <Dialog open={isOpened} onClose={cleanUpDialoger}>
      <DialogTitle>Select People</DialogTitle>
      <DialogContent>
        {people.map((person) => (
          <FormControlLabel
            key={person}
            control={<Checkbox checked={checkedPeople[person] || false} onChange={handleCheckboxChange} name={person} />}
            label={person}
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={cleanUpDialoger} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SelectPeople;
