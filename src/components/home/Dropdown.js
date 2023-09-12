import * as React from 'react';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const styles = {
  container: {
    width: 150, // Adjust the width to make it smaller
    margin: 'auto', // Center the checkbox horizontally
    marginTop: 25, // Add top margin for spacing
    backgroundColor: '#AEC6CF', // Add a background color
    padding: 16, // Add padding for visual separation
    borderRadius: 8, // Add rounded corners
  },
};

export default function CheckboxComponent() {
  const [isChecked, setIsChecked] = React.useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <Box sx={styles.container}>
      <FormControlLabel
        control={
          <Checkbox
            checked={isChecked}
            onChange={handleCheckboxChange}
            color="primary"
          />
        }
        label="Muscle Wasting"
      />
    </Box>
  );
}
