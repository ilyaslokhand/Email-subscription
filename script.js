const scriptURL =
  "https://script.google.com/macros/s/AKfycbwqTWiDccV3df1xvo_N86zoXCU3kvfRqS-048Fh7EVjx8t1wpamd6uBvAe6weqTbaPn/exec";
const form = document.forms["submit-to-google-sheet"];

const msg = document.getElementById("Msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Email Submitted Succesfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
