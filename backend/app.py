from flask import Flask, jsonify, request
from flask_cors import CORS
import requests
import csv
import io
import json

app = Flask(__name__)

CSV_URL = "https://storage.googleapis.com/take-home-assignments/symptoms-data/symptoms.csv"


@app.route('/api/get_csv_data', methods=['GET'])
def get_csv_data():
    try:
        response = requests.get(CSV_URL)

        # Check if the request was successful
        if response.status_code == 200:
            # Read the CSV data from the response content
            csv_data = response.content.decode('utf-8')

            # Parse the CSV data
            csv_reader = csv.reader(io.StringIO(csv_data))

            # Create a set to store unique values
            unique_values = set()
            hm = {}

            # Loop through the CSV rows and select from the 2nd column onwards
            for row in csv_reader:
                # Check if the row has at least 2 columns
                if len(row) >= 2:
                    # Flatten the row and add its elements to the set
                    unique_values.update(row[1:])
                    row_values = [value for value in row[1:]
                                  if value.strip() != '']
                    key_tuple = tuple(row_values)
                    key_str = ','.join(key_tuple)
                    hm[key_str] = row[0]

            # Convert the set back to a list to remove duplicates
            unique_values_list = list(unique_values)

            # Remove empty strings from the list
            unique_values_list = [
                value for value in unique_values_list if value.strip() != '']

            # Return the unique values without empty strings as JSON
            return jsonify({'data': unique_values_list, 'hashmap': hm})

        else:
            return jsonify({'error': 'Failed to fetch CSV data'}), 404
    except Exception as e:
        return jsonify({'error': str(e)}),404
    
@app.route('/api/get_drug', methods=['POST'])
def get_drug():
    api_url = 'https://drug-app-7o2mnqk4sa-as.a.run.app/getDrugs/'
    data = json.loads(request.get_data().decode('utf-8'))
    condition = data.get('condition')
    drug_url = api_url + condition

    response = requests.get(drug_url)

    if response.status_code == 200:
        data = response.content.decode('utf-8')
        return jsonify(data)
    else:
        return jsonify({'error': 'Failed to fetch drugs'}), 404

if __name__ == '__main__':
    CORS(app)
    app.run(debug=True, port=5000)
