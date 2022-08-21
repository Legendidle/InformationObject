let elForm = document.querySelector(".form");
let elInputName = elForm.querySelector(".input-name");
let elInputSurename = elForm.querySelector(".input-surname");
let elInputAge = elForm.querySelector(".input-age");
let elInputNumber = elForm.querySelector(".input-number");

let elResultList = document.querySelector(".list-result");

let arrResultObject = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  let nameValue = elInputName.value;
  let surnameValue = elInputSurename.value;
  let ageValue = elInputAge.value;
  let NumberValue = Number(elInputNumber.value);

  const personObject = {
    Name : nameValue,
    Surname : surnameValue,
    Contact : NumberValue,
    Age : ageValue
  }

  arrResultObject.push(personObject);

  let elItem = document.createElement("li");
  elItem.className = "item form-control mb-2 "

  let elParagraphName = document.createElement("p");
  let elParagraphSurname = document.createElement("p");
  let elParagraphAge = document.createElement("p");
  let elLinkContact = document.createElement("a");
  
  elItem.setAttribute("class", "w-100 col-12")
  elParagraphName.setAttribute("class", "text-center");
  elParagraphAge.setAttribute("class", "text-center");
  elParagraphSurname.setAttribute("class", " text-center");
  elLinkContact.setAttribute("class", "text-center");

  for (let i = 0; i < arrResultObject.length; i++) {
    elParagraphName.textContent = `Name : ${arrResultObject[i].Name}`;
    elParagraphSurname.textContent = `Surname : ${arrResultObject[i].Surname}`;
    elParagraphAge.textContent = `Age : ${arrResultObject[i].Age}`;
    elLinkContact.textContent = arrResultObject[i].Contact
    elLinkContact.href = arrResultObject[i].Contact;

    elItem.append(elParagraphName, elParagraphSurname, elParagraphAge, elLinkContact);

    elResultList.appendChild(elItem);
  }


  console.log(arrResultObject);

  elInputName.value = "";
  elInputSurename.value = "";
  elInputAge.value = ""
  elInputNumber.value = "";
})

elForm.addEventListener("reset", function () {

  arrResultObject.splice(0, arrResultObject.length);
  elResultList.innerHTML = "";

  console.log(arrResultObject);

  elInputName.value = "";
  elInputSurename.value = "";
  elInputAge.value = "";
  elInputNumber.value = "";
})