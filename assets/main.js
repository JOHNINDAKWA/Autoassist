

    let toggle2 = document.getElementById("toggle");
    let navigation2 = document.querySelector(".navigation");
    let main2 = document.querySelector(".main");

    function showToggle() {
        toggle2.style.display = "block";
    }

    function hideToggle() {
        toggle2.style.display = "none";
    }

    toggle2.onclick = function () {
        navigation2.classList.toggle("active");
        main2.classList.toggle("active");
    };


//add hovered class to the selected list

let list = document.querySelectorAll(".navigation li");


function activeLink(){
    list.forEach(item=>{ 
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink))

//Menu Toggle

let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");


toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}
