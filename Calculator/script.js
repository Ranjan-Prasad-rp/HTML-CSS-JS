let result = document.querySelector("input");
let buttons = document.querySelectorAll(".bu , .add , .sub , .mul , .div , .clear , .del , .enter");
let exp = "";
buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {

        if (event.target.innerHTML == "c") {
            result.value = "";
            exp = "";
        }
        else if (event.target.innerHTML == "DEL") {
            exp = exp.substring(0, exp.length - 1);
            result.value = exp;
        }
        else if (event.target.innerHTML == "=") {
            result.value = eval(exp);
            exp = ""

        }
        else {
            exp += event.target.innerHTML;
            result.value = exp;
        }
    });
});

