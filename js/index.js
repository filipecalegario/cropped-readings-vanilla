import { auth } from "https://unpkg.com/strateegia-api/strateegia-api.js";

function login() {
    const btnLogin = document.getElementById("btnLogin");

    btnLogin.addEventListener("click", (e) => {
        console.log("btnLogin clicked");
        const paperTokenElement = document.getElementById("paperToken");

        const paperToken = paperTokenElement.value;

        localStorage.setItem("paperToken", paperToken);
        location.href = "main.html";
    });
}

login();