/* T35 - Capstone Project - City Data

To complete this task I have used the code from the task books and links given.

*/

// Code to gather city data of population and elevation
let items = [];  // empty array to store fetched data

// Access and code snippet from https://rapidapi.com/wirefreethought/api/geodb-cities to get data
let options = {
method: 'GET',
headers: {
	'X-RapidAPI-Key': 'ENTER YOUR API KEY HERE',
	'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q5465', options)     // API link
    .then(res => res.json())                                                    // convert data received into object                          
    .then((result) => {                                 
        items = result; 
        console.log(`Cape Town Population: ${items["data"]["population"]}`)     // displays population
        console.log(`Cape Town Elevation (Metres): ${items["data"]["elevationMeters"]}`)    // displays elevation
    }),

    (error) => {                          // error function run if fetch not run
        console.log(error);
    }



// Code to gather city weather information 
let weather = []; // empty array to store fetched data

// Access and code snippet from https://rapidapi.com/weatherbit/api/weather/ to get data
let options2 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ENTER YOUR API KEY HERE',
		'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
	}
};

fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=18.425&lat=-33.925', options2)  // API link
    .then(res => res.json())                        
    .then((result) => {                                 
        weather = result; 

        console.log(`Current Temperature: ${weather["data"][0]["temp"]}\u00B0C`)        // displays current temperature
    
    }),

    (error) => {                          // error function run if fetch not run
        console.log(error);
    }