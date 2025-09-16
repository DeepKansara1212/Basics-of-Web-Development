const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const joke = document.getElementById("joke")

fetch(url).then((response) => {
    return response.json();
}).then((data) => {
    joke.innerHTML = data.joke;
    // console.log(data.flags.political);
}).catch((error) => {
    console.log(error);
});