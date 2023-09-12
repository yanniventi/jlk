import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchButton from './SearchButton';
import DrugRecommendation from '../DrugReccomendation';

const containerStyle = {
  margin: '20px',
  marginLeft: '20px',
  backgroundColor: '#f5f5f5', // Background color for the container
  padding: '20px', // Padding inside the container
  borderRadius: '10px', // Rounded corners
};

const autocompleteStyle = {
  width: '100%', // Make the Autocomplete component fill the container
};

export default function AutocompleteButton({ symptoms, hashmap, condition }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#4F709C' }}>SYMPTOM CHECKER</h1> {/* Header with blue color */}
      <Autocomplete
        multiple
        id="combo-box-demo"
        options={symptoms}
        value={selectedSymptoms}
        onChange={(event, newValue) => {
          setSelectedSymptoms(newValue);
        }}
        style={autocompleteStyle}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Symptoms"
            variant="outlined" // Add an outline to the input
          />
        )}
      />
      <SearchButton symptoms={selectedSymptoms} hashmap={hashmap} condition={condition} setSelectedSymptoms={setSelectedSymptoms}/>
    </div>
  );
}
