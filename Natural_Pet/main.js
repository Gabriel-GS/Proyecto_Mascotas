var btn1 = document.querySelectorAll(.btn1);
function cambiar(number){
    for(i=0; i < btn1.length; i++){
        btn1[i].classList.remove("sky");
        if(number == 1){
            btn1[i].classList.add("close");
            btn1[0].classList.remove("close");
            btn1[0].classList.add("sky");
        }
        if(number == 2){
            btn1[i].classList.add("close");
            btn1[1].classList.remove("close");
            btn1[1].classList.add("sky");
        }
        if(number == 3){
            btn1[i].classList.add("close");
            btn1[2].classList.remove("close");
            btn1[2].classList.add("sky");
        }
    }
}