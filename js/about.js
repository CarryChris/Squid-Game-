const pagination = [
  "Police training",
  "Marksmanship",
  "High durability",
  "Authoritarian control over",
  "Leadership",
  "Strategy",
];
const skillElement = document.querySelector(".skill");
const prevBtn = document.querySelector(".fa-chevron-left");
const nextBtn = document.querySelector(".fa-chevron-right");
let currentIndex = 0;

function updateSkillText() {
  skillElement.textContent = pagination[currentIndex];
}

updateSkillText();

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % pagination.length;
  updateSkillText();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + pagination.length) % pagination.length;
  updateSkillText();
});

const frontManButton = document.getElementById("frontman__button");
const frontManInfo = document.querySelector(".frontman__info");

frontManButton.addEventListener("click", () => {
  frontManInfo.style.display = "flex";
});

window.addEventListener("click", (event) => {
  // Check the window width
  if (window.innerWidth <= 768) {
    // Check if the clicked element is not inside the modal
    if (
      !frontManInfo.contains(event.target) &&
      event.target !== frontManButton
    ) {
      frontManInfo.style.display = "none";
    }
  }
});
