const body = document.querySelector('body');
const spinner = document.querySelector('.spinner');
const userDetails = document.querySelector('#user');
const btnGenerateUser = document.querySelector('#generate');

function getUser() {
    showSpinner();
    fetch('https://randomuser.me/api/')
        .then((response) => response.json())
        .then((data) => data.results[0])
        .then((user) => showUser(user))
        .finally(() => hideSpinner());
}

function showUser(user) {
    changeBackgroundBasedOnGender(user);
    userDetails.innerHTML = `
        <div class="flex justify-between">
            <div class="flex">
            <img
                class="w-48 h-48 rounded-full mr-8"
                src=${user.picture.large}
            />
            <div class="space-y-3">
                <p class="text-xl">
                <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
                </p>
                <p class="text-xl">
                <span class="font-bold">Email: </span> ${user.email}
                </p>
                <p class="text-xl">
                <span class="font-bold">Phone: </span> ${user.phone}
                </p>
                <p class="text-xl">
                <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.country}
                </p>
                <p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>
            </div>
            </div>
        </div>`;
}

function changeBackgroundBasedOnGender(user) {
    if (user.gender === 'female') {
        body.classList.remove('bg-blue-500');
        body.classList.add('bg-violet-500');
    } else {
        body.classList.remove('bg-violet-500');
        body.classList.add('bg-blue-500');
    }
}

function showSpinner() {
    spinner.style.display = 'block';
}

function hideSpinner() {
    spinner.style.display = 'none';
}

btnGenerateUser.addEventListener('click', getUser);

getUser();