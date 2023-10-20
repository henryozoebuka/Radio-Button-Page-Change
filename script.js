const Radio1 = document.querySelector("#radio1");
const Radio2 = document.querySelector("#radio2");
const Radio3 = document.querySelector("#radio3");

const Page1 = document.querySelector("#page1");
const Page2 = document.querySelector("#page2");
const Page3 = document.querySelector("#page3");




function radioPage(){
    Page1.style.display = "none";
    Page2.style.display = "none";
    Page3.style.display = "none";
    if(Radio1.checked){
        Page1.style.display = "block";
    }

    else if(Radio2.checked){
        Page2.style.display = "block";
    }

    else if(Radio3.checked){
        Page3.style.display = "block";
    }
}

Radio1.addEventListener("change", radioPage);
Radio2.addEventListener("change", radioPage);
Radio3.addEventListener("change", radioPage);

radioPage();