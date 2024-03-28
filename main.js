"use strict";

{

    const text = document.getElementById("text");
    const save = document.getElementById("save");
    const clear = document.getElementById("clear");
    const message = document.getElementById("message");

    if(localStorage.getItem("memo") === null){
        text.vallue = "";
    }else{
        text.value = localStorage.getItem("memo");
    };

    save.addEventListener("click",()=>{
        // alert(text.value)
        message.classList.add("appear");
        setTimeout(()=>{
            message.classList.remove("appear");
        },1000)
        localStorage.setItem("memo",text.value);

    })

    clear.addEventListener("click",()=>{
        if(confirm("本当に削除しますか??") === true){
            text.value = "";
            localStorage.removeItem("memo");
        }
    });
}