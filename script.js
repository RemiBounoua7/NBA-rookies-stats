let namesData = []; // To store names and numbers from the CSV

// Load the CSV file
async function loadCSV() {
    const response = await fetch('Model_Prediction on 2020+ draftees.csv');
    const csvText = await response.text();
    const rows = csvText.trim().split('\n');
    
    // Parse the CSV
    rows.forEach((row, index) => {
        if (index > 0) { // Skip header row
            const [name, prediction, year] = row.split(',');
            console.log(prediction)
            namesData.push({ name: name.trim(), prediction: prediction.trim(), year: year.trim() });
        }
    });
    populateList(namesData);
}

// Populate the dropdown list
function populateList(data) {
    const nameList = document.getElementById('nameList');
    nameList.innerHTML = '';
    data.forEach(item => {
        const div = document.createElement('div');
        div.className = 'name-item';
        div.textContent = item.name;
        div.onclick = () => selectName(item);
        nameList.appendChild(div);
    });
    nameList.style.display = 'block';
}

// Filter the dropdown list based on user input
function filterList() {
    const query = document.getElementById('searchBox').value.toLowerCase();
    const filteredData = namesData.filter(item => 
        item.name.toLowerCase().includes(query)
    );
    populateList(filteredData);
}

// Display the selected name's prediction
function selectName(item) {
    document.getElementById('result').textContent = 
        `The model prediction for ${item.name} : ${item.prediction}`;
    document.getElementById('nameList').style.display = 'none';
}

// Initialize the page
loadCSV();
