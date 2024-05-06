// email scrambler
document.getElementById("emailLink").addEventListener("click", function () {
  var email = "info.lmdouglasATgmailDOTcom"
    .replace(/AT/g, "@")
    .replace(/DOT/g, ".");
  this.href = "mailto:" + email;
});

// Obfuscate email address
var user = "Info.lmdouglas";
var domain = "gmail.com";
var emailAddress = user + "@" + domain;

// copyright
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;

// Set the iframe height based on its content
function setIframeHeight() {
  var iframe = document.getElementById("blogIframe");
  if (iframe) {
    iframe.style.height =
      iframe.contentWindow.document.body.scrollHeight + "px";
  }
}

// Call the function when the iframe content is loaded
document.getElementById("blogIframe").onload = setIframeHeight;

var iframe = document.getElementById("blogIframe");
var innerDoc = iframe.contentDocument
  ? iframe.contentDocument
  : iframe.contentWindow.document;

document.addEventListener("DOMContentLoaded", function () {
  var centerTopContainer = document.querySelector(".center-top");
  if (centerTopContainer) {
    centerTopContainer.style.display = "none";
  }
});

// Cookies
const consentBox = document.getElementById("consentBox");
const acceptBtn = document.querySelector(".consentButton");
const rejectBtn = document.querySelector(".rejectButton");

acceptBtn.onclick = () => {
  document.cookie = "CookieBy=GeeksForGeeks; max-age=" + 60 * 60 * 24;
  if (document.cookie) {
    consentBox.classList.add("hide");
  } else {
    alert(
      "Cookie can't be set! Please" +
        " unblock this site from the cookie" +
        " setting of your browser."
    );
  }
};

rejectBtn.onclick = () => {
  alert("Cookies rejected. Some functionality may be limited.");
  consentBox.classList.add("hide");
};

let checkCookie = document.cookie.indexOf("CookieBy=GeeksForGeeks");
checkCookie !== -1
  ? consentBox.classList.add("hide")
  : consentBox.classList.remove("hide");

// Wait for the iframe content to be fully loaded
window.addEventListener("load", function () {
  // Get the iframe element
  var iframe = document.getElementById("blogIframe");

  // Check if the iframe exists
  if (iframe) {
    // Access the iframe's content window and document
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

    // Hide navigation
    var navigation = iframeDoc.querySelector(".navigation");
    if (navigation) {
      navigation.style.display = "none";
    }

    // Hide sidebar top
    var sidebarTop = iframeDoc.querySelector(".sidebar-container");
    if (sidebarTop) {
      sidebarTop.style.display = "none";
    }
  }
});
