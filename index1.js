function changecolor(){
    date = new Date();
    hour = date.getHours();
    mins = date.getMinutes();
    seco = date.getSeconds();
   time=date.toLocaleTimeString();
    x = document.getElementById("p1");
    x.innerHTML = time;
    if(seco%2==0){
      x.style.color="red";
    }
    else{
      x.style.color="yellow";
    }
  }
  function start(){
    clear=setInterval(changecolor,1000);
  }
  function stop(){
    clearInterval(clear);
  }


