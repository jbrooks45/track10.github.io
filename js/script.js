const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("show");
  });
}

const noteForm = document.getElementById("note-form");
const formMessage = document.getElementById("form-message");

if (noteForm && formMessage) {
  noteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const favoriteBeat = document.getElementById("favorite").value.trim();

    if (favoriteBeat) {
      formMessage.textContent = `Thanks for the note. You picked "${favoriteBeat}" as your favorite beat.`;
      noteForm.reset();
    }
  });
}
