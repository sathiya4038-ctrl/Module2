function signup() {

  var fname = document.getElementById("Firstname").value;
  var lname = document.getElementById("lastname").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var city = document.getElementById("location").value;
   var password=document.getElementById("password").value;
   var confirmpw=document.getElementById("confirmpw").value;

  var nerror = document.getElementById("fname-error");
  var lnerror = document.getElementById("lname-error");
  var pherror = document.getElementById("phone-error");
  var eerror = document.getElementById("email-error");
  var ler = document.getElementById("location-error");
   var passerror=document.getElementById("password-error");
   var confirmerror=document.getElementById("confirmpw-error");

  nerror.textContent = "";
  lnerror.textContent = "";
  pherror.textContent = "";
  eerror.textContent = "";
  ler.textContent = "";
  passerror.textContent="";
  confirmerror.textContent="";


  if (fname == "" || fname == null) {
    
    nerror.textContent = "please enter the firstname";
    return false;
  }

  if (lname == "" || lname == null) {
   
    
    lnerror.textContent = "please enter the last name";
    return false;
  }

  if (phone == "" || phone.length < 10) {
   
    
    pherror.textContent = "please provide the valid number";
    return false;
  }
  if (email == "") {
   
    eerror.textContent = "email";
    return false;
  }

  
  if (city == "") {
   
    
    ler.textContent = "please enter the location";
    return false;
  }

  if(password =="" ){
   
    passerror.textContent=("please enter the password");
    return false;
  }

if(confirmpw =="" ){
   
    confirmerror.textContent=("please enter the password");
    return false;
  }

  localStorage.setItem("fname",fname);
  localStorage.setItem("lastname",lname);
  localStorage.setItem("phno",phone);
  localStorage.setItem("email",email);
  localStorage.setItem("loca",city);
  localStorage.setItem("pw",password);

  window.location.href="signIn.html";




  return false;




}
function clear(){
  var x=document.getElementById("one").value;
  x.value="";
}


  