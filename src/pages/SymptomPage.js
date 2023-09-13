import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Autocomplete } from '../components/home';

const pageStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh', // Make the page take up the entire viewport height
};

const containerStyle = {
  backgroundColor: '#E0EDF4',
  width: '80%',
  padding: '20px',
  borderRadius: '20px',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
};

const headerStyle = {
  color: '#4F709C',
  fontSize: '24px',
  marginBottom: '20px',
};

export default function SymptomPage() {
  const [symptoms, setSymptoms] = useState('');
  const [hashmap, setHashmap] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/get_csv_data');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const csvData = await response.json();
        console.log(csvData);
        setSymptoms(csvData.data);
        setHashmap(csvData.hashmap);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <div style={pageStyle}>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div style={containerStyle}>
        <header>
          <h1 style={headerStyle}>JLK</h1>
        </header>
        <Autocomplete symptoms={symptoms} hashmap={hashmap} />
      </div>
    </div>
  );
}
