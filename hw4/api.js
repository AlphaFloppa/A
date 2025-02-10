let button = document.getElementById("get-info-button");
let input = document.getElementById("repos-name-input");
button.addEventListener("mousedown", ShowInfo);
async function GetRepos(){
    let responce = await fetch("https://api.github.com/users/" + input.value + "/repos", {method: "GET"});
    let a = await responce.json(); 
    return a;
}

async function ShowInfo(){
    let repos_array = await GetRepos();
    let repos_list = document.getElementById("repos-list");
    if(repos_array.length <= 0){
        repos_list.innerHTML = "Repositories not found";
        repos_list.classList.add("not-found-message");
    }
    else{
        for(let i = 0; i < repos_array.length; i++){
            let repo = document.createElement("div");
            repo.className = "found-repo";
            repo.innerHTML = "aksbdksa";
            repos_list.append(repo);

        }

    }
}