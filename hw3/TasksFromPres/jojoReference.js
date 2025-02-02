let floppa = document.getElementById("floppa-img");
let elem = document.getElementById("main-element");
let count = 0;
elem.addEventListener("mousedown", OnClick);

function OnClick(){
    floppa.style.visibility = "visible";
    setTimeout(function() {
        floppa.style.visibility = "hidden";
    }, 150);
    count++;
    console.log("Вы кликнули " + count + " раз(a)");
    if(count % 5 === 0){
        if(count % 10 === 0){
            elem.style.backgroundColor = "red";
            return;
        }
        elem.style.backgroundColor = "blue";
    }
}