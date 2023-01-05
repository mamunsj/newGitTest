let boxs = document.querySelectorAll('.col-md-6');
boxs.forEach(box =>{
    box.addEventListener('click', addStyle)
})

function addStyle(){
    if(this.style.background != 'red'){
        this.style.background = "red";
        this.style.color= "white"
    }else{
        this.style.background = "";
        this.style.color = "";
    }
}