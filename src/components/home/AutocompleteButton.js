import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchButton from './SearchButton';
import DrugRecommendation from '../DrugReccomendation';

const containerStyle = {
  margin: '40px',
  marginLeft: '20px',
  backgroundColor: '#E0EDF4',
  padding: '20px',
  borderRadius: '10px',
};

const autocompleteStyle = {
  width: '100%',
};

export default function AutocompleteButton({ symptoms, hashmap, condition }) {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#4F709C' }}>SYMPTOM CHECKER</h1>
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
            variant="outlined"
          />
        )}
      />
      <SearchButton symptoms={selectedSymptoms} hashmap={hashmap} condition={condition} setSelectedSymptoms={setSelectedSymptoms}/>
    </div>
  );
}
