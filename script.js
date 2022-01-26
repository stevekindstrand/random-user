//Hämtar element
let myDiv = document.getElementById("myDiv");
let myBtn = document.getElementById("myBtn");

//Fetch function
let fetchRandomUser = () => {
    fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => userData(data));
};

//Function som skriver ut all information i DOMen
let userData = (data) => {
    //rensar
    myDiv.innerHTML = "";
    
    let randomUser = data.results[0];
    
    let randomImg = document.createElement("IMG");
    randomImg.src = randomUser.picture.large;
    myDiv.append(randomImg);

    myDiv.innerHTML += 
    `<br><br>
    <b>Name: </b>
    ${randomUser.name.title}
    ${randomUser.name.first}
    ${randomUser.name.last}
    <br>
    <b>Phone: </b>
    ${randomUser.cell}
    <br>
    <b>Email: </b>
    ${randomUser.email}
    <br><br>
    <b>Country: </b>
    ${randomUser.location.country}
    <br>
    <b>Adress: </b>
    ${randomUser.location.street.name}
    ${randomUser.location.street.number}
    ${randomUser.location.postcode}
    ${randomUser.location.city}`;
};

fetchRandomUser();

//Hämtar Fetch function på nytt med button
myBtn.addEventListener("click", () => {
    fetchRandomUser();
});