// Get data from an API via xmlhttprequest method

// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}') 


const xhr = new XMLHttpRequest();
const user_url = 'https://randomuser.me/api/';

xhr.open('GET', user_url);

xhr.onload = function() {
    if(xhr.readyState === 4) {
        const data = JSON.parse(this.response);
        // console.log(data);
        const user = data.results[0].email;
        console.log(user);
    }
}

xhr.send();