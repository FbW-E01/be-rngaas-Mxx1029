import fetch from 'node-fetch';
import axios from 'axios';

// node-fetch for APIs
// fetch('https://jsonplaceholder.typicode.com/todos/16')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(err => console.log("Oh noes", err));

// for not APIs but websites you convert to string instead of objects
// fetch('https://www.google.com')
//     .then(response => response.text())
//     .then(string => console.log(string))
//     .catch(err => console.log("Oh noes", err));

// with axios
// axios.get('https://jsonplaceholder.typicode.com/todos/16')
//     .then((response) => {
//         // console.log(response);
//         // console.log(typeof response);
//         console.log(response.data);
//     })
//     .catch(err => console.log("Oh noes", err));

// error handeling:

const url = 'http://potatoking/';

fetch(url)
    .then(response => {
        if (response.ok) {
            console.log("Ok!")
        } else {
            console.log("Faaaaailed!")
        }
        return response.text()
    })
    .then(string => console.log(string))
    .catch(err => console.log("Oh noes", err));

// with axios you get a lot of info about the error!
// axios.get(url)
//     .then((response) => {
//         // console.log(response);
//         // console.log(typeof response);
//         console.log(response.data);
//     })
//     .catch(err => console.log("Oh noes", err));