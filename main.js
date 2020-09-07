var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function hamburgerMenu() {
  var x = document.getElementById("nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var z = document.getElementById("peopleNav");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "none";
  }
}

function peopleMenu() {
  var x = document.getElementById("peopleNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var z = document.getElementById("nav");
  if (z.style.display === "block") {
    z.style.display = "none";
  } else {
    z.style.display = "none";
  }
}

function searchBar() {
  var x = document.getElementById("search");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  var y = document.getElementById("logoSmall");
  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}
