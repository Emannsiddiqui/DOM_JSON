const jsonObject = {
    "name": "Eman",
    "age" : 20,
    "isStudent": true,
    "skills": ["html", "css", "JS"],
    "address":{
        "city": "Karachi",
        "town": "North Nazimabad"
    }
}

const jsonString = JSON.stringify(jsonObject);
console.log(jsonString);

const jsonObj = JSON.parse(jsonString);
console.log(jsonObj);

//fetching intro file
fetch('intro.json')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error('Error:', error));

//Sending JSON Data to a Server
const newData ={
    university: "SSUET",
    college: "Khatoon-e-Pakistan"
};

fetch('intro.json', {
    method: 'POST',
    headers: {
        'content-Type': 'application/json',
    },
    body: JSON.stringify(newData)
})
    .then(response => response.json())
    .then(data => {
        console.log('success', data);
    })
    .catch(error => console.error('Error: ', error));