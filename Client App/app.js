//import fetch from 'node-fetch';
//var fetch = require('node-fetch');
const GRAPHQL_URL = "http://localhost:9000/";
async function fetchGreeting()
{
    const response = await fetch(GRAPHQL_URL,{
        method : 'POST',
        headers : {
            'content-type' : 'application/json'
        },
        body : JSON.stringify({
            query : `
                query {
                    greeting
                }
            `
        }),
    });
    const {data} = await response.json();
    return(data);
}
const element = document.getElementById('greeting');
element.textContent = 'Loading...';
const res = await fetchGreeting().then((data)=>element.textContent = data.greeting);