// Add '@' when you focus inside the input.
let input = document.getElementsByClassName("custom-input");

$("input").focus(function () {
  $(input).val("@");
});

// Remove input value when clicking X.
const x = document.querySelector("#close");

x.addEventListener("click", function (e) {
  $(input).val("");
});
