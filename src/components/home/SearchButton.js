import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DrugRecommendation from "../DrugReccomendation";

export default function SearchButton({ symptoms, hashmap, setSelectedSymptoms }) {
  const [searchResult, setSearchResult] = useState('');
  const [showDrugs, setShowDrugs] = useState(false); //State to control whether to display drugs

  // Use useEffect to update searchResult when symptoms change
  useEffect(() => {
    // Check if the symptoms array is empty
    if (symptoms.length === 0) {
        setSearchResult('');
        setShowDrugs(false);
        return; // Don't proceed with the HTTP request if the search bar is empty
      }

    // Convert the symptoms array to a string for comparison
    const symptomsString = symptoms.join(',');

    // Iterate through the keys in the hashmap
    for (const key in hashmap) {
      const keyArray = key.split(',');

      // Sort both the symptoms array and the key array for comparison
      const sortedSymptoms = [...symptoms].sort();
      const sortedKeyArray = [...keyArray].sort();

      // Check if the sorted arrays are equal
      if (JSON.stringify(sortedSymptoms) === JSON.stringify(sortedKeyArray)) {
        setSearchResult(hashmap[key]);
        setShowDrugs(true); //Set showDrugs to true when a match is found
        return; // Exit the loop if a match is found
      }
    }

    // If no match is found, set searchResult to an appropriate message
    setSearchResult('No match found');
  }, [symptoms, hashmap]);

  // Define the onClick function
  const handleSearchClick = () => {
    // This part can remain the same if you only want to update on button click
    const symptomsString = symptoms.join(',');

    // Iterate through the keys in the hashmap
    for (const key in hashmap) {
      const keyArray = key.split(',');

      // Sort both the symptoms array and the key array for comparison
      const sortedSymptoms = [...symptoms].sort();
      const sortedKeyArray = [...keyArray].sort();

      // Check if the sorted arrays are equal
      if (JSON.stringify(sortedSymptoms) === JSON.stringify(sortedKeyArray)) {
        setSearchResult(hashmap[key]);
        setShowDrugs(true); //Set showDrugs to true when a match is found
        return; // Exit the loop if a match is found
      }
    }

    // If no match is found, set searchResult to an appropriate message
    setSearchResult('No match found');
  };

  return (
    <>
      <Button onClick={handleSearchClick}>{searchResult}</Button>
      {showDrugs && <DrugRecommendation condition={searchResult} selectedSymptoms={setSelectedSymptoms}/>}
    </>
  );
}
