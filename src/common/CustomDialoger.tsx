import { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function CustomDialoger({ isDialogerOpen, setIsDialogerOpen, dialogerFields, dialogerAction }) {
  const [formData, setFormData] = useState({});

  const cleanUpDialoger = () => {
    setIsDialogerOpen(false);
    setFormData({});
  };

  const closeDialoger = () => cleanUpDialoger();

  const saveDialoger = () => {
    dialogerAction(formData);
    cleanUpDialoger();
  };

  return (
    <Dialog open={isDialogerOpen} onClose={closeDialoger}>
      <DialogTitle>Add New Shift</DialogTitle>
      <DialogContent>
        {dialogerFields.map((field) => (
          <TextField
            key={field.name}
            name={field.name}
            label={field.label}
            type={field.type}
            value={formData[field.name] || ''}
            onChange={(event) => {
              setFormData((prevData) => ({
                ...prevData,
                [field.name]: event.target.value,
              }));
            }}
            fullWidth
            margin="dense"
          />
        ))}
      </DialogContent>
      <DialogActions>
        <Button onClick={closeDialoger} color="primary">
          Cancel
        </Button>
        <Button onClick={saveDialoger} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default CustomDialoger;
