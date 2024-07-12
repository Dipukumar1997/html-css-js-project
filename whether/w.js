const URL = "https://randomuser.me/api";
const factp = document.querySelector("#fact");
const btn = document.querySelector("#gf");

const getFacts = async () => {
    try {
        let response = await fetch(URL);
        let data = await response.json();
        // Extracting the first user result from the data array
        const user = data.results[0];
        // Displaying user information
        factp.innerHTML = `
            <p>Name: ${user.name.first} ${user.name.last}</p>
            <p>Email: ${user.email}</p>
            <p>Location: ${user.location.city}, ${user.location.country}</p>
            <img src="${user.picture.medium}" alt="User Picture">
        `;
    } catch (error) {
        console.log('Error fetching user data:', error);
    }
};

btn.addEventListener("click", getFacts);
