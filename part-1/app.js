let favNumber = 7; 
let baseURL = 'http://numberapi.com';

// 1. Make a request to the Numbers API to get a fact about your fav number. Include JSON query key.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
});

// 2. Figure out how to get data on multiple numbers in a single request. Put all the number facts on a page.
let favNumber = [6, 15, 23];
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
    console.log(data);
});

// 3. Use the API to get 4 facts on your fav number. 
Promise.all(
    Array.from({ length: 4 }, () => {
        return $.getJSON(`${baseURL}/${favNumber}?json`);
    })
).then(facts => {
    facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});