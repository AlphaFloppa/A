let button = document.getElementById("get-info-button");
let input = document.getElementById("repos-name-input");
button.addEventListener("mousedown", ShowInfo);
async function GetReposList(){
    let responce = await fetch("https://api.github.com/users/" + input.value + "/repos", {method: "GET"});
    let a = await responce.json(); 
    return a;
}

async function ShowInfo(){
    let repos_array = await GetReposList();
    let repos_list = document.getElementById("repos-list");
    if(repos_array.length <= 0){
        repos_list.innerHTML = "Repositories not found";
        repos_list.classList.add("not-found-message");
    }
    else{
        for(let i = 0; i < repos_array.length; i += 2){
            let two_repos_conteiner = document.createElement("div");
            two_repos_conteiner.className = "two-repos-container";
            two_repos_conteiner.append(CreateRepoInfoContainer(repos_array[i]));
            two_repos_conteiner.append(CreateRepoInfoContainer(repos_array[i + 1]));
            repos_list.append(two_repos_conteiner);
            console.log(repos_array[i]);
        }

    }
}
function CreateRepoInfoContainer(repo_object){
    let repo = document.createElement("div");
            repo.className = "repo-info-container";
            let heading = document.createElement("div");
            heading.className = "repo-info__heading";
            let heading_name = document.createElement("a");
            heading_name.className = "heading-name";
            heading_name.innerHTML = repo_object.name;
            heading_name.href = "https://github.com/" + input.value + "/"+ repo_object.name; 
            let acsess_type = document.createElement("div");
            acsess_type.className = "acsess-type";
            repo_object.private
                ? acsess_type.innerHTML = "Private"
                : acsess_type.innerHTML = "Public"
            heading.append(heading_name);
            heading.append(acsess_type);
            repo.append(heading);
            let lang_icon_and_name = document.createElement("div");
            lang_icon_and_name.className = "lang-icon-and-name";
            let circle = document.createElement("div");
            circle.className = "repo-info__lang-icon";
            circle.style.backgroundColor = DefineLangIconColor(repo_object);
            let lang_name = document.createElement("div");
            if(repo_object.language != undefined){
                lang_name.innerHTML = repo_object.language;
                lang_icon_and_name.append(circle);
            }    
            else{
                    lang_name.innerHTML = "This repository is empty";
            }
            lang_name.className = "repo-info__lang-name";
            lang_icon_and_name.append(lang_name);
            repo.append(lang_icon_and_name);
            let creation_time = document.createElement("div");
            creation_time.className = "creation-time";
            creation_time.innerHTML = "Created at " + DefineCreationTime(repo_object);
            repo.append(creation_time);
            let updation_time = document.createElement("div");
            updation_time.className = "updation-time";
            updation_time.innerHTML = "Updated on " + DefineUpdationTime(repo_object);
            repo.append(updation_time);
            return repo;
}
function DefineLangIconColor(repo_object){
    switch(repo_object.language){
        case "JavaScript":
            return "#f1e05a";
        case "Java":
            return "#b07219";
        case "Python":
            return "#3572A5";
        case "PHP":            
            return "#4F5D95 ";
       case "Ruby":
            return "#701516";
        case "Shell":
            return "#89e051";
        case "Swift":
            return "#ffac45";
        case "TypeScript":
            return "#2b7489";
        case "Perl":
            return "#0298c3";
        case "Pascal":           
            return "#E3F171";
        case "Lua":
            return "#000080";
        case "Go":
            return "#00ADD8";
        case "F#":
            return "#b845fc";
        case "C":
            return "#555555";
        case "C++":
            return "#f34b7d";
        case "C#":
            return "#178600";
        case "Assembly":
            return "#6E4C13";
        case "Ada":
            return "#02f88c";
        case "CSS":
            return "#563d7c";
        case "HTML":
            return "#e34c26";
        default:
            return "#814CCC";
    }
}
function DefineCreationTime(repo_object){
    let a = new Date(repo_object.created_at.substring(0, repo_object.created_at.indexOf("T")));
    let array_of_months = ["January", "February", "March", "April", "May", "June",
         "Jule", "August", "September", "October", "November", "December"];
    return array_of_months[a.getMonth()] + " " + a.getDate() + ", " + a.getFullYear(); 
}
function DefineUpdationTime(repo_object){
    let a = new Date(repo_object.created_at.substring(0, repo_object.updated_at.indexOf("T")));
    let array_of_months = ["January", "February", "March", "April", "May", "June",
         "Jule", "August", "September", "October", "November", "December"];
    return array_of_months[a.getMonth()] + " " + a.getDate() + ", " + a.getFullYear(); 
}