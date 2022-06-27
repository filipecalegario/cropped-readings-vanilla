import { initializeProjectList } from "./project-list.js";
import { getUser } from "https://unpkg.com/strateegia-api/strateegia-api.js";

const accessToken = localStorage.getItem("paperToken");

if (accessToken == 'undefined') {
    console.log("No access token");
    window.alert("Authentication failed: No access token");
} else {
    console.log(accessToken);
    d3.select("#cropped-text").text("texto")
}


