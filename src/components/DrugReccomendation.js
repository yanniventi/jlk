import React, { useState, useEffect } from 'react';
import { SearchButton } from './home';

export default function DrugRecommendation({ condition, setSelectedSymptoms }) {
  const [drugs, setDrugs] = useState('No drugs found');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/get_drug', {
                method: 'POST',        
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ condition: condition }),
            });
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const retrievedDrugs = await response.json();
            setDrugs(retrievedDrugs);
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    }
    fetchData();
  }, [condition, setSelectedSymptoms, drugs]);

  return (
    <div>
        {drugs}
    </div>
  );
}
