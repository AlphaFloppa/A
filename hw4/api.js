let button = document.getElementById("get-info-button");
let input = document.getElementById("repos-name-input");
button.addEventListener("mousedown", ShowInfo);
async function GetRepos(){
    let responce = await fetch("https://api.github.com/users/" + input.value + "/repos", {method: "GET"});
    let a = await responce.json(); 
    console.log(a);
    return a;
}

function ShowInfo(){
    let repos_array = GetRepos();
    console.log(repos_array.length + Array.isArray(repos_array));
    if(repos_array.length < 15){
        let container= document.getElementById("main-content");
        let message = document.createElement("div");
        message.innerHTML = "Repositories not found";
        message.className = "not-found-message"
        container.append(message);
    }
}