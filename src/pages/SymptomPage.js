import { Helmet } from 'react-helmet-async';
import { Dropdown, Autocomplete } from '../components/home';
import { useEffect, useState } from 'react';

export default function SymptomPage() {
    const [symptoms, setSymptoms] = useState('')
    const [hashmap, setHashmap] = useState('')
    const [loading, setLoading] = useState(false)
    useEffect(() => {
      async function fetchData() {
        try {
          setLoading(true);
          const response = await fetch('http://localhost:5000/api/get_csv_data'); 
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const csvData = await response.json();
          console.log(csvData)
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
      <>
        <Helmet>
          <title> Login </title>
        </Helmet>

        <Autocomplete symptoms={symptoms} hashmap={hashmap}/>
      </>
    );
  }