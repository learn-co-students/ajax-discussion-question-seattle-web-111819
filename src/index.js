const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  const addButton = document.querySelector("button")
  addButton.addEventListener("click", function () {
    getData()
  }) 
});

function getData() {
fetch ("https://randomuser.me/api/")
.then (res => res.json())
.then (data => addPerson(data))
}

function addPerson(data) {
  const h3 = document.getElementById("fullname")
  h3.innerText = data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last;
  
  const h4 = document.getElementById("email")
  h4.textContent = data.results[0].email;
}