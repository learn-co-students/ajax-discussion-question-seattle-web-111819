const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

function fetchData(){
  let data = fetch('https://randomuser.me/api/')
    .then( res => res.json() )
    .then( json =>  getData(json))
}

let submitButton = document.querySelector("button")
submitButton.addEventListener("click", function(){
  fetchData();
})

function getData(data){
  console.log(data)
  let email = data.results[0].email
  let firstName = data.results[0].name.first
  let lastName = data.results[0].name.last
  let fullName = document.getElementById("fullname")
  fullName.innerText = firstName + " " + lastName

  let phone = data.results[0].phone
  let phoneNumber = document.getElementById("phone")
  phoneNumber.innerText = phone

  let dob = data.results[0].dob.date
  let birthday = document.getElementById("date_of_birth")
  birthday.innerText = dob
}

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  // fetchData();
});
