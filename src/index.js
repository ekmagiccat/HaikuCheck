import "./css/styles.css";
import "./haikuChecker.js";

window.onload = function () {
  document.getElementById("haikuForm").onclick = function () {
    stateControl(addLine1);
    stateControl(addLine2);
    stateControl(addLine3);
    if (haikuCheck(state) == false) {
        document.getElementById("response").innerText = "This is not a haiku"
    } else {
        document.getElementById("response").innerText = "This is a haiku"
    }
  };
};
