import "./css/styles.css";
import "./haikuChecker.js";

window.onload = function () {
  document
    .getElementById("haikuForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      const line1 = document.getElementById("line1").value;
      const line2 = document.getElementById("line2").value;
      const line3 = document.getElementById("line3").value;
      const newState = stateControl(addLine1);
      stateControl(addLine2(line2));
      stateControl(addLine3(line3));
      if (haikuCheck(state) == false) {
        document.getElementById("response").innerText = "This is not a haiku";
      } else {
        document.getElementById("response").innerText = "This is a haiku";
      }
    });
};

// import "./css/styles.css";
// import "./haikuChecker.js";

// window.onload = function () {
//   const haikuState = {
//     line1: "",
//     line2: "",
//     line3: "",
//   };

//   document.getElementById("submit").onclick = function () {
//     stateControl(addLine1(document.getElementById("line1").value));
//     stateControl(addLine2(document.getElementById("line2").value));
//     stateControl(addLine3(document.getElementById("line3").value));

//     if (haikuCheck(stateControl()) === false) {
//       document.getElementById("response").innerText = "This is not a haiku";
//     } else {
//       document.getElementById("response").innerText = "This is a haiku";
//     }
//   };
// };
