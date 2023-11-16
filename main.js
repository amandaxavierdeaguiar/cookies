var msgCookie = document.getElementById('cookie-msg')

function aceito(){
  localStorage.lgpd = "sim"
  msgCookie.classList.remove('mostrar')
}

if(localStorage.lgpd == 'sim'){
  msgCookie.classList.remove('mostrar')
}else{
  msgCookie.classList.add('mostrar')
}