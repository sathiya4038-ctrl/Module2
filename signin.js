function signin() {
  var username = document.getElementById("user").value;

  var password = document.getElementById("password").value;

  var nam = document.getElementById("name");
  var pass = document.getElementById("passw");

  nam.textContent = "";
  pass.textContent = "";

  var savedfn = localStorage.getItem("fname");
  var savedpw = localStorage.getItem("pw");
  if (username != savedfn) {
    nam.textContent = "invalid username";
    nam.style.color="red";
    nam.style.fontSize="small"
  } 
  else if (password != savedpw) {
    pass.textContent = "invalid password";
    pass.style.color="red";
    nam.style.fontSize="small"
  } 
  else {
   
    alert("login sucess");
    window.location.href = "module1/index.html";
  }
}

function signup() {
  window.location.href = "index.html";
}
