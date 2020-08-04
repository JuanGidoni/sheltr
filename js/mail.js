// This document was build by Juan Ignacio Gidoni researching and develop with knowledge of the internet :)


function validateForm() {
    var name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Tu nombre no puede estar vacio";
        document.getElementById("name").style.border = "1px solid red";
        return false;
    }
    else{
      document.getElementById("name").style.border = "1px solid green";
    }
    var email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Tu correo no puede estar vacio";
        document.getElementById("email").style.border = "1px solid red";
        return false;
    }else{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!re.test(email)){
            document.querySelector('.status').innerHTML = "El correo es incorrecto";
            document.getElementById("email").style.border = "1px solid red";
            return false;
     }else{
      document.getElementById("email").style.border = "1px solid green";
    }
    }
    
  
    var subject =  document.getElementById('phone').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Tu telefono no puede estar vacio";
        document.getElementById("phone").style.border = "1px solid red";
        return false;
    }else{
      document.getElementById("phone").style.border = "1px solid green";
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "El mensaje no puede estar vacio";
        document.getElementById("message").style.border = "1px solid red";
        return false;
    }else{
      document.getElementById("message").style.border = "1px solid green";
    }
    document.querySelector('.status').innerHTML = "Enviando...";
  }
  var qd = {};
  if (location.search) location.search.substr(1).split("&").forEach(function(item) {
      var s = item.split("="),
          k = s[0],
          v = s[1] && decodeURIComponent(s[1]); 
      (qd[k] = qd[k] || []).push(v)
  })

if(qd.enviado){
    if(qd.enviado[0]==="1"){
        document.querySelector('.status').innerHTML = "Enviado!";
      
    }
  else{
    document.querySelector('.status').innerHTML = "Enviado!";
  }
}
  if(qd.error){
      if(qd.error[0]==="2"){
        document.querySelector('.status').innerHTML = "Ocurrio un error inesperado en el envio :X";
        
      }
    else{
        document.querySelector('.status').innerHTML = "Ocurrio un error inesperado en el envio :X";
    }
  }
