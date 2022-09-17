// Opening Prompt

let open = prompt("Are you hungry for cookies?");

//Increase Cookie count when image of cookie is clicked
function increase() {
  console.log("UP");
  document.querySelector("span").innerHTML++;
}

// let cookies = 0; // Cookie Total

// let cookiesPerClick = 1;

// let upgradeCost = 25; // The first "double up" upgrade cost

// let bigupgradecost = 200; // The second "big Up" upgrade cost

// let amountOfCookiesHTML = document.querySelector(".cookie-count"); // HTML Total Amount of cookies

// // DOM Event Listener Clicking the cookie
// document.querySelector("img").addEventListener("click", function () {
//   cookies += cookiesPerClick + cursorUpgrade; // Everytime the cookie is clicked, it will add the cookiesPerClick variable and the cursorUpgrade variable
//   amountOfCookiesHTML.innerHTML = `${cookies} Cookies`; // Changes the HTML to the updated amount of cookies
// });

// document
//   .querySelector(".cursor-upgradebtn")
//   .addEventListener("click", function () {
//     // Checks if the upgrade btn was clicked
//     if (cookies >= cursorUpgradeCost) {
//       // Check if you have enough cookies for the cursor upgrade
//       cursorUpgrade++; // The cursor gets an upgrade
//       cookies -= cursorUpgradeCost; // Subtract the cookies that cost to upgrade
//       amountOfCookiesHTML.innerHTML = `${cookies} Cookies`; // Changes the cookies HTML
//       cursorUpgradeCost += 25; // Adds 100 cookies to the cost of the cursor upgrade
//       cursorUpgradeCostHTML.innerHTML = `Current Cursor Upgrade: ${cursorUpgradeCost}`; // Changes the cost of the cursor upgrade HTML
//       currentCursorUpgradeHTML.innerHTML = `Cursor Upgrade: ${cursorUpgrade}`; // Changes how many times you have upgrade Cursor HTML
//     }
//   });
