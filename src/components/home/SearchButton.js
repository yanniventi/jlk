import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import DrugRecommendation from "../DrugReccomendation";

export default function SearchButton({ symptoms, hashmap, setSelectedSymptoms }) {
  const [searchResult, setSearchResult] = useState('');
  const [showDrugs, setShowDrugs] = useState(false); //State to control whether to display drugs

  //update searchResult when symptoms change
  useEffect(() => {
    if (symptoms.length === 0) {
        setSearchResult('');
        setShowDrugs(false);
        return; 
      }

    // Convert the symptoms array to a string for comparison
    const symptomsString = symptoms.join(',');

    for (const key in hashmap) {
      const keyArray = key.split(',');

      // for comparison
      const sortedSymptoms = [...symptoms].sort();
      const sortedKeyArray = [...keyArray].sort();

      if (JSON.stringify(sortedSymptoms) === JSON.stringify(sortedKeyArray)) {
        setSearchResult(hashmap[key]);
        setShowDrugs(true); //when a match is found
        return;
      }
    }

    setSearchResult('No match found');
  }, [symptoms, hashmap]);

  const handleSearchClick = () => {
    const symptomsString = symptoms.join(',');

    for (const key in hashmap) {
      const keyArray = key.split(',');

      //for comparison
      const sortedSymptoms = [...symptoms].sort();
      const sortedKeyArray = [...keyArray].sort();


      if (JSON.stringify(sortedSymptoms) === JSON.stringify(sortedKeyArray)) {
        setSearchResult(hashmap[key]);
        setShowDrugs(true); //showDrugs to true when a match is found
        return; 
      }
    }

    setSearchResult('No match found');
  };

  return (
    <>
      <Button
        onClick={handleSearchClick}
        style={{ fontSize: "20px" }}
      >
        {searchResult}
      </Button>
      {showDrugs && <DrugRecommendation condition={searchResult} selectedSymptoms={setSelectedSymptoms}/>}
    </>
  );
}