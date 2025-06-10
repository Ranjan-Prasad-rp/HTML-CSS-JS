let txt = document.querySelector("p");
let btn = document.querySelector(".btn1");

flag = false;

btn.addEventListener("click", () => {

    if (flag == false) {
        txt.innerText = "Freinds...!"
        txt.style.color = "green";
        btn.innerHTML = "Remove Freind";
        btn.style.backgroundColor = "grey";
        btn.style.color = "white";
        btn.style.borderColor = "white";
        flag = true
    } else {
        txt.innerText = "Stranger";
        txt.style.color = "red";
        btn.innerHTML = "Add Friend";
        btn.style.backgroundColor = "green";
        flag = false;
    }

});