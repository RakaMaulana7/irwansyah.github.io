hamburger = document.getElementById('hamburger');
li = document.getElementById('ul');

hamburger.onclick = function(){
    if(li.style.display="none"){
        li.style.display="block";
    }
    else{
        li.style.display="none";
    }
}