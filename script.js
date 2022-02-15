function setClassActive() {
  let element = document.getElementsByClassName("panel");
  removeActiveClass();
  element.classList.add("active");
}

function removeActiveClass() {
  element.classList.remove("active");
}