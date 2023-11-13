const joke = document.querySelector('#joke');
const btnGetJoke = document.querySelector('#joke-btn');

function getJoke() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');
    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const response = JSON.parse(this.responseText);
            joke.innerText = response.value;
        } else {
            joke.innerText = 'Oops! Something went wrong...';
        }
    }
    xhr.send();
}

btnGetJoke.addEventListener('click', getJoke);

getJoke();