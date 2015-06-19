function browser(){
  document.getElementById('browser').innerHTML = JSON.stringify(bowser);
}

window.onload = browser;
