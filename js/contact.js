const formInputs = document.querySelectorAll(".contact__input");

formInputs.forEach((inp) => {
  inp.addEventListener("focus", () => {
    inp.parentNode.classList.add("focus");
    inp.parentNode.classList.add("not-empty");
  });
  inp.addEventListener("blur", () => {
    if (inp.value == "") {
      inp.parentNode.classList.remove("not-empty");
    }
    inp.parentNode.classList.remove("focus");
  });
});

const form = document.getElementById("form");
const formFirstName = document.getElementById("firstname");
const formLastName = document.getElementById("lastname");
const formEmail = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const firstnameValue = formFirstName.value.trim();
  const lastnameValue = formLastName.value.trim();
  const emailValue = formEmail.value.trim();

  if (firstnameValue === "") {
    setErrorFor(formFirstName, "Firstname cannot be blank");
  } else {
    setSuccessFor(formFirstName);
  }

  if (lastnameValue === "") {
    setErrorFor(formLastName, "Lastname cannot be blank");
  } else {
    setSuccessFor(formLastName);
  }

  if (emailValue === "") {
    setErrorFor(formEmail, "Email cannot be blank");
  } else {
    setSuccessFor(formEmail);
  }
}

function setErrorFor(input, message) {
  const inputWrap = input.parentElement;
  const errMsg = inputWrap.querySelector(".err-msg");
  input.style.borderColor = "#e74c3c";
  errMsg.innerText = message;
  errMsg.style.visibility = "visible";
}

function setSuccessFor(input) {
  const inputWrap = input.parentElement;
  const errMsg = inputWrap.querySelector(".err-msg");
  errMsg.style.visibility = "hidden";
  input.style.borderColor = "#2ecc71";
}

const theCard = document.getElementById("thecard");
const theFront = document.getElementById("thefront");
const theBack = document.getElementById("thefront");

theCard.addEventListener("click", () => {
  theCard.classList.toggle("rotate");
});
