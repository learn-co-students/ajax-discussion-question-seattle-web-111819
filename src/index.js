const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

function fetchData(){
  fetch('https://randomuser.me/api/')
    .then(res => res.json() )
    .then(json => buildPage(json) )
}

    //SUBMIT BUTTON
// let submitButton = document.querySelector("button")
let submitButton = document.getElementById("btn")
submitButton.addEventListener("click", function(){
  fetchData();
})

function buildPage(json) {
      ///NAME
  let fullName = document.getElementById("fullname");
  let titleName = json.results[0].name.title;
  let firstName = json.results[0].name.first;
  let lastName = json.results[0].name.last;
        // new var w/ all 3 infos
  let jsonFullName = `${titleName} ${firstName} ${lastName}`
        //change innerTest of fullName & set json == to it.
  fullName.innerText = jsonFullName
  console.log(jsonFullName);
      ////EMAIL
  let emailField = document.getElementById("email");
  let eMail = json.results[0].email;
  emailField.innerText = eMail;
      ///STREET
  let streetTag = document.getElementById("street"); 
  let streetNumber = json.results[0].location.street.number; 
  let streetName = json.results[0].location.street.name;
  let streetAdress = `${streetNumber} ${streetName}`
  streetTag.innerText = streetAdress;
      ///CITY
  let cityTag = document.getElementById("city");
  let cityName = json.results[0].location.city;
  cityTag.innerText = cityName; 
      ///STATE
  let stateTag = document.getElementById("state");
  let stateName = json.results[0].location.state;
  stateTag.innerText = stateName; 
      ///POSTAL CODE
  let zipCodeTag = document.getElementById("postcode");
  let zipCode = json.results[0].location.postcode; 
  zipCodeTag.innerText = zipCode;
      ///PHONE
  let phoneTag = document.getElementById("phone");
  let phoneNumber = json.results[0].phone;
  phoneTag.innerText = phoneNumber;
      ///CELL
  let cellTag = document.getElementById("cell");
  let cellNumber = json.results[0].cell; 
  cellTag.innerText = cellNumber;
      ///DOB
  let dobTag = document.getElementById("date_of_birth");
  let dateOfBirth = json.results[0].dob.date;
  dobTag.innerText = dateOfBirth;
}










// helper method to check json being printed out. console.logs the json data. 
function checkData(){
  fetch('https://randomuser.me/api/')
    .then(res => res.json() )
    .then(json => console.log(json) )
};
          ////LOAD PAGE////
document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
      /// ADD BUTTON
// let buttonTag = document.getElementsByClassName("btn btn-primary");
// document.querySelector(".btn btn-primary");
  // let buttonTag = document.getElementById("btn");
  // buttonTag.addEventListener

  checkData();  // runs the json data
  fetchData();    // prints out our function with specific info 
});