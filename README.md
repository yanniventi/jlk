# Symptom Checker and Drug Recommendation System

This repository contains code for a Symptom Checker and Drug Recommendation System built using React for the front end and Flask for the back end. This system allows users to input their symptoms and receive recommendations for potential medical conditions and associated drug treatments.

## Features

- **Symptom Input**: Users can enter their symptoms using an Autocomplete component that suggests common symptoms.
- **Condition Matching**: The system matches the entered symptoms with a database of medical conditions.
- **Drug Recommendations**: Once a condition is identified, the system provides drug recommendations for the identified condition.
- **Responsive Design**: The user interface is designed to be responsive and user-friendly.

## Code Structure

The code is organized into several components and files:

1. **Frontend (React)**:
   - `AutocompleteButton.js`: Handles symptom input and sends the selected symptoms to the backend for matching.
   - `SearchButton.js`: Initiates the symptom matching process and displays the results.
   - `DrugRecommendation.js`: Displays drug recommendations based on the matched condition.
   - `Autocomplete.js`, and `SearchButton.js` are components used by `AutocompleteButton.js`.

2. **Backend (Flask)**:
   - `app.py`: Defines the Flask application and handles API requests.
   - `/api/get_csv_data`: Retrieves symptom data from an external CSV file, processes it, and returns it to the frontend.
   - `/api/get_drug`: Sends a POST request to an external drug recommendation API based on the identified condition.

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies for both the frontend and backend.
   - For the frontend, run `npm install`.
3. Start the frontend and backend servers separately:
   - For the frontend, run `npm start` in the `frontend` directory.
   - For the backend, navigate to backend folder and run `python app.py`.
4. Access the application in your web browser at `http://localhost:3000`.

## Dependencies

- React: A JavaScript library for building user interfaces.
- Material-UI: A popular UI framework for React.
- Flask: A micro web framework for building web applications in Python.
- Flask-CORS: A Flask extension for handling Cross-Origin Resource Sharing (CORS).
- Requests: A Python library for making HTTP requests.

## External APIs

- This project uses an external drug recommendation API to fetch drug information based on the identified medical condition.

## Data Source

- Symptom data is fetched from an external CSV file containing symptom information.