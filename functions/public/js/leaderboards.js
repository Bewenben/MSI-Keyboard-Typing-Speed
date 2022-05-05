const output = document.querySelector('#output');

const url = 'https://script.google.com/macros/s/AKfycbwRLMrggmPn4znnXVOoRYKNe2YBdmk2uO8-fDeaRimCcBnuhmohRMzzMJIuJtXwYcN9/exec';

document.addEventListener('DOMContentLoaded', init);

function init(){
    fetch(url)
    .then((res) => {return res.json()})
    .then((data)=>{
        console.log(data)
    })
}